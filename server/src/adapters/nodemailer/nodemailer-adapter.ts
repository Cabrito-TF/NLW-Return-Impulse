import { MailAdapter, SendMailData } from "../mail-asdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "45ea977eff7926",
    pass: "fa19117b92c4df"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject,body}: SendMailData){
    await transport.sendMail({
        from:"Humano Comun <HUmano@gmail.com>",
        to:"Caio Brito <pro.caio18@gmail.com>",
        subject,
        html:body,
      });
  };
}