

# Site Mate
 
  
  ![alt text](./public/images/screenshot.PNG)
  
[Here is a link to the deployed app on Heroku](https://construction-site-mate.herokuapp.com/)

[Here is a link to the gitHub repo](https://github.com/Normksb/site-mate)  

![AUR license](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)

## Description
This Application is a Human Resources and Work Schedule Management System, designed for construction companies to manage their employees work schedules.

It allows a manager to view and add:   
- Employees
- Work Sites
- Work Schedules

It also has functionality enabling users to:
- Delete Employees
- Delete Sites
- When a schedule is created, an email will be dynamically sent to all relevent employees with the schedule details.


---
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Technologies](#technologies)
- [Questions](#questions)

---
## Installation  
  
Please follow these steps to install the project and any dependancies locally.

```bash
install node.js
clone the repo from gitHub
npm install
 
```

In order to run the app you will need to configure the following environment variables (dotenv is included in the package dependencies for this purpose);

for MYSQL
- DB_NAME  // database name
- DB_HOST  // network address/hostname of MYSQL server
- DB_USER  // MYSQL username
- DB_PASS  // MYSQL password
- SENDGRID_API_KEY // a valid API key for sendgrid email

Once you have configured your environment variables you may create database seed data using the following;

```bash
npm run seeds
 
```

---
## Usage

 
To start the express server please use the start script already found in the package.json as follows;

```bash
npm start
```


---
## License

This project is licensed under ![AUR license](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)

---
## Contributing

Contributing to this project is not currently available.


---

## Technologies

Front End Technologies
- HTML
- CSS
- Javascript

Back End Technologies
- Node JS
- Express JS
- MySQL
- Sequelize
- Bcrypt
- Handlebars
- Express Handlebars
- Sendgrid for automated emailing

---

## Questions

For any questions and support please contact Brett Treweek, Yuri Kitchin or Norman Bernard.  
- Email: bretttrew@gmail.com  
- Github: [Brett Treweek](https://github.com/brett-treweek)
- Email: ykitchin@gmail.com
- Github: [Yuri Kitchin](https://github.com/yurikitchin)
- Email: nksb414@gmail.com
- Github: [Norman Bernard](https://github.com/Normksb)