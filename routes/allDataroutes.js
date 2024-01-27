const { postData, getData } = require("../controller/allDataController")





const allDataroutes = require("express").Router()

allDataroutes.post("/postdata",postData)
allDataroutes.get("/getdata",getData)


module.exports=allDataroutes