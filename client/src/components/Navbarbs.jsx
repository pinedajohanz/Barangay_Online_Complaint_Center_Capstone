import logo_img from './image/logo-new.png'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';

export const NavbarBootstrap = () => {
    return (
    <>
      <div className="container-nav">
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a id="header_company" className="navbar-brand" href="/">
              <img src={logo_img} alt="Logo" className="logo-img" style={{borderRadius:100}} id="img-logo"/>
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
                        <a className="nav-link" aria-current="page" href="/">
                        <div className='icon-text-container'>
                          <div className='i'> <HomeIcon /> </div>
                          <span>Home</span>
                        </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">
                        <div className='icon-text-container'>
                          <div className='i'> <PeopleIcon /> </div>
                          <span>About</span> 
                        </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">
                        <div className='icon-text-container'>
                          <div className='i'> <ContactPhoneIcon />  </div>
                          <span>Contact Us</span> 
                        </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">
                        <div className='icon-text-container'>
                          <div className='i'> <LoginIcon /> </div>
                          <span> Log In</span>
                        </div>
                        </a>
                    </li>
                    <li id="signup-nav" className="nav-item">
                        <a className="nav-link" href="/signup">
                          <div className='icon-text-container' >
                            <div className='i'> < AppRegistrationIcon /> </div>
                            <span> Sign Up </span>
                          </div>
                          </a>
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