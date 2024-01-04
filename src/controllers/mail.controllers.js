import MailService from "../services/mail.service.js";

const mailService = new MailService();

export const sendEmail = (req, res) => {
  try {
    
    const { name, lastname, email, message } = req.body;
    const result = mailService.sendEmail(name, lastname, email, message);
    res.status(200).json({ success: true, message: "Mensaje enviado con éxito" });
  } catch (e) {
    res.status(500).json({ success: false, error: "Ha ocurrido un error" });
  }
};
