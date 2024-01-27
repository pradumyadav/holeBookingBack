


            const mongoo = require("mongoose")

            const  allData = mongoo.Schema({
                img:{
                    type:String,
                    required:true,
                },
                id:{
                    type:Number,
                   },
                name:{
                    type:String,
                    required:true,
                },
                prize:{
                    type:String,
                    required:true,
                },
                extracharges:{
                    type:String,
                    required:true,
                },
                available:{
                    type:String,
                    required:true,
                },
                people:{
                    type:String,
                    required:true,
                }
                
            })

            const user =mongoo.model("allData",allData)

            module.exports={user}
