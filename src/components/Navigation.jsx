import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  const isActiveLink = ({ isActive }) => {
    const styleActive = "text-decoration-none me-3";
    return isActive
      ? `text-danger ${styleActive}`
      : ` text-white ${styleActive}`;
  };
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="text-decoration-none me-3">
              <i className="fa-solid fa-location-dot text-secondary fa-xl"></i>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink to="/" className={isActiveLink}>
                Home
              </NavLink>
              <NavLink to="/pokemones" className={isActiveLink}>
                Pokemones
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
