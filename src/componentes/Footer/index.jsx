import { useState } from "react";
import "./styles/index.css";
import sendMail from "../../functions/sendMail";

export default function Footer() { /* Coloca o negocio de enviar formulario aqui */

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [mensagem, setMensagem] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !telefone || !mensagem) {
        return alert("Todos os campos devem estar preenchidos.")
    }

    sendMail(name, email, telefone, mensagem)

    setName("")
    setEmail("")
    setTelefone("")
    setMensagem("")
}

  return (
    <>
      <section className="container-fluid g-0 section_footer">
        <div className="sectionf_formulario">
            <span className="section2_redline"></span>
            <h1 className="form_title_line1">Marque uma consulta do caso</h1>
            <h1 className="form_title_line1 title_line2">Sem custo, sem vínculos</h1>

            <div className="sectionf-inputs">
              <form action="/">
                <div className="inputs_nome">
                  <input value={name} className="sectionf_input" onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Nome" />
                  <input className="sectionf_input" onChange={(e) => setSobrenome(e.target.value)} type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" />
                </div>

                <div className="inputs_contact">
                  <input value={email} className="sectionf_input" onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="E-mail" />
                  <input value={telefone} className="sectionf_input" onChange={(e) => setTelefone(e.target.value)} type="tel" name="telefone" id="telefone" placeholder="Telefone" />
                </div>

                <textarea value={mensagem} className="sectionf_input sectionf_textarea" onChange={(e) => setMensagem(e.target.value)} name="mensagem" id="mensagem" placeholder="Insira sua mensagem"></textarea>

                <div className="sectionf_buttons">
                  <button className="sectionf_button sectionf_input" onClick={handleSubmit} type="submit">Enviar</button>
                </div>
              </form>
            </div>
            <span className="sectionf_address">Rua pimentão, 157 - Bom Retiro <br />São Paulo - SP, 01121-000 <br /> <br /> Tel: (11) 3456-7890 <br /> <br /> info@meusite.com </span>
        </div>

        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.744394006216!2d-47.98685672486392!3d-16.07874848460213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935986a04bc69287%3A0x2df62ecea2daede5!2sShopping%20Sul!5e0!3m2!1spt-BR!2sbr!4v1718640363299!5m2!1spt-BR!2sbr"
          width="100%"
          height="410"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <footer className="footer">
        <span className="footer_direitos">&copy; 2024 por Alisson & Augusto. Todos os direitos reservados.</span>
      </footer>
    </>
  );
}
