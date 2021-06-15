const router = require('express').Router();
const { Employee, EmployeeSchedule, Schedule, Site } = require('../models');

router.get("/", (req, res) => {
    try {
        res.render("homepage")
        
    } catch (error) {
        console.error(error.message)
    } 
});

module.exports = router;