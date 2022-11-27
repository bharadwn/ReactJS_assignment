import React from 'react';
// import './nav.css';
import {  Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import SearchInput from './search/SearchInput';

const NavigationMenu = () => {
    return (
    <>
    <Navbar bg="dark" expand="lg"  variant="dark" >
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faSmileBeam} / >
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav onSelect={(selectedKey) => `{NavLink}  ${selectedKey} active`}>             */}
          <Nav  className="me-auto"  > 
          
              <Nav.Link href="/movies-in-theaters"  >Movies in theaters</Nav.Link>
              {/* <Nav.Link href="/movies-in-theaters" eventKey="link-1" >Movies in theaters</Nav.Link> */}
              <Nav.Link href="/movies-coming" >Coming soon</Nav.Link>
              <Nav.Link href="/top-rated-india" as={NavLink} >Top rated Indian</Nav.Link>
              <Nav.Link href="/top-rated-movies" as={NavLink}   >Top rated movies</Nav.Link>
              <Nav.Link href="/favourit"  >Favourites</Nav.Link>    
           </Nav>
         </Navbar.Collapse> 
         <SearchInput />
       </Container>
     </Navbar>
     </>
     );
 };

export default NavigationMenu;