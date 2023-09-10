/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/index"
              >
                Página Inicial
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/chapa.lia"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:lia.medeiros.daal@gmail.com"
              >
                E-mail
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          Por um DAAL independente!
        </div>
      </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
