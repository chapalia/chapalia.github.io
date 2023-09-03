import React from "react";

// reactstrap components
import {   Button,
  Container,
  Row,
  Col } from "reactstrap";

// core components

function Membros() {
  return (
    <>
      <div className="section section-team text-center" id="section-team-chapa">
          <Container>
            <h2 id="title-membros" className="title">Conheça os membros da nossa diretoria!</h2>
            <div className="team">
              <Row style={{marginBottom: "3%"}}>
                <Col md="4">
                  <div className="team-player">
                    <img
                    style={{width: "30%"}}
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/gabriel.jpg")}
                    ></img>
                    <h4 className="title">Gabriel Ribeiro</h4>
                    <p className="category text-info">Coordenador Geral</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper iaculis orci quis auctor. Aenean rhoncus lectus velit, non volutpat nulla pellentesque sed. Fusce rhoncus sed est quis dictum. Sed a pharetra nisl, ut pulvinar sapien. Quisque iaculis id elit non imperdiet. Ut at nisl sit amet urna varius pellentesque nec id felis.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                    style={{width: "30%"}}
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/giovanna.jpg")}
                    ></img>
                    <h4 className="title">Giovanna Batista</h4>
                    <p className="category text-info">Coordenadora Geral</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper iaculis orci quis auctor. Aenean rhoncus lectus velit, non volutpat nulla pellentesque sed. Fusce rhoncus sed est quis dictum. Sed a pharetra nisl, ut pulvinar sapien. Quisque iaculis id elit non imperdiet. Ut at nisl sit amet urna varius pellentesque nec id felis.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                    style={{width: "30%"}}
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/Pablo.jpg")}
                    ></img>
                    <h4 className="title">Pablo Deyvid</h4>
                    <p className="category text-info">Secretário Geral</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper iaculis orci quis auctor. Aenean rhoncus lectus velit, non volutpat nulla pellentesque sed. Fusce rhoncus sed est quis dictum. Sed a pharetra nisl, ut pulvinar sapien. Quisque iaculis id elit non imperdiet. Ut at nisl sit amet urna varius pellentesque nec id felis.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row style={{marginBottom: "3%"}}>
                <Col md="4">
                  <div className="team-player">
                    <img
                    style={{width: "30%"}}
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/revoredo.png")}
                    ></img>
                    <h4 className="title">Arthur Revoredo</h4>
                    <p className="category text-info">Tesoureiro</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper iaculis orci quis auctor. Aenean rhoncus lectus velit, non volutpat nulla pellentesque sed. Fusce rhoncus sed est quis dictum. Sed a pharetra nisl, ut pulvinar sapien. Quisque iaculis id elit non imperdiet. Ut at nisl sit amet urna varius pellentesque nec id felis.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                    style={{width: "30%"}}
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/raquel.png")}
                    ></img>
                    <h4 className="title">Raquel Freire</h4>
                    <p className="category text-info">Diretora de Ensino</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper iaculis orci quis auctor. Aenean rhoncus lectus velit, non volutpat nulla pellentesque sed. Fusce rhoncus sed est quis dictum. Sed a pharetra nisl, ut pulvinar sapien. Quisque iaculis id elit non imperdiet. Ut at nisl sit amet urna varius pellentesque nec id felis.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                    style={{width: "30%"}}
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marina.jpg")}
                    ></img>
                    <h4 className="title">Marina Leite</h4>
                    <p className="category text-info">Diretora de Mulheres e LGBTQIAP+</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper iaculis orci quis auctor. Aenean rhoncus lectus velit, non volutpat nulla pellentesque sed. Fusce rhoncus sed est quis dictum. Sed a pharetra nisl, ut pulvinar sapien. Quisque iaculis id elit non imperdiet. Ut at nisl sit amet urna varius pellentesque nec id felis.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                    style={{width: "30%"}}
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/bia.png")}
                    ></img>
                    <h4 className="title">Beatriz Santana</h4>
                    <p className="category text-info">Diretora de Comunicação</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper iaculis orci quis auctor. Aenean rhoncus lectus velit, non volutpat nulla pellentesque sed. Fusce rhoncus sed est quis dictum. Sed a pharetra nisl, ut pulvinar sapien. Quisque iaculis id elit non imperdiet. Ut at nisl sit amet urna varius pellentesque nec id felis.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                    style={{width: "30%"}}
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/nicole.jpg")}
                    ></img>
                    <h4 className="title">Nicole Nogueira</h4>
                    <p className="category text-info">Diretora de Comunicação</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper iaculis orci quis auctor. Aenean rhoncus lectus velit, non volutpat nulla pellentesque sed. Fusce rhoncus sed est quis dictum. Sed a pharetra nisl, ut pulvinar sapien. Quisque iaculis id elit non imperdiet. Ut at nisl sit amet urna varius pellentesque nec id felis.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                    style={{width: "30%"}}
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/victor.jpg")}
                    ></img>
                    <h4 className="title">Victor Ribeiro</h4>
                    <p className="category text-info">Diretor de Eventos</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper iaculis orci quis auctor. Aenean rhoncus lectus velit, non volutpat nulla pellentesque sed. Fusce rhoncus sed est quis dictum. Sed a pharetra nisl, ut pulvinar sapien. Quisque iaculis id elit non imperdiet. Ut at nisl sit amet urna varius pellentesque nec id felis.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
    </>
  );
}

export default Membros;
