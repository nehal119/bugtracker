import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class ProjectsList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ _id, name, reporter, date }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem className="mb-3" style={{backgroundColor: "#FFE0C4"}}>
                 <h3><bold> {name}</bold> </h3>
                 <p>Started on: {date}</p> 
                  {this.props.isAuthenticated ? (
                    // <Button
                    //   className='remove-btn mr-5'
                    //   color='dark'
                    //   size='sm'
                    //   onClick={this.onDeleteClick.bind(this, _id)}
                    // >
                    //   More Info
                    // </Button>
                    <Link to={`/projects/${_id}`}>More</Link>
                  ) : null}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ getItems, deleteItem })(ProjectsList);
