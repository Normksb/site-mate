const Employee = require('./Employee');
const Site = require('./Site');
const Schedule = require('./Schedule');
const Weeks = require('./Weeks');
const EmployeeSchedule = require('./EmployeeSchedule');

Schedule.hasOne(Employee, {
  foreignKey: 'schedule_id',
});

Schedule.hasOne(Site, {
  foreignKey: 'schedule_id',
});

Schedule.hasOne(Weeks, {
  foreignKey: 'schedule_id',
});

EmployeeSchedule.hasOne(Schedule, {
  foreignKey: 'schedule_id'
});

Employee.belongsToMany(Schedule, {
  foreignKey: 'schedule_id',
});

Site.belongsToMany(Schedule, {
  foreignKey: 'schedule_id',
});

Weeks.belongsToMany(Schedule, {
  foreignKey: 'schedule_id',
});

Schedule.belongsToMany(EmployeeSchedule, {
  foreignKey: 'schedule_id',
});

module.exports = { Employee, Site, Weeks, Schedule, EmployeeSchedule };
