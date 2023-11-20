
import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {


  return (
    <div className="sticky" id="header">
      <Nav className="justify-content-end menu1">
        <Nav.Item className="py-3 px-2">
          <Dropdown className="careers">
            <Dropdown.Toggle variant="clear">Career</Dropdown.Toggle>
            <Dropdown.Menu className="">
              <Dropdown.Item href="https://www.dunkinbahamas.com/careers/" target="_blank">Apply Now</Dropdown.Item>
              <Dropdown.Item href="https://www.dunkinbahamas.com/contact/" target="_blank">Opportunities</Dropdown.Item>
              <Dropdown.Item href="https://www.dunkinbahamas.com/contact/" target="_blank">Working and Dunkin'</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='signup'>
              <div className="py-1">
                <button className="header_button" type="submit">
                  Sign Up
                </button>
              </div>
            </Link>

          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to='login'>
            <div className="py-1">
              <button className="header_btn" >
                Sign In
              </button>
            </div>
          </Link>

          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar expand="lg">
        <Container className="navbars">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto item">
              <Nav.Link>
                <Link to="/">
                  <p>HOME</p>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to='shop'>
                  <p className="">SHOP</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/menu">
                  <p>MENU</p>
                </Link>
              </Nav.Link>

              

              <Nav.Link>
                <Link to="/delivery">
                  <p>DELIVERY</p>
                </Link>
              </Nav.Link>
            </Nav>
            <Navbar.Brand className="mx-auto">
              <Link to="/">
                <img
                  src="https://www.dunkindonuts.com/content/dam/dd/img/brand/dd/dd_nav_logo.svg"
                  height="25px"
                  alt="Dunkin' Donuts Logo"
                />
              </Link>
            </Navbar.Brand>
            <Nav className="item">
              <Nav.Link>
                <Link to="/dunkinrewards">
                  <p>DUNKIN'<br /> REWARD</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='card'>
                  <p>DUNKIN'<br /> CARD</p>
                </Link>
              </Nav.Link>
              <Link to="/locations">
                <p>LOCATIONS</p>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;