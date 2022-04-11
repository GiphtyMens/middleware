const {Router} = require("express");
const {login, register} = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.get("/login", login);
authRouter.get("/register", register);

module.exports = authRouter;
