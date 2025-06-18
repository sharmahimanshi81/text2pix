import mongoose from "mongoose";

const transactionSchema=new mongoose.Schema({
  userId:{type: String,required :true},
  plan:{type: String,required :true},
  amount:{type: String,required :true},
  credits:{type: Number,require :true},
  payment:{type: Boolean,default :false},
  date:{type:Number},
})

const transactionModel = mongoose.models.transaction|| mongoose.model("transaction",transactionSchema)


export default transactionModel;