const express = require("express");
const router = express.Router();
const Student = require('./Student');//../models/Student

router.get('/students', function (req, res, next) {
    Student.find({})
        .then(function (students) {
            res.send(students);
        })
        .catch(next);
});

router.post('/students', function (req, res, next) {
    Student.create(req.body)
        .then(function (students) {
            res.send(students);
        })
        .catch(next);
});

router.put('/students/:id', function (req, res, next) {
    Student.findOneAndUpdate({
            _id: req.params.id
        })
        .then(function (student) {
            student.findOne({
                _id: req.params.id
            });
        })
        .then(function (student) {
            res.send(student);
        });
});

router.delete('/students/:id', function (req, res, next) {
    Student.findOneAndDelete({
            _id: req.params.id
        })
        .then(function (student) {
            res.send(student);
        });
});

module.exports = router;
 // "type": "module", ---> put this in package.json file to add ES6 to the project (import/export).