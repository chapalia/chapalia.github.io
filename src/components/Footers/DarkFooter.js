/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
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
  );
}

export default DarkFooter;
