import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.name}` : ''}</strong>
          </span>
        </NavItem>
        
        <NavItem>
              <NavLink disabled href="/dashboard/:user">Dashboard</NavLink>
        </NavItem>
        
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
 /* <nav class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" 
 color-on-scroll="100" id="sectionsNav"></nav> */
        <Navbar expand='sm' className='navbar navbar-light fixed-top' style={{backgroundColor: "#FFE4C4"}}>
            <NavbarBrand href='/'>BUGTRACKER</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='mr-auto' navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                  <NavItem>
                      <NavLink disabled href="/feed">Feed</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="/projects">Projects</NavLink>
                  </NavItem>
              </Nav>
              <Nav className='ml-auto' navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
         
        </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);
