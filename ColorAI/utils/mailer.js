import nodemailer from "nodemailer";
import emailTemplate from "./emailTemplate.js";

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const subject = "Your AI Generated Color Pallet";

const sendEmail = (emailTo, colorList) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: emailTo,
      subject: subject,
      html: emailTemplate(colorList),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
};

export default sendEmail;
