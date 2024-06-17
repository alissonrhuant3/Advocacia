import "./styles/index.css"
import svg from './images/separator.svg'

export default function Section2() {
    return(
        <section className="container-fluid section2 sectionall">
            <span className="section2_redline"></span>
            <h1 className="section2_title_ingrid">Por que Doutora Ingrid</h1>

            <div className="section2_why_ingrid_row1">
                <span className="recomendation">DEDICAÇÃO TOTAL</span>
                <img src={svg} alt="separador" style={{ width: 7 }} />

                <span className="recomendation">EMPATIA</span>
                <img src={svg} alt="separador" style={{ width: 7 }} />

                <span className="recomendation">CONSULTA GRATIS</span>
            </div>
            
            <div className="section2_why_ingrid_row2">
                <span className="recomendation">RESULTADOS EXCELENTES</span>
                <img src={svg} alt="separador" style={{ width: 7 }} />

                <span className="recomendation">AMOR PELA JUSTIÇA</span>
            </div>

        </section>
    )
}