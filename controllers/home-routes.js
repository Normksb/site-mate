const router = require('express').Router();
const { Employee, EmployeeSchedule, Schedule, Site } = require('../models');

// ================= Homepage =======================
router.get("/", (req, res) => {
    try {
        res.render("homepage", {
            loggedIn: req.session.loggedIn,  
        })
        
    } catch (error) {
        console.error(error.message)
    } 
});

// ================== Employees =====================
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


// ========== Sites ================
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

// ================ Schedule ==================
router.get("/schedule", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
    }
    try {
        const employeeData = await Employee.findAll()
        const employee = employeeData.map((employee) => employee.get({plain:true}))
        // console.log('XXXXXXXXXXXXXXXXXXXX',employee)
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
                // group: 'week_date'
                
                
            },
            {
                model: Employee,
            },
        ],
    // group: 'schedule_id'
}
        
        )
        const newScheduleData = scheduleData.map((schedule) => schedule.get({plain:true}))
        console.log("DDDDDDDDDDDDDDDDDDthis is New schedule data", newScheduleData)

        employeeArray = []
        newScheduleData.forEach(element => {
            employeeArray.push(element.Employee.first_name) 
            employeeArray.push(element.Employee.last_name) 
        });
        console.log(employeeArray)
        

        res.render("schedule", {
            loggedIn: req.session.loggedIn,
            schedule: newScheduleData,
            // first_name: newScheduleData.Employee.first_name,
            // last_name: newScheduleData.Employee.last_name,
            employee,
            site
        })
        
    } catch (error) {
        console.error(error.message)
    } 
});



module.exports = router;