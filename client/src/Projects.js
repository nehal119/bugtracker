import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ProjectsList from './components/ProjectsList';
import ProjectModal from './components/ProjectModal';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';


class Projects extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    return (
        <div className='Projects'>
          <AppNavbar />
          <Container>
            <ProjectModal />
            <ProjectsList />
          </Container>
        </div>
    );
  }
}

export default Projects;
