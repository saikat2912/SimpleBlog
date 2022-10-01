import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(isAuth,signOutUser) {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">SimpleBlog</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/blogs">Blogs</Nav.Link>
        <Nav.Link href="/writeABlog">Write A Blog</Nav.Link>
        <Nav.Link href="/searchBlogger">Search Blogger</Nav.Link>
        <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        {!isAuth?<Nav.Link href="/login" >Login</Nav.Link>:<button onClick={signOutUser} style={{float:'right'}}>Log Out</button>}
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;