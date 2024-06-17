// import img from "./images/advogados.png";
import { useState } from "react";
import "./styles/index.css";
import sendMail from "../../../functions/sendMail";

function Section1() {
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

    return(
        <section className="container-fluid section1 g-0 sectionall">
            <div className="section1__conteudo" style={{marginTop:140}}>
                <div className="section1__tituloesubtitulo">
                    <p id="section1__tituloesubtitulo__titulo">Bloquearam sua conta?</p>
                    <h1 id="section1__tituloesubtitulo__subtitulo">Nós temos a solução para o seu problema!</h1>
                </div>
                <div className="section1__formulario">
                    <span id="borda">
                        <form action="/">
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="nome" id="nome" className="section1_input" placeholder="Nome"/>
                            
                            <div className="section1_doisinputs">

                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" className="section1_input_" placeholder="E-mail"/>
                                
                                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="tel" name="telefone" id="telefone" className="section1_input_" placeholder="Telefone"/>
                            
                            </div>   
                            
                            <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="section1_input section1_textarea" placeholder="Insira sua mensagem" />
                            
                            <div className="section1__buttons">
                                <button onClick={handleSubmit} type="submit" className="section1_input section1_input_enviar">Enviar</button>
                            </div>
                        </form>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Section1;