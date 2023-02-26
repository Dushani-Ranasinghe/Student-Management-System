const router = require("express").Router();
// import models
let student = require("../models/student");

//Add student router

//http://localhost:8080/student/add URL for add crud operation
//POST http request 
//can use GET. but less security .can access during request
router.route('/add').post(
    (req,response)=>{
        const name = req.body.name;
        const dob = Date.body.dob;
        const gender = req.body.gender;
        const indexNumber = Number.body.indexNumber;

        const newStudent = new student({
            name,dob,gender,indexNumber
        })
            //send response as json
            //exception handling
        newStudent.save().then(()=>{ response.json("Student Added.")}).catch((err)=>{console.log(err)})
    }
)

module.exports = router;