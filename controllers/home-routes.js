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
        const employee = employeeData.map((employee) => employee.get({plain:true}))
        res.render("employees", {
            loggedIn: req.session.loggedIn,
            employee
        })
        
    } catch (error) {
        console.error(error.message)
    } 
});

router.get("/sites", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
    }
    try {
        const siteData = await Site.findAll()
        const site = siteData.map((site) => site.get({plain:true}))
        res.render("sites", {
            loggedIn: req.session.loggedIn,
            site
        })
        
    } catch (error) {
        console.error(error.message)
    } 
});


module.exports = router;