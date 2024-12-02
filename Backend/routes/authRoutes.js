import express from 'express'

const router = express.Router()

// register , method:POST
router.post('/register', registerController)

export default router