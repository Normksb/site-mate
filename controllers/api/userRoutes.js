const router = require('express').Router();
const { Employee, Site, Schedule, EmployeeSchedule } = require('../../models');

//login
router.post('/login', async (req, res) => {
    try {
        console.log("here is the body",req.body);
      const dbEmployeeData = await Employee.findOne({
        where: {
          email: req.body.email,
        },
        
      });
  
      if (!dbEmployeeData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
          console.log('holey crap a user logged in......................................')
        return;
      }
  
      const validPassword = await dbEmployeeData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
          console.log('holey crap a user logged in......................................')
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        console.log('holey crap a user logged in')
  
        res
          .status(200)
          .json({ user: dbEmployeeData, message: 'You are now logged in!' }); 
      });
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //new user
  router.post('/', async (req, res) => {
    try {
      const dbEmployeeData = await Employee.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbEmployeeData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Sign Out
  router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  // ==============  Sites =================

  router.post('/sites', async (req, res) => {
    try {
      const siteData = await Site.create({
        site_name: req.body.siteName,
        site_address: req.body.siteAddress,
        site_notes: req.body.siteNotes,
        contact_name: req.body.siteContact,
        contact_phone: req.body.contactPhone,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(siteData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router