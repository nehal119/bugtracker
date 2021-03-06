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

class BugModal extends Component {
	state = {
		modal: false,
		name: '',
		reporter: '',
		level: '',
		description: '',
		projectId: this.props.id
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		auth: PropTypes.object.isRequired
	};
	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const newBug = {
			name: this.state.name,
			reporter: this.props.user.userName,
			level: this.state.level,
			description: this.state.description,
			projectId: this.state.projectId
		};
		// ADDDING THE BUG
		this.props.addBug(newBug, this.state.projectId);
		this.toggle();
	};

	render() {
		// const { isAuthenticated, user } = this.props.auth;
		// const {name, userName} = user
		//console.log(this.props.user.userName)
		// console.log(this.props.isAuthenticated)
		return (
			<div style={{ marginTop: '5rem', marginLeft: '1rem' }}>
				{this.props.isAuthenticated ? (
					<Button
						color="dark"
						style={{ marginBottom: '2rem' }}
						onClick={this.toggle}
					>
						Report Bugs
					</Button>
				) : (
					<h4 className="mb-3 ml-4">Please log in first!</h4>
				)}

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle} className="primary-background">
						Report New Bugs
					</ModalHeader>
					<ModalBody className="secondary-background">
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="bug">Name</Label>
								<Input
									type="text"
									name="name"
									id="bug"
									placeholder="Bug Name"
									onChange={this.onChange}
									required
								/>
								<p className="mb-0 mt-2">Level</p>
								<FormGroup className="ml-2" check>
									<Label check>
										<Input
											type="radio"
											name="level"
											value="Normal"
											onChange={this.onChange}
										/>{' '}
										Normal
									</Label>
								</FormGroup>
								<FormGroup className="ml-2" check>
									<Label check>
										<Input
											type="radio"
											name="level"
											value="Critical"
											onChange={this.onChange}
										/>{' '}
										Critical
									</Label>
								</FormGroup>
								<FormGroup className="ml-2" check>
									<Label check>
										<Input
											type="radio"
											name="level"
											value="Severe"
											onChange={this.onChange}
										/>{' '}
										Severe
									</Label>
								</FormGroup>

								<Label for="description" className="mt-2">
									Description
								</Label>
								<Input
									type="textarea"
									name="description"
									id="description"
									placeholder="Description of the Bug"
									onChange={this.onChange}
									required
								/>
								<Button color="dark" style={{ marginTop: '2rem' }} block>
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

const mapStateToProps = (state) => ({
	bug: state.bug,
	user: state.auth.user,
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addBug })(BugModal);
