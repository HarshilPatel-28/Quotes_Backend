const Form = require("../models/formModel")
const catchAsyncErrors = require("../middleware/catchAsyncError")



// create product  -- Admin

exports.createForm =catchAsyncErrors(  async(req,res,next)=>{
    const FormData = await Form.create(req.body)
    res.status(201).json({
        success:true,
        FormData
    })
})

// get all product 

exports.getAllData =catchAsyncErrors( async(req,res)=>{

    // const resultPerPage = 5;
    

   
    const FormData = await Form.find();

    res.status(200).json({
        success:true,
        FormData
    })
})