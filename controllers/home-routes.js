const router = require('express').Router();
const { Employee, EmployeeSchedule, Schedule, Site } = require('../models');

router.get("/", (req, res) => {
    try {
        res.render("homepage")
        
    } catch (error) {
        console.error(error.message)
    } 
});

router.get("/employees", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
    }
    try {
        const employeeData = await Employee.findAll()
        res.render("employees", {
            loggedIn: req.session.loggedIn,
            employeeData
        })
        
    } catch (error) {
        console.error(error.message)
    } 
});


module.exports = router;