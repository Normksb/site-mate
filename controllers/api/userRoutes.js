const router = require('express').Router();
const { Employee } = require('../../models');

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

  module.exports = router