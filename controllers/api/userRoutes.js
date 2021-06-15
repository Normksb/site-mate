const router = require('express').Router();
const { Employee } = require('../../models');

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

  module.exports = router