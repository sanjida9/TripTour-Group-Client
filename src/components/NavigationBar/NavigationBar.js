import React from "react";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/images/imagesss.png";

const NavigationBar = () => {
  const { allContext } = useAuth();
  const { user, logOut } = allContext;
  const { displayName } = user;
  console.log(user);

  const activeStyle = {
    fontWeight: "bold",
    color: "orange",
  };

  return (
    <div className="sticky-top">
      <Navbar className="bg-blue" expand="lg">
        <Container>
          <Navbar.Brand
            sticky="top"
            as={NavLink}
            className="text-white"
            to="/home"
          >
            <h2>
              <img width="25%" className="img-fluid" src={logo} alt="" />
              TripTour
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-md-flex align-items-center">
              <NavLink
                className="mx-1 d-block"
                to="/home"
                activeStyle={activeStyle}
              >
                Home
              </NavLink>
              <NavDropdown title="Booking" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="bg-blue">
                  <NavLink
                    className="mx-1 d-block"
                    to="/hotels"
                    activeStyle={activeStyle}
                  >
                    Hotels
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-blue">
                  <NavLink
                    className="mx-1 d-block"
                    to="/packages"
                    activeStyle={activeStyle}
                  >
                    Packages
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Ticket"
                id="basic-nav-dropdown"
                className="bg-blue"
              >
                <NavDropdown.Item href="#action/3.1" className="bg-blue">
                  <NavLink
                    className="mx-1 d-block"
                    to="/flight"
                    activeStyle={activeStyle}
                  >
                    Flight
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-blue">
                  <NavLink
                    className="mx-1 d-block"
                    to="/car"
                    activeStyle={activeStyle}
                  >
                    Car
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-blue">
                  <NavLink
                    className="mx-1 d-block"
                    to="/bus"
                    activeStyle={activeStyle}
                  >
                    Bus
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                className="mx-1 d-block"
                to="/contact"
                activeStyle={activeStyle}
              >
                Contact
              </NavLink>
              {/* <NavLink
                className="mx-1 d-block"
                to="/about"
                activeStyle={activeStyle}
              >
                About Us
              </NavLink> */}

              {!displayName ? (
                <div>
                  <NavLink
                    className="mx-3"
                    to="/register"
                    activeStyle={activeStyle}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    className="mx-3"
                    to="/login"
                    activeStyle={activeStyle}
                  >
                    Login
                  </NavLink>
                </div>
              ) : (
                <div className="d-md-flex align-items-center">
                  <NavLink
                    className="mx-3 d-block"
                    to="/dashboard"
                    activeStyle={activeStyle}
                  >
                    dashboard
                  </NavLink>
                  <h6 className="text-light fw-bold me-2 mt-2">
                    {displayName}
                  </h6>

                  <button onClick={logOut} className="btn btn-light">
                    Sign Out
                  </button>

                  {/* <NavDropdown
                    title={
                      <img
                        style={{ width: "45px", borderRadius: "50%" }}
                        src={photoURL || ""}
                        alt=""
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    <div className="text-center" id="profileDrop">
                      <h6>{displayName}</h6>
                      <p className="">{email}</p>
                      <button onClick={logOut} className="btn btn-success">
                        Sign Out
                      </button>
                    </div>
                  </NavDropdown> */}
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
