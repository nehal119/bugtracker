import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/dataActions';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

class ItemBody extends Component {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  componentDidMount() {
    this.props.getData(this.props.id);
  }

//   onDeleteClick = id => {
//     this.props.deleteItem(id);
//   };

  render() {
    const { data } = this.props.data;
    const date = data.date;
    return (
      <Container>
        <ListGroup>
            <ListGroupItem className="mb-5" style={{backgroundColor: "#FFE0C4", textAlign: "center", padding: "2rem"}}>
                <h3>{data.name}</h3>
               
                <p>Reported on: {date == undefined ? "" : date.split("T")[0]}
                <span> AT</span> {date == undefined ? "" : date.split("T")[1].split(".")[0]}</p>

                <p>Status: Active {data.numberOfBugs == 0 ? <span>🟢🟢🟢</span> : data.numberOfBugs < 5 ? <span>🟡🟡🟡</span> : <span>🔴🔴🔴</span>}</p>
                  <p>Total Bugs: {data.numberOfBugs}</p>
            
                <p>Description: {data.description}</p>
                
                <p>Project Moderators: {data.coordinator}</p>
            </ListGroupItem>
        </ListGroup>
        
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ getData })(ItemBody);
