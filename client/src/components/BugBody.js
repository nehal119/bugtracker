import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBugData, addPatchingUser } from '../actions/bugDataActions';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem, Button, Form } from 'reactstrap';

class BugBody extends Component {
  static propTypes = {
    getBugData: PropTypes.func.isRequired,
    bugData: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  componentDidMount() {
    this.props.getBugData(this.props.ProjectId, this.props.bugId);
  }

  onClick = e =>{
    const patchingUser = {
      patchingUser: this.props.user.userName
    }
    this.props.addPatchingUser(patchingUser, this.props.bugId)
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };
  render() {
    const { bugData } = this.props.bugData;
    const date = bugData.date;
    const level = bugData.level;
    return (
      <Container>
        <ListGroup>
            <ListGroupItem className="font-weight-light" style={{backgroundColor: "#FFE0C4", textAlign: "center", padding: "2rem", marginTop:"5rem"}}>
                <h3>{bugData.name}</h3>
               
                <p>Reported on: {date === undefined ? "" : date.split("T")[0]}
                <span> AT</span> {date === undefined ? "" : date.split("T")[1].split(".")[0]}</p>
            
                <p>Reporter: {bugData.reporter}</p>

                <p>Level: {level === "Normal" ? <span role="img" aria-label="Normal">Normal 🟢🟢🟢</span> : level === "Critical" ?   <span role="img" aria-label="Crical">Critical 🟡🟡🟡</span> : <span role="img" aria-label="Severe">Severe 🔴🔴🔴</span>}</p>


                <p>Description: {bugData.description}</p>
               
            </ListGroupItem>
            <ListGroupItem className="mb-5 font-weight-light" style={{backgroundColor: "#FFE0C4", textAlign: "center", padding: "2rem", marginTop:"5rem"}}>

          <h5>Patching this Bug:</h5>
          <a href="/">{bugData.patchingUser}</a>
          {bugData.resolved ? <p>Bug Fixed <span>⬅✔➡</span></p> : <p>Bug not fixed yet <span>❌💀❌</span></p>}
            
            <Form onSubmit={this.onClick}>
                <Button color="dark" >Add Me</Button>
            </Form>
            </ListGroupItem>
        </ListGroup>
        
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  bugData: state.bugData,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps,{ getBugData, addPatchingUser })(BugBody);
