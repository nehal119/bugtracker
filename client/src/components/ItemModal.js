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
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ProjectsModal extends Component {
	state = {
		modal: false,
		name: '',
		coordinator: '',
		description: ''
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool
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
		const newItem = {
			name: this.state.name,
			coordinator: this.state.coordinator,
			description: this.state.description
		};
		this.props.addItem(newItem);
		this.toggle();
	};

	render() {
		return (
			<div style={{ marginTop: '5rem', marginLeft: '1rem' }}>
				{this.props.isAuthenticated ? (
					<Button
						color="dark"
						style={{ marginBottom: '2rem' }}
						onClick={this.toggle}
					>
						Add Project
					</Button>
				) : (
					<h4 className="mb-3 ml-4">Please log in first!</h4>
				)}

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle} className="primary-background">
						Add New Projects
					</ModalHeader>
					<ModalBody className="secondary-background">
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="bug">Name</Label>
								<Input
									type="text"
									name="name"
									id="bug"
									placeholder="Project Name"
									onChange={this.onChange}
									required
								/>
								<Label for="reporter" className="mt-2">
									Project Coordinator
								</Label>
								<Input
									type="text"
									name="coordinator"
									id="coordinator"
									placeholder="Name of the project Coordinator"
									onChange={this.onChange}
									required
								/>
								<Label for="description" className="mt-2">
									Description
								</Label>
								<Input
									type="textarea"
									name="description"
									id="description"
									placeholder="Description of the Project"
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
	item: state.item,
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addItem })(ProjectsModal);
