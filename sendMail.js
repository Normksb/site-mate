const sgMail = require('@sendgrid/mail')
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'nksb414@live.com.au', 
  from: 'nksb414@gmail.com', 
  subject: 'Your work schedule from Site Mate',
  text: 'You have a work schedule from Site Mate',
  html: '<strong>you are scheduled to work at Mandurah Hospital on 31/05/2021</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })

