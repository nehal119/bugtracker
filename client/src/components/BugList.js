import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
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
        <h3 className="mb-3 mt-5 text-center font-weight-light">BUGS WE HAVE</h3>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {bugs.map(({ _id, name, description, date, level, reporter }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem className="mb-3 font-weight-light" style={{backgroundColor: "#FFE3C4"}}>
                 <h5> {name} </h5>
                 <p>Reported on: {date.split("T")[0]} AT {date.split("T")[1].split(".")[0]}</p>
                 <p>Reported By: {reporter}</p>
                  <p>Critical Level: {level === "Normal" ? <span role="img" aria-label="Normal">🟢</span> : level === "Critical" ?   <span role="img" aria-label="Crical">🟡</span> : <span role="img" aria-label="Severe">🔴</span>}</p>
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
