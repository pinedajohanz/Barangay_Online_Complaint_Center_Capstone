import {Navbar, Nav, Container} from 'react-bootstrap';


export const NavbarBootstrap = () => {
    return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Navbar.Brand href="/">iSumBongMo!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
} 