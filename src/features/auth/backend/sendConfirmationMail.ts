import mail from '@sendgrid/mail';
import fs from 'fs';

const confirmationEmailTemplate = fs.readFileSync(
  `./src/features/auth/backend/confirmationEmail.html`,
  { encoding: `utf-8` },
);

export const sendConfirmationMail = async (email: string, token: string) => {
  if (
    process.env.SENDGRID_API_KEY &&
    process.env.MAIL_FROM &&
    process.env.WEBSITE_URL &&
    process.env.GITHUB_URL
  ) {
    mail.setApiKey(process.env.SENDGRID_API_KEY);

    await mail.send({
      to: `johan.petrikovsky@gmail.com`,
      from: process.env.MAIL_FROM,
      subject: `Confirmation d'inscription`,
      text: `Confirmation d'inscription`,
      html: confirmationEmailTemplate
        .replace(`[**EMAIL**]`, email)
        .replace(`[**TOKEN**]`, token)
        .replace(`[**WEBSITE_URL**]`, process.env.WEBSITE_URL)
        .replace(`[**GITHUB_PROFILE**]`, process.env.GITHUB_URL),
    });
  }
};
