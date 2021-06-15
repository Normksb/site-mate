const Employee = require('./Employee');
const Site = require('./Site');
const Schedule = require('./Schedule');
const Weeks = require('./Weeks');
const EmployeeSchedule = require('./EmployeeSchedule');

Employee.hasMany(EmployeeSchedule, {
     foreignkey: 'employee_id',
     onDelete: 'CASCADE'
})

EmployeeSchedule.belongsTo(Employee, {
    foreignkey: 'employee_id',
    onDelete: 'CASCADE'
})

Schedule.hasMany(EmployeeSchedule, {
    foreignkey: 'schedule_id',
    onDelete: 'CASCADE'
})

EmployeeSchedule.belongsTo(Schedule, {
    foreignkey: 'schedule_id',
    onDelete: 'CASCADE'
})

Site.hasMany(Schedule, {
  foreignkey: 'site_id',
  onDelete: 'CASCADE'
})

Schedule.belongsTo(Site, {
  foreignKey: 'site_id',
  onDelete: 'CASCADE'
})

// Schedule.hasOne(Employee, {
//   foreignKey: 'schedule_id',
// });

// Schedule.hasOne(Site, {
//   foreignKey: 'schedule_id',
// });

// Schedule.hasOne(Weeks, {
//   foreignKey: 'schedule_id',
// });

// EmployeeSchedule.hasOne(Schedule, {
//   foreignKey: 'schedule_id'
// });

// Employee.belongsToMany(Schedule, {
//   foreignKey: 'schedule_id',
//   through: 'EmployeeSchedule'
// });

// Site.belongsToMany(Schedule, {
//   foreignKey: 'schedule_id',
// });

// Weeks.belongsToMany(Schedule, {
//   foreignKey: 'schedule_id',
// });

// Schedule.belongsToMany(EmployeeSchedule, {
//   foreignKey: 'schedule_id',
// });

module.exports = { Employee, Site, Weeks, Schedule, EmployeeSchedule };
