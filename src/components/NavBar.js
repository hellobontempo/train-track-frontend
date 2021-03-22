import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
// import { Form } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
// import { FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">TrainTrack</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/new-program">Create Custom Program</Nav.Link>
        <Nav.Link href="/programs">Training Programs</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/user_programs">Fellow Train Tracks</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form> */}
    </Navbar.Collapse>
    </Navbar>)
}

export default NavBar