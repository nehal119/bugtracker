import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';
import {
	Container,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from 'reactstrap';

export default class Home extends Component {
	render() {
		return (
			<div>
				<AppNavbar />
				<Container className="text-center" style={{ marginTop: '10rem' }}>
					<h1 className="mb-5 mt-5">Welcome to the Bugtracker!</h1>
					<ListGroup style={{ marginTop: '12rem', lineHeight: '1.5rem' }}>
						<ListGroupItem
							className="mb-5"
							style={{ backgroundColor: '#FFE6C4', padding: '3rem' }}
						>
							<ListGroupItemHeading>WHY A TRACKER?</ListGroupItemHeading>
							<hr
								className="deep-purple accent-2 mb-2 mt-0 d-inline-block mx-auto"
								style={{ width: '60px' }}
							/>
							<ListGroupItemText>
								We all face problems while working on a project: managing the
								project timeline in one place; keeping track of what new
								features to add and what to remove; and most importantly the
								BUGS. Everyone hates them. They come without your permission and
								stay until they have messed everything up. Have you ever come
								across a solution for this? Maybe. But could not get time to
								develop it? No worries! It's the right time to kick all those
								BUGS out and become more productive as your day goes.
							</ListGroupItemText>
						</ListGroupItem>
						<ListGroupItem
							className="mb-5"
							style={{ backgroundColor: '#FFE6C4', padding: '3rem' }}
						>
							<ListGroupItemHeading className="">
								WHAT DO I NEED TO DO?
							</ListGroupItemHeading>
							<hr
								className="deep-purple accent-2 mb-2 mt-0 d-inline-block mx-auto"
								style={{ width: '60px' }}
							/>
							<ListGroupItemText>
								Don't worry, we have already done the technical stuff. Now it's
								time for you to sign up and use the features. It is completely
								free and always will be. We respect your privacy and we got it
								covered as well. Hence no worries at all. Just sign up and make
								your life bug-free.
							</ListGroupItemText>
						</ListGroupItem>
					</ListGroup>
				</Container>
				<AppFooter />
			</div>
		);
	}
}
