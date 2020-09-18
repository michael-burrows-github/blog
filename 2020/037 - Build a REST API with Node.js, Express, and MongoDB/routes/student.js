const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.post("/add", (req, res) => {
  const newStudent = new Student({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
  newStudent
    .save()
    .then(() => res.json("Student Added..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/", (req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/delete/:id", (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json("Student Deleted..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update/:id", (req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      student.name = req.body.name;
      student.age = req.body.age;
      student.email = req.body.email;
      student
        .save()
        .then(() => res.json("Student Updated..."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
