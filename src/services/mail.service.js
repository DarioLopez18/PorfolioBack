import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

export default class MailService {
  sendEmail(name, lastname, email, message) {
    const mailOptions = {
      from: process.env.USER,
      to: "darioangellopez38@gmail.com",
      subject: "Nuevo correo enviado desde el portfolio",
      text: `Nombre: ${name}\nApellido:${lastname}\nCorreo: ${email}\nMensaje: ${message}`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw new Error("Error al enviar el mail");
    });
  }
}
