const router = require('express').Router();
const { Employee, EmployeeSchedule, Schedule, Site } = require('../models');

router.get("/", (req, res) => {
    try {
        res.render("homepage", {
            loggedIn: req.session.loggedIn,  
        })
        
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

router.get("/schedule", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
    }
    try {
        const employeeData = await Employee.findAll()
        const employee = employeeData.map((employee) => employee.get({plain:true}))
        const siteData = await Site.findAll()
        const site = siteData.map((site) => site.get({plain:true}))
        const scheduleData = await EmployeeSchedule.findAll({include: [
            {
                
                model: Schedule,
                include: [
                    {
                        model: Site,
                    }
                ],
                
                
            },
            {
                model: Employee,
            }
        ]})
        console.log("this is schedule data", scheduleData)
        const schedule = scheduleData.map((schedule) => {
            return {
                
                site_name: schedule.Schedule.site.site_name,
                week_date: schedule.Schedule.week_date,
                name: schedule.Employee.first_name + ' ' + schedule.Employee.last_name,

            }
        })
        console.log("this is scheudule", schedule)

        res.render("schedule", {
            loggedIn: req.session.loggedIn,
            schedule,
            employee,
            site
        })
        
    } catch (error) {
        console.error(error.message)
    } 
});



module.exports = router;