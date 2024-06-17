import { send } from "@emailjs/browser";

export default function sendMail(author, mail, phone, message) {

    const templateParams = {
        author_email: mail,
        author_name: author,
        author_phone: phone,
        author_message: message
    }

    send(`${import.meta.env.IGR_SERVICE_KEY}`, `${import.meta.env.IGR_TEMPLATE_ID}`, templateParams, { publicKey: `${import.meta.env.IGR_PUBLIC_KEY}` }).then(res => {
        alert("O email foi enviado com sucesso")
        return true
    }, (err) => {
        console.log(err)
        alert("Não foi possivel entrar em contato.")
        return false
    })
}