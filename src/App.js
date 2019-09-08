import React, {Component} from 'react';
import {
  Collapse, 
  Navbar, 
  NavbarToggler, 
  Nav, 
  NavItem
} from 'reactstrap';
import {
  Route
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import routes from './routes/routes';
import Home from './pages/Home/Home';
import Authors from './pages/Authors/Authors';

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

        <Route path={routes.home} component={Home}/>
        <Route path={routes.authors} component={Authors}/>
      </div>
    )
  }
}

export default App;
