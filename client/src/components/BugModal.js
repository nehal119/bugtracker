import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addBug } from '../actions/bugActions';
import PropTypes from 'prop-types';

class ProjectDetailModal extends Component {
  state = {
    modal: false,
    name: '',
    description: '',
    projectId: this.props.id
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newBug = {
      name: this.state.name,
      description: this.state.description,
      projectId: this.state.projectId
    };
  // ADDDING THE BUG
    this.props.addBug(newBug, this.state.projectId);
    this.toggle();
  };

  render() {
    return (
      <div style={{marginTop: "5rem", marginLeft:"1rem"}}>
        {this.props.isAuthenticated ? (
          <Button
            color='dark'
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            Report Bugs
          </Button>
        ) : (
          <h4 className='mb-3 ml-4'>Please log in first!</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Report New Bugs</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='bug'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='bug'
                  placeholder='Bug Name'
                  onChange={this.onChange}
                  required
                />
                {/* <Label for='reporter' className="mt-2">Project Coordinator</Label>
                <Input
                  type='text'
                  name='coordinator'
                  id='coordinator'
                  placeholder='Name of the project Coordinator'
                  onChange={this.onChange}
                /> */}
                <Label for='description' className="mt-2">Description</Label>
                <Input
                  type='textarea'
                  name='description'
                  id='description'
                  placeholder='Description of the Bug'
                  onChange={this.onChange}
                  required
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Add
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bug: state.bug,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ addBug })(ProjectDetailModal);
