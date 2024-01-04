import MailService from "../services/mail.service.js";

const mailService = new MailService();

export const sendEmail = (req, res) => {
  try {
    const { name, lastname, email, message } = JSON.stringify(req.body);
    const result = mailService.sendEmail(name, lastname, email, message);
    res.status(200).send('Mensaje enviado con éxito.');
  } catch (e) {
    return res.status(500).send("Ha ocurrido un error");
  }
};
