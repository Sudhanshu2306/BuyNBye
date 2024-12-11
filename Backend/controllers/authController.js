import { asyncHandler } from "../utils/asynchandler.js";
import { errorhandler } from "../utils/errorHandler.js";
import {User} from "../models/User.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"


const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        return res
        .status(500)
        .json(
         new errorhandler(500, "Something went wrong while generating referesh and access token")
        )
    }
}

const registerUser = asyncHandler( async (req, res) => {

    const {name, email, gender, password , confirmPassword} = req.body
    if (
        [name, email, gender, password , confirmPassword].some((field) => field?.trim() === "")
    ) {

        return res
        .status(400)
        .json( new errorhandler(400, "All fields are required"))
    }
    
    if(password !== confirmPassword){
        return res
        .status(402)
        .json(
             new errorhandler(402, "Password Do not match")
        )
    }
    
    const existedUser = await User.findOne({ email })

    if (existedUser) {
        return res
        .status(409)
        .json( new errorhandler(409, "User with email or username already exists"))
    }
    const user = await User.create({
        name,
        email : email.toLowerCase(), 
        gender,
        password,
    })
    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    const options = {
        httpOnly: true,
        secure: true, // Only secure in production
        sameSite: "None", // Required for cross-origin cookies
    };
    if (!createdUser) {
        return res
        .status(500)
        .json( new errorhandler(500, "Something went wrong while registering the user"))
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: createdUser, accessToken, refreshToken
            },
            "User Signed Up Successfully"
        )
    )

})

const loginUser = asyncHandler(async (req, res) =>{

    const {email , password} = req.body
    console.log(email);

    if (!password && !email) {
        return res
        .status(400)
        .json( new errorhandler(400, "username or email is required"))
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res
        .status(400)
        .json( new errorhandler(404, "User does not exist"))
    }
    const isPasswordValid = await user.isPasswordCorrect(password)

   if (!isPasswordValid) {
    return res
        .status(400)
        .json( new errorhandler(401, "Invalid user credentials"))
    }

   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    if (!loggedInUser) {
        return res
        .status(500)
        .json( new errorhandler(500, "Something went wrong while registering the user"))
    }
    const options = {
        
        httpOnly: true,
        secure: true, // Only secure in production
        sameSite: "None", // Required for cross-origin cookies
    };

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )

})

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        return res
        .status(401)
        .json( new errorhandler(401, "unauthorized request"))
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)

        if (!user) {
            return res
            .status(401)
            .json( new errorhandler(401, "Invalid refresh token"))
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            return res
            .status(401)
            .json( new errorhandler(401, "Refresh token is expired or used"))
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        return res
        .status(401)
        .json( new errorhandler(401, error?.message || "Invalid refresh token"))
    }

})

const changeCurrentPassword = asyncHandler(async(req, res) => {
    const {oldPassword, newPassword} = req.body

    const user = await User.findById(req.user?._id)
    if(!user){
        res.status(402).json(new errorhandler(402,"user is not Signed"));
    }
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)
    500
    if (!isPasswordCorrect) {
        throw new errorhandler(400, "Invalid old password")
    }

    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"))
})


const getCurrentUser = asyncHandler(async(req, res) => {
    try {
        return res
        .status(200)
        .json(new ApiResponse(
            200,
            req.user,
            "User fetched successfully"
        ))
    } catch (error) {
        console.log("No user Exist")
    }
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {name, email} = req.body

    if (!name || !email) {
        return res
        .status(400)
        .json( new errorhandler(400, "All fields are required"))
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                name,
                email: email
            }
        },
        {new: true}
        
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))
});


export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails
}