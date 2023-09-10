import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Gostaria de conhecer as nossas propostas?</h3>
              <h5 className="description">
                Nós da Chapa Lia Medeiros nos comprometemos com a luta dos alunos do Instituto Metrópole Digital! Pensando nisso, preparamos um conjunto de propostas que misturam a reinvidicação estudantil e a articulação política dentro do instituto.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                role="button"
                size="lg"
                onClick={() => {
                  document.getElementById("download-button").click();
                }}
              >
                Baixar propostas em PDF
                <a id="download-button" style={{display: "none"}} href="/Propostas.pdf" target="_blank" download="Chapa Lia - Propostas"></a>
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="/propostas"
                outline
                role="button"
                size="lg"
              >
                Acessar página de propostas
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          
        </Container>
      </div>
    </>
  );
}

export default Download;
