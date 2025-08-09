import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import WalletConnect from "../walletConnect/index";
import { useTheme } from "../../App";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        
        <div className="d-flex align-items-center order d-lg-none">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <div className="theme-switch ms-2">
            <input 
              type="checkbox" 
              id="theme-toggle" 
              checked={theme === 'light'} 
              onChange={toggleTheme}
            />
            <label htmlFor="theme-toggle" className="switch-label">
              <span className="switch-slider">
                <i className="fa-solid fa-moon"></i>
                <i className="fa-solid fa-sun"></i>
              </span>
            </label>
          </div>
          <WalletConnect />
        </div>
        
        <Navbar.Toggle style={{ padding: '10px', width: '40px', height: '40px', borderColor: "var(--border-color)" }} aria-controls="navbarScroll">
          <i className="fa-solid fa-bars" style={{ color: "var(--text-primary)"}}></i>
        </Navbar.Toggle>
        
        <Navbar.Collapse className="p-3" id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3">Developers</Nav.Link>
          </Nav>
          
          <div className="d-none d-lg-flex align-items-center order">
            <span className="line d-lg-inline-block d-none"></span>
            <i className="fa-regular fa-heart"></i>
            <div className="theme-switch ms-3">
              <input 
                type="checkbox" 
                id="theme-toggle-desktop" 
                checked={theme === 'light'} 
                onChange={toggleTheme}
              />
              <label htmlFor="theme-toggle-desktop" className="switch-label">
                <span className="switch-slider">
                  <i className="fa-solid fa-moon"></i>
                  <i className="fa-solid fa-sun"></i>
                </span>
              </label>
            </div>
            <WalletConnect />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
