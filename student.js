const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();


let students = [];

router.get('/students', (req, res) => {
    const jsonStudent = fs.readFileSync('student.json', 'utf-8');
    res.send(jsonStudent);
});

router.post('/students', (req, res) => {
    const newStudent = {id, firstName, lastName, group} = req.body;
    students.push(newStudent);
    fs.writeFile('student.json', JSON.stringify(students), () => {});

});

router.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const content = fs.readFileSync("student.json", "utf8");
    const students = JSON.parse(content);
    const foundStudent = students.find((student) => student.id === id);
    res.send(foundStudent);
});

router.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const content = fs.readFileSync("student.json", "utf8");
    const students = JSON.parse(content);
    const student = students.find((student) => student.id === id);
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.group = req.body.group; 
    fs.writeFile('student.json', JSON.stringify(students), () => {});
});

router.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    const content = fs.readFileSync("student.json", "utf8");
    var students = JSON.parse(content);
    students = students.filter((student) => student.id !== id);
    fs.writeFile('student.json', JSON.stringify(students), () => {});
});

module.exports = router;
