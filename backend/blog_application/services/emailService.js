const nodemailer = require("nodemailer");
const path = require('path')
const ejs=require('ejs')

// transporter (use env variables 🔥)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // app password
  },
});

// send welcome email
// const sendWelcomeEmail = async (userEmail, userName) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: userEmail,
//     subject: "Welcome to Our App!",
//     text: `Hi ${userName}, thanks for signing up!`,
//     html: `<h1>Welcome, ${userName}!</h1><p>We are thrilled to have you.</p>`,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.response);
//   } catch (error) {
//     console.error("Email error:", error.message);
//   }
// };

const sendWelcomeEmail = async (userEmail, userName) => {
  try {
    // 1. Define the path to your EJS file
    // Assuming your file is at: /views/welcomeEmail.ejs
    const templatePath = path.join(__dirname, "../template/welcomeEmail.ejs");

    // 2. Render the EJS file with the user's data
    const htmlContent = await ejs.renderFile(templatePath, { name: userName });

    const mailOptions = {
      from: `"BlogApp Team" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Welcome to Our Blog Community! 🚀",
      // Text version is a fallback for older email clients
      text: `Hi ${userName}, thanks for signing up to our Blog Application!`, 
      html: htmlContent, 
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Email error:", error.message);
  }
};
module.exports = {
  sendWelcomeEmail,
};
