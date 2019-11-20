import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
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
        <h3 className="mb-5 text-center font-weight-light">PROJECTS WE ARE TRACKING</h3>
        <ListGroup>
          {/* <ListGroupItem style={{backgroundColor: "#FFE0C4"}}>
            <h3>Projcts we are tracking</h3>
          </ListGroupItem> */}
          <TransitionGroup className='shopping-list'>
            {items.map(({ _id, name, coordinator, numberOfBugs, date }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem className="mb-3 font-weight-light" style={{backgroundColor: "#FFE0C4"}}>
                 <h3> {name} </h3>
                 <p>Started on: {date.split("T")[0]} AT {date.split("T")[1].split(".")[0]}</p> 
                  <p>Status: Active {numberOfBugs === 0 ? <span role="img" aria-label="green">🟢🟢🟢</span> : numberOfBugs < 5 ? <span role="img" aria-label="yellow">🟡🟡🟡</span> : <span role="img" aria-label="red">🔴🔴🔴</span>}</p>
                  <p>Total Bugs: {numberOfBugs}</p>
                   <p>Moderators: {coordinator}</p>
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
