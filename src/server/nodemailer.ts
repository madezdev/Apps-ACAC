import nodemailer from 'nodemailer'
import { config } from 'dotenv'

config()

const email = process.env.MAILER_EMAIL_GMAIL
const pass = process.env.MAILER_SECRET_KEY_GMAIL

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: pass
  }
})

export const mailOptions = {
  to: email,
}