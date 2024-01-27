

const url="mongodb+srv://pradumyadav020:OTuSxAgBcfbW7fMk@cluster0.cevyyv1.mongodb.net/?retryWrites=true&w=majority"

const mongoose = require("mongoose")


const connection =async()=>{
        try{
            await mongoose.connect (url)
            console.log("Data Base Connected")
        }

        catch(err){
            console.log("ERROR",err)
        }
}

module.exports =connection