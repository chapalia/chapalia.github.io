/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <div className="div-circle">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>  
            </div>
            <h1 className="h1-seo">CHAPA LIA MEDEIROS</h1>
            <h2>2023-2024</h2>
            <h3>DIRETÓRIO ACADÊMICO ADA LOVELACE</h3>
          </div>

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
