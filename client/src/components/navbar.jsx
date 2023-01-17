export const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to ="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to ="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to ="/contact" activeStyle>
                    Contact Us
                </NavLink>
            </NavMenu>
        </Nav>
    )
}