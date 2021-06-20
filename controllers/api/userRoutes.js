const router = require("express").Router();
const { Employee, Site, Schedule, EmployeeSchedule } = require("../../models");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const helpers = require('./utils/helpers');


//login
router.post("/login", async (req, res) => {
  try {
    console.log("here is the body", req.body);
    const dbEmployeeData = await Employee.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbEmployeeData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      console.log(
        "holey crap a user logged in......................................"
      );
      return;
    }

    const validPassword = await dbEmployeeData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      console.log(
        "holey crap a user logged in......................................"
      );
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      console.log("holey crap a user logged in");

      res
        .status(200)
        .json({ user: dbEmployeeData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//new user
router.post("/", async (req, res) => {
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

router.post("/sites", async (req, res) => {
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

router.delete("/sites", async (req, res) => {
  try {
    console.log("here is the request body ", req.body);
    const siteData = await Site.destroy({
      where: {
        id: req.body.site,
      },
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

// ==============  Employees =================

router.delete("/employees", async (req, res) => {
  try {
    console.log("here is the request body ", req.body);
    const employeeData = await Employee.destroy({
      where: {
        id: req.body.employee,
      },
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(employeeData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// =============== Schedule =================

router.post("/schedule", async (req, res) => {
  try {
    const scheduleData = await Schedule.create({
      week_date: req.body.week,
      site_id: req.body.site,
    });
    console.log("AAAAAAAAAAAAAAAAAAA", req.body);
    const schedId = scheduleData.id;
    const empArray = req.body.employeeArray;
    const date = req.body.week;
    const site = req.body.site;

    function formatDate(date) {
      return `${new Date(date).getDate()}/${new Date(date).getUTCMonth() + 1}/${new Date(date).getFullYear()}`
    }

    

    const siteName = await Site.findByPk(site)
    // console.log('MMMMMMMMMMMMMMMMMMMMMMMMMMMM',siteName)

    empArray.forEach(async employee => {
      const empEmail = await Employee.findByPk(employee)

      const msg = {
        to: `${empEmail.email}`,
        from: "demositemate@gmail.com",
        subject: "Your work schedule from Site Mate",
        text: "You have a work schedule from Site Mate",
        html: `<h1>You are scheduled to work at ${siteName.site_name} on the ${formatDate(date)}</h1>`,
      };
  
      sgMail
        .send(msg)
        .then((response) => {
          console.log(response[0].statusCode);
          console.log(response[0].headers);
        })
        .catch((error) => {
          console.error(error);
        });

    });

    

    empArray.forEach(async (employee) => {
      const employeeSchedule = await EmployeeSchedule.create({
        schedule_id: schedId,
        employee_id: employee,
      });
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(scheduleData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
