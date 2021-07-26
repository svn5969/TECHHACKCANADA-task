import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import { Nav, nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);

    console.log(loggedinUser.displayName);
    return (
        <>

            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#000000' }} sticky='top' className="pt-3 navbar-dark">
                <Navbar.Brand className="mx-4 px-4" >Demo Streaming</Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: "skyblue" }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="mx-auto px-5 float-right ">
                        <Nav.Link className="mx-4 px-4" href="/">Home</Nav.Link>
                        <Nav.Link className="mx-4 px-4" href="/movies">Movies</Nav.Link>
                        <Nav.Link className="mx-4 px-4" href="/series">Series</Nav.Link>
                        <Nav.Link className="mx-5 px-5" href="/signin">
                            {(loggedinUser.userName) ? loggedinUser.userName : (loggedinUser.displayName) ?loggedinUser.displayName : <button className="btn btn-primary btn-sm">Log In</button>}


                        </Nav.Link>
                        <button className="btn btn-light py-1">Start Your Free Trail</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>



    );
};

export default Header;