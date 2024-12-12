const mongoose=require('mongoose');

const schema=mongoose.schema(
    {
        text:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            required:true
        }
    },
    {time:true}
)

module.exports=mongoose.model("todos",schema);