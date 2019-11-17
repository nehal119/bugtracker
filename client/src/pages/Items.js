import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar';
import ItemList from '../components/ItemList';
import ItemModal from '../components/ItemModal';
import { Container } from 'reactstrap';
// import { loadUser } from './actions/authActions';


class Items extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    return (
        <div className='Items'>
          <AppNavbar />
          <Container>
            <ItemModal />
            <ItemList />
          </Container>
        </div>
    );
  }
}

export default Items;
