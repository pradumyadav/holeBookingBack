const { login } = require("../controller/login")


    const routes = require("express").Router()

    routes.post("/login",login)

    module.exports=routes