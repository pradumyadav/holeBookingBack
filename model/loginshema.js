



        const mongo = require ("mongoose")

        const userInfo =mongo.Schema({
            email:{
                type:String,
                unique:true,
                required:true,
              },
              password:{
                type:String,
                required:true,     
              }
        })

        const user =mongo.model("userInfo",userInfo)

        module.exports =user;