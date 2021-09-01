import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'


const MyNavbar = () => {
    return (
        <Navbar expand="md">
        <Navbar.Brand href="#home">
        <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                width="100"
                height="55"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className="text-light" href="#">Home</Nav.Link>
            <Nav.Link className="text-light" href="#">TV Shows</Nav.Link>
            <Nav.Link className="text-light" href="#">Movies</Nav.Link>
            <Nav.Link className="text-light" href="#">Recently added</Nav.Link>
            <Nav.Link className="text-light" href="#">My List</Nav.Link>
            </Nav>
            <Nav className="">
            <Nav.Link className="text-light" href="#"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Nav.Link className="text-light" href="#">KIDS</Nav.Link>
            <Nav.Link className="text-light" href="#"><FontAwesomeIcon icon={faBell} /></Nav.Link>
            </Nav>
            <NavDropdown 
                title={<img
                alt=""
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                width="40"
                height="auto"
                className="d-inline-block align-top"
            />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar