import React, { Component } from 'react'
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';
import {Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from "reactstrap";


export default class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <Container className="text-center" style={{marginTop: "10rem"}}>
                    <h1 className="display-1 mb-5 mt-5">Welcome to the Bugtracker!</h1>
                    <ListGroup style={{marginTop: "12rem", lineHeight: "1.5rem"}}>
                        <ListGroupItem className="mb-5" style={{backgroundColor: "#FFE6C4", padding: "5rem"}}>
                            <ListGroupItemHeading>
                                WHY A TRACKER?
                            </ListGroupItemHeading>
                            <hr className="deep-purple accent-2 mb-2 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                            <ListGroupItemText>
                                We all know the problems we face while working on a project. Managing the Project timeline on a place. Keeping track of what new features to add and what unnecessary things to remove. And most importantly the BUGS. Everyone hates them right? They come without your permission and stay until they messed up everything. Did you ever come across a solution for this?
                                Maybe Yes? But could not get enough time to develop it.
                                No worries!!! It's the right time to kick all those BUGS out and become more productive as your day goes.
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem className="mb-5" style={{backgroundColor: "#FFE6C4", padding: "5rem"}}>
                        <ListGroupItemHeading className="">
                                WHAT DO I NEED TO DO?
                            </ListGroupItemHeading>
                            <hr className="deep-purple accent-2 mb-2 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                            <ListGroupItemText>
                                Don't worry we have already done the technical stuff. 
                                Now it's time for you to Sign-Up and use all the features. It is completely free and always will be.
                                We respect your privacy and we got it covered as well. Hence No Worries at all. Just Sign-Up and make your life peacefull.
                            </ListGroupItemText>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
                <AppFooter />
            </div>
        )
    }
}
