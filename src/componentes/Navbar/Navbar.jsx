import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/index.css";

function Navbar() {
  return (
    <div className="container-fluid g-0">
      {/* Início Navbar */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#484250" }}
      >
        <div className="container">
          <div className="nomePrincipal ms-3 mt-1">
            <h3>Dra Ingrid</h3>
            <p>Advogados</p>
          </div>
          <button
            className="navbar-toggler"
            type="butFton"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto m-2 mb-2">
                <li className="nav-item pe-5">
                  <a className="nav-link active" aria-current="page" href="#">
                    Início
                  </a>
                </li>
                <li className="nav-item pe-5">
                  <a className="nav-link active" aria-current="page" href="#">
                    Sobre
                  </a>
                </li>
                <li className="nav-item pe-5">
                  <a className="nav-link active" aria-current="page" href="#">
                    Serviços
                  </a>
                </li>
                <li className="nav-item pe-5">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contato
                  </a>
                </li>
                <li className="nav-item pe-5 me-3">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
      {/* Fim Navbar */}
    </div>
  );
}

export default Navbar;
