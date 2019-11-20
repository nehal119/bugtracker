import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBugData } from '../actions/bugDataActions';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

class BugBody extends Component {
  static propTypes = {
    getBugData: PropTypes.func.isRequired,
    bugData: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  componentDidMount() {
    this.props.getBugData(this.props.ProjectId, this.props.bugId);
  }

//   onDeleteClick = id => {
//     this.props.deleteItem(id);
//   };
  render() {
    const { bugData } = this.props.bugData;
    const date = bugData.date;
    return (
      <Container>
        <ListGroup>
            <ListGroupItem className="mb-5" style={{backgroundColor: "#FFE0C4", textAlign: "center", padding: "2rem", marginTop:"5rem"}}>
                <h3>{bugData.name}</h3>
               
                <p>Reported on: {date == undefined ? "" : date.split("T")[0]}
                <span> AT</span> {date == undefined ? "" : date.split("T")[1].split(".")[0]}</p>
            
                <p>Description: {bugData.description}</p>
               
            </ListGroupItem>
        </ListGroup>
        
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  bugData: state.bugData,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ getBugData })(BugBody);
