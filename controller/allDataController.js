const { data } = require("../ALlData/alldata")
const { user } = require("../model/addDataSchema")


        const postData=async(req,res)=>{
            const postData=await user.create(data)
            res.send(postData)
        }


        const getData=async(req,res)=>{
            const getData=await user.find({})
            res.send(getData)
        }


        module.exports ={postData,getData}