const sequelize = require('../config/connection');
const {Employee, Site, Weeks, Schedule} = require('../models');
const testEmployee = require('./test_employees.json');
const testSite = require('./test_sites.json');
const testWeeks = require('./test_weeks.json');
const testSchedule = require('./test_schedule.json');


const seedDatabase = async () => {
    await sequelize.sync({force: true})
    await Employee.bulkCreate(testEmployee, {
        individualHooks: true,
        returning: true
    })
    await Site.bulkCreate(testSite, {
    })
    await Weeks.bulkCreate(testWeeks, {
    })
    await Schedule.bulkCreate(testSchedule, {
    })
    process.exit(0)
}

seedDatabase();