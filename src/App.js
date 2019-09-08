import React, {Component} from 'react';
import {
  Collapse, 
  Navbar, 
  NavbarToggler, 
  Nav, 
  NavItem
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  state = {
    isNavbarOpen: false,
  };

  toggleNavBar = () => {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  };

  render() {

    const {isNavbarOpen} = this.state;

    return (
      <div>
        <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggleNavBar} />
          <a className="navbar-brand" href={"home"}>Blog</a>
          <Collapse isOpen={isNavbarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <a className="nav-link" activeClassName="active" href={"home"}>Home</a>
              </NavItem>
              <NavItem>
                <a className="nav-link" activeClassName="active" href={"home"}>Authors</a>
              </NavItem>
              <NavItem>
                <a className="nav-link" activeClassName="active" href={"home"}>New Post</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default App;
