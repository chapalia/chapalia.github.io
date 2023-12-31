import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              target="_blank"
              id="navbar-brand"
            >
              01 - Chapa Lia
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Chapa independente pelo Diretório Acadêmico Ada Lovelace
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#section-team"
                  onClick={(e) => {
                    e.preventDefault();
                    let element = document
                      .getElementById("section-team-chapa");
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                  }}
                >
                  <i className="now-ui-icons users_single-02"></i>
                  <p>Membros</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#section-team"
                  onClick={(e) => {
                    e.preventDefault();
                    let element = document
                      .getElementById("section-motivacao");
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                  }}
                >
                  <i className="now-ui-icons business_bulb-63"></i>
                  <p>Motivação</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="/propostas"
                  id="upgrade-to-pro"
                >
                  <i className="now-ui-icons education_paper mr-1"></i>
                  <p>PROPOSTAS</p>
                </Button>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/chapa.lia"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Nos siga no Instagram!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="mailto:lia.medeiros.daal@gmail.com"
                  id="ui-1_email-85"
                >
                  <i className="now-ui-icons ui-1_email-85"></i>
                  <p className="d-lg-none d-xl-none">E-mail</p>
                </NavLink>
                <UncontrolledTooltip target="#ui-1_email-85">
                  Mande um e-mail para a gente!
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
