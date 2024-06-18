import Navbar from '../../componentes/Navbar/Navbar'
import Section1 from '../../componentes/Inicio/Section1'
import Section2 from '../../componentes/Inicio/Section2'
import Section3 from '../../componentes/Inicio/Section3'
import Footer from '../../componentes/Footer'

function Principal() {
    return (
        <>
        <Navbar />
        <Section1 />
        <Section2/>
        <Section3 />
        <Footer />
      </>
    );
}

export default Principal;