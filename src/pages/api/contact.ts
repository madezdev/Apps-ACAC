import type { APIRoute } from "astro"
import { mailOptions, transporter } from "../../server/nodemailer"

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const name = data.get("name")
  const surname = data.get("surname")
  const email = data.get("email")
  const phone = data.get("phone")
  const company = data.get("company")
  const date = data.get("date")
  const contact = data.get("contact")
  const message = data.get("message")

  if (!name || !email || !message || !surname || !phone || !company || !date || !contact) {
    return new Response(
      JSON.stringify({
        message: "Faltan campos requeridos",
      }),
      { status: 400 }
    )
  }

  const htmlBody = `
    <h3>Nuevo mensaje de ${name} ${surname} desde el formulario de contacto ACAC</h3>
    <p><strong>Nombre y Apellido:</strong> ${name} ${surname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Empresa:</strong> ${company}</p>
    <p><strong>Medio de contacto preferente:</strong> ${date}</p>
    <p><strong>Momento del día para contactarlo :</strong> ${contact}</p>
    <h3><strong>Mensaje:</strong> ${message}</h3>
  `

  await transporter.sendMail({
    ...mailOptions,
    from: `${email}`,
    subject: `Nuevo mensaje de ${name} ${surname} desde el formulario de contacto`,
    html: htmlBody

  })

  return new Response(
    JSON.stringify({
      message: "¡Mensaje enviado con exito!"
    }),
    { status: 200 }
  )
}