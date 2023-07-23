module.exports = app => {

    // import student controller
    const students_logic = require("../controllers/student.controller.js");

    // import express router
    var router = require("express").Router();

    // create student api route
    //http://localhost:9004/students/add
    router.post("/add", students_logic.create);

    // retrieve all students api route
    // http://localhost:9004/students/r
    router.get("/r", students_logic.retrieve_students);
    
    // update students api route
    //http://localhost:9004/students/:id
    router.put("/:id", students_logic.update_student); 

    // update students api route
    //http://localhost:9004/students/delete/:id
    router.delete("/delete/:id", students_logic.delete_student); 

    // count students api route
    //http://localhost:9004/students/count-students
    router.get('/count-students', students_logic.count_students);

    // define default route
    app.use('/students', router);

}
// http://localhost:9004/students/add