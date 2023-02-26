const router = require("express").Router();

// import models
let Student = require("../models/student");

//Add students

//http://localhost:8080/student/add URL for add crud operation
//POST http request
//can use GET. but less security .can access during request
router.route("/add").post((req, response) => {
  const name = req.body.name;
  const dob = Date.body.dob;
  const gender = req.body.gender;
  const indexNumber = Number.body.indexNumber;

  const newStudent = new Student({
    name,
    dob,
    gender,
    indexNumber,
  });
  //send response as json
  //exception handling
  newStudent
    .save()
    .then(() => {
      response.json("Student Added.");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Get students
router.route("/").get((response) => {
  Student.find()
    .then((students) => {
      response.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update students
router.route("/update/:id").put(
  //async function
  async (req, respose) => {
    //req.params -> id comes from url as a parameter, fetch it
    let userId = req.params.id;
    // using de structer
    //object comes from front end in the request body
    //we put in a variable
    const { name, dob, gender, indexNumber } = req.body;
    //object to be update
    const updateStudent = { name, dob, gender, indexNumber };
    //first method
    const update = await Student.findByIdAndUpdate(userId, updateStudent)
      .then(() => {
        respose.status(200).send({ status: "User Updated", user: update });
      })
      .catch(() => (err) => {
        //show error in console
        console.log(err);
        //send error to frontend
        respose.status(500).send({ status: "Error with updating data" });
      });
    //second method
    // const update = await Student.findByIdAndUpdate(userId,  {name,dob,gender,indexNumber});
  }
);
//Delete students
module.exports = router;
