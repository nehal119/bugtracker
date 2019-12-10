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
		const TypeWriter = function(txtElement, words, wait = 3000) {
			this.txtElement = txtElement;
			this.words = words;
			this.txt = '';
			this.wordIndex = 0;
			this.wait = parseInt(wait, 10);
			this.type();
			this.isDeleting = false;
		};

		// Type Method
		TypeWriter.prototype.type = function() {
			// Current index of word
			const current = this.wordIndex % this.words.length;
			// Get full text of current word
			const fullTxt = this.words[current];

			// Check if deleting
			if (this.isDeleting) {
				// Remove char
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				// Add char
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			// Insert txt into element
			this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

			// Initial Type Speed
			let typeSpeed = 300;

			if (this.isDeleting) {
				typeSpeed /= 2;
			}

			// If word is complete
			if (!this.isDeleting && this.txt === fullTxt) {
				// Make pause at end
				typeSpeed = this.wait;
				// Set delete to true
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				// Move to next word
				this.wordIndex++;
				// Pause before start typing
				typeSpeed = 500;
			}

			setTimeout(() => this.type(), typeSpeed);
		};

		// Init On DOM Load
		document.addEventListener('DOMContentLoaded', init);

		// Init App
		function init() {
			const txtElement = document.querySelector('.txt-type');
			const words = JSON.parse(txtElement.getAttribute('data-words'));
			const wait = txtElement.getAttribute('data-wait');
			// Init TypeWriter
			new TypeWriter(txtElement, words, wait);
		}
		return (
			<div>
				<AppNavbar />
				<Container className="text-center" style={{ marginTop: '10rem' }}>
					<h1 className="mb-5 mt-5">
						Welcome to the{' '}
						<span
							class="txt-type"
							data-wait="3000"
							data-words='["Bugtracker"]'
						></span>
					</h1>
					<ListGroup style={{ marginTop: '12rem', lineHeight: '1.5rem' }}>
						<ListGroupItem className="mb-5 p-3 primary-background">
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

							<ListGroupItemHeading className="mt-5">
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
								covered as well. Hence no worries at all. Register now and make
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
