import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Membros() {
  return (
    <>
      <div className="section section-team text-center" id="section-team-chapa">
        <Container>
          <h2 id="title-membros" className="title">Conheça os membros da nossa diretoria!</h2>
          <div className="team">
            <Row style={{ marginBottom: "3%" }}>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "30%" }}
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/gabriel.jpg")}
                  ></img>
                  <h4 className="title" onClick={() => { window.open("https://www.instagram.com/gabriel_ribeo/", "_blank") }} style={{ cursor: "pointer" }}>Gabriel Ribeiro</h4>
                  <p className="category text-info">Coordenador Geral</p>
                  <p className="description">
                    Gabriel é aluno do 4° período do BTI. Ele tem 20 anos, com interesses em múltiplas faces da TI, pretende seguir para Eng. Software. Tem uma gatinha, Nina, que não tem rabo, ama carros e sitcoms, sendo a sua favorita Brookylin 99.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "30%" }}
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/giovanna.jpg")}
                  ></img>
                  <h4 className="title" onClick={() => { window.open("https://www.instagram.com/giovvbatista/", "_blank") }} style={{ cursor: "pointer" }} >Giovanna Batista</h4>
                  <p className="category text-info">Coordenadora Geral</p>
                  <p className="description">
                    Giovanna tem 19 anos e é aluna do 4° período do BTI. Ela adora matemática e lógica, atuando como monitora na disciplina de FMC1, além de ter um interesse particular pela carreira docente. Nas horas vagas, não para de tagarelar sobre Taylor Swift.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "30%" }}
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/Pablo.jpg")}
                  ></img>
                  <h4 className="title" onClick={() => { window.open("https://www.instagram.com/pablo_deyvid/", "_blank") }} style={{ cursor: "pointer" }}>Pablo Deyvid</h4>
                  <p className="category text-info">Secretário Geral</p>
                  <p className="description">
                    Pablo é aluno do 4° período do BTI. Ele tem 20 anos e tem interesse em Devops e backend, além de gostar muito de Lana Del Rey e Game of Thrones. Atualmente está trabalhando com desenvolvimento e tem experiência na secretaria de grêmios estudantis no IFRN.
                  </p>
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "3%" }}>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "30%" }}
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/revoredo.png")}
                  ></img>
                  <h4 className="title" onClick={() => { window.open("https://www.instagram.com/eh_artur/", "_blank") }} style={{ cursor: "pointer" }}>Artur Revorêdo</h4>
                  <p className="category text-info">Tesoureiro</p>
                  <p className="description">
                    Artur é aluno do 4° período do BTI. Ele tem 21 anos e seus hobbies são civilization e treinar boxe. Atualmente é monitor de Matemática Elementar e tem experiência como vice tesoureiro no IFRN.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "30%" }}
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/raquel.png")}
                  ></img>
                  <h4 className="title" onClick={() => { window.open("https://www.instagram.com/quellz_a/", "_blank") }} style={{ cursor: "pointer" }}>Raquel Freire</h4>
                  <p className="category text-info">Diretora de Ensino</p>
                  <p className="description">
                    Raquel é aluna do 4° período do BTI. Ela tem 18 anos e gosta de artes plásticas, café e One Piece. Atualmente faz parte do prejeto de monitoria de Matemática Elementar e possui interesse na área de desenvolvimento de Jogos Digitais.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "30%" }}
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/marina.jpg")}
                  ></img>
                  <h4 className="title">Marina Leite</h4>
                  <p className="category text-info">Diretora de Mulheres e LGBTQIAP+</p>
                  <p className="description">
                    Marina tem 19 anos e está no 2° período do BTI. Se interessou pela área de tecnologia no IFRN, onde cursou Informática para Internet e foi diretora de Arte e Cultura do grêmio estudantil. Gosta de boxe e artesanatos, apesar de não ter muito tempo para fazer isso.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "30%" }}
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/bia.png")}
                  ></img>
                  <h4 className="title" onClick={() => { window.open("https://www.instagram.com/_bsmoura/", "_blank") }} style={{ cursor: "pointer" }}>Beatriz Santana</h4>
                  <p className="category text-info">Diretora de Comunicação</p>
                  <p className="description">
                    Beatriz está no 4° período de BTI, agora com 19 anos, sempre se interessou pela área da tecnologia, principalmente Web e IoT. Interesses fora do âmbito acadêmicos incluem maratonar suas séries favoritas, como Gilmore girls, ler e ouvir Taylor Swift. Responsável pela comunicação, Bia tem um apreço por edição e mídias sociais.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "30%" }}
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/nicole.jpg")}
                  ></img>
                  <h4 className="title" onClick={() => { window.open("https://www.instagram.com/nicolecnogueira_/", "_blank") }} style={{ cursor: "pointer" }} >Nicole Nogueira</h4>
                  <p className="category text-info">Diretora de Lazer</p>
                  <p className="description">
                    Nicole tem 20 anos e é aluna do 4° período do BTI. Ela gosta de matemática, apesar de não ser muito boa nisso, mas gosta ainda mais de viajar, conhecer novos lugares e estar com os amigos. Entrou no IMD já pretendendo cursar ES no segundo ciclo mas está aberta a conhecer tudo o que a TI pode proporcionar.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "30%" }}
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/victor.jpg")}
                  ></img>
                  <h4 className="title" onClick={() => { window.open("https://www.instagram.com/vicrme/", "_blank") }} style={{ cursor: "pointer" }}>Victor Ribeiro</h4>
                  <p className="category text-info">Diretor de Eventos</p>
                  <p className="description">
                    Victor está no 4º período de BTI. Ele curte muito música, café preto sem açúcar e ultimamente tem ouvido bastante The Strokes, Tame Impala e brown noise para estudar. Tem interesse em frontend e design e está estudando Java.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <Row id="section-motivacao" style={{ marginTop: "10%" }}>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">O que queremos para o IMD?</h2>
              <h5 className="description">
                A Chapa Lia Medeiros foi idealizada com o objetivo de fortalecer a vida acadêmica no Instituto Metrópole Digital (IMD) da UFRN, que engloba não apenas o Bacharelado em Tecnologia da Informação (BTI), mas também os programas técnicos e de pós-graduação. Buscamos promover uma maior sensação de pertencimento e unidade entre todos os discentes, independentemente do nível de ensino, fomentando assim a solidariedade e a colaboração em todo o nosso instituto. Apresentamos nossa chapa com o compromisso de independência: sermos representantes verdadeiramente dedicados, por e para os alunos do IMD.
              </h5>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col md="6">
                <div
                  className="image-container image-left"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/imd-img.webp") + ")"
                  }}
                >
                </div>
              </Col>
              <Col md="5">
                <div
                  className="image-container image-right"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/imd1.jpg") + ")"
                  }}
                ></div>

              </Col>
            </Row>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Qual a nossa missão? </h2>
              <h5 className="description">
                <p style={{ fontWeight: "400" }}>
                  Nossa missão é atuar de forma incisiva e articulada para dar voz às necessidades e aspirações de nossa comunidade estudantil, bem como estimular sua participação ativa nos espaços que lhes pertencem por direito.
                </p>
                <p style={{ fontWeight: "400" }}>
                  Temos como objetivo tornar o processo de formação acadêmica mais leve, acolhedor e enriquecedor em todos os níveis, promovendo ações que melhorem tanto a qualidade de vida dos discentes quanto a excelência da educação fornecida. Queremos que o IMD seja reconhecido por formar profissionais que se destaquem no mercado não apenas por sua excelência técnica e científica, mas também por sua capacidade de adaptação e inovação em todas as etapas de sua jornada acadêmica, seja no bacharelado, no técnico ou na pós-graduação.
                </p>
                <p style={{ fontWeight: "400" }}>
                  Na Chapa Lia, compreendemos as preocupações e aspirações dos alunos do Instituto, independentemente do nível de ensino. Comprometemo-nos a atuar dentro do Diretório Acadêmico Ada Lovelace (DAAL) como representantes e defensores dos interesses de nossa comunidade estudantil. Contamos com o seu apoio para colaborar na construção de um IMD mais inclusivo, acolhedor e adaptado às necessidades de todos os estudantes.
                </p>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Membros;
