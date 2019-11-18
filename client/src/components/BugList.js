import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getBugs, deleteBug } from '../actions/bugActions';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class ProjectsList extends Component {
  static propTypes = {
    getBugs: PropTypes.func.isRequired,
    bug: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getBugs(this.props.id);
  }

  onDeleteClick = id => {
    this.props.deleteBug(id);
  };

  render() {
    const { bugs } = this.props.bug;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {bugs.map(({ _id, name, description, date }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem className="mb-3" style={{backgroundColor: "#FFE3C4"}}>
                 <h5> {name} </h5>
                 <p>Reported on: {date.split("T")[0]} AT {date.split("T")[1].split(".")[0]}</p>
                  {this.props.isAuthenticated ? (
                    // <Button
                    //   className='remove-btn mr-5'
                    //   color='dark'
                    //   size='sm'
                    //   onClick={this.onDeleteClick.bind(this, _id)}
                    // >
                    //   More Info
                    // </Button>
                    <Link to={`/projects/${this.props.id}/${_id}`}>More</Link>
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
  bug: state.bug,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ getBugs, deleteBug })(ProjectsList);
