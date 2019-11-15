import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar';
import ItemList from '../components/ItemList';
import ItemModal from '../components/ItemModal';
import { Container } from 'reactstrap';
// import { loadUser } from './actions/authActions';


class Projects extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    return (
        <div className='Projects'>
          <AppNavbar />
          <Container>
            <ItemModal />
            <ItemList />
          </Container>
        </div>
    );
  }
}

export default Projects;
