const nodemailer = require('nodemailer')

exports.handler = async function(event) {
    
    const userName = event.queryStringParameters.userName
    const userEmail = event.queryStringParameters.userEmail
    const messege = event.queryStringParameters.userMessege
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${userName} <${userEmail}>`, // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line      
      html: `
      <h3>New Message</h3>
      <p>From: ${userName}</p>
      <p>Text: ${messege}</p>
      `, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    return {
        statusCode: 200,
        body: JSON.stringify({ previewURL: nodemailer.getTestMessageUrl(info) })
    }
}