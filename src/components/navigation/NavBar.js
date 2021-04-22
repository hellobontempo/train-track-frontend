import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import { Form } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
// import { FormControl} from 'react-bootstrap'

const NavBar = (props) => {
    return (
    <Navbar expand="lg" className="color-nav">
    <Navbar.Brand href="/">
      <img
        alt="train-icon-logo"
        src="/images/train-icon-transparent.png"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      TrainTrack
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {props.loggedIn ? <Nav.Link href="/signup">Log Out</Nav.Link> : <Nav.Link href="/signup">Sign Up</Nav.Link>}
        {props.loggedIn ? "" : <Nav.Link href="/login">Login</Nav.Link> }
        <Nav.Link href="/new-program">Create Custom Program</Nav.Link>
        <Nav.Link href="/user_programs">Fellow Train Tracks</Nav.Link>
        <NavDropdown title="Training Programs" id="basic-nav-dropdown">
            <NavDropdown.Item href="/programs/1">Half Marathon</NavDropdown.Item>
            <NavDropdown.Item href="/programs/2">Full Marathon</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/programs">All Programs</NavDropdown.Item>
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