import {Navbar, Nav, Container} from 'react-bootstrap';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logocp from './logocp.jpg'

export const NavbarBootstrap = () => {
    return (
    <>
      <div className="container-nav">
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a id="header_company" className="navbar-brand" href="/">
              <img src={logocp} alt="Logo" className="logo-img"/>
              <span className='logo-name'>iSumBongMo!</span>
              </a>
                <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navmenu" 
                    aria-controls="navmenu" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navmenu">
                
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>
                </ul>
              </div>
            </div>
        </nav>
      </div>
      {/* <Navbar bg="dark" variant="dark" expand="md">
        <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Navbar.Brand href="/">iSumBongMo!</Navbar.Brand>
          <Nav className="ml-auto">
          <Button color="secondary" variant="filledTonal" size="medium">
            <Nav.Link href="/">Home</Nav.Link>
          </Button>
          <Button variant="filledTonal" size="medium">
            <Nav.Link href="/about">About</Nav.Link>
          </Button>
          <Button variant="filledTonal" size="medium">
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
    )
} 