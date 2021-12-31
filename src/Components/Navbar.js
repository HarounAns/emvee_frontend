import { Link } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default function NavigationBar() {
    return (
        <div style={{ marginBottom: "30px" }}>
            <Navbar style={{ backgroundColor: "rgb(55, 57, 62)" }} expand="md">
                <NavbarBrand >
                    <Link to="/" style={{ ...linkStyle, marginLeft: 10 }}>Home</Link>
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#">
                            <Link to="/teams" style={linkStyle}>Teams</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link to="/randomizer" style={linkStyle}>Randomizer</Link>
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink href="#">
                            <Link to="/shop" style={linkStyle}>Shop</Link>
                        </NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink href="#">
                            <Link to="/about" style={linkStyle}>About</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link to="/contact" style={linkStyle}>Contact</Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};


const linkStyle = {
    textDecoration: 'none',
    color: '#EEE'
};