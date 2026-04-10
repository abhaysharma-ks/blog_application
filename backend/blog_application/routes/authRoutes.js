const express=require("express")
const { register, login, logout } = require("../controllers/authController")
const { registerSchema, loginSchema } = require("../validatior/auth.validation.schema")
const { Validate } = require("../middlewares/validatorMiddleware")

const router=express.Router()

router.post("/register",Validate(registerSchema),register)
router.post("/login",Validate(loginSchema),login)
router.post("/logout",logout)

module.exports=router