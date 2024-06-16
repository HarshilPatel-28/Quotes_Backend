const express = require("express");
const {createForm,getAllData } = require('../controller/formController');


const router = express.Router();

router.route("/form").get(getAllData)
router.route("/form/new").post(createForm)



module.exports=router;