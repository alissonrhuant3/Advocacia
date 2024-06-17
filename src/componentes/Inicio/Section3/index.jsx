import "./styles/index.css"

export default function Section3() {
    return (
        <section className="container-fluid g-0 section3 sectionall">
            <div className="section3_container">
                <div className="section3__content">
                    <h1 className="section3__title">RECUPERE O ACESSO A SUA CONTA</h1>
                    <p className="section3_paragraph1">
                    Você sabia que, por lei, os responsáveis pelo suporte de Redes Sociais, como <strong>Facebook, Instagram, WhatsApp e YouTube, são obrigados a fornecer meios para recuperar sua conta?</strong> <br />
                    Ocorre que, na maioria dos casos, os usuários não conseguem recuperar a conta pelo suporte. <br /><br />
                    Assim, ao entrar com uma ação judicial, <strong>as plataformas são condenadas a devolver a conta ao usuário e podem ser condenadas a indenizar o usuário pelos transtornos e prejuízos sofridos.</strong> <br /><br />
                    <strong>Nosso escritório conta com advogados especializados para recuperar sua conta na Justiça.</strong>
                    </p>

                    <div className="section3_buttons">
                     <a target="_blank" className="section3_button" href="https://api.whatsapp.com/send?phone=61992480015&text=Ol%C3%A1!%20Quero%20recuperar%20minha%20conta%20na%20justi%C3%A7a!">Recuperar Conta</a>
                    </div>
                </div>
                <div className="parallax module"></div>
            </div>
        </section>
    )
}