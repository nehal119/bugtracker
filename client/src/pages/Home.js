import React, { Component } from 'react'
import AppNavbar from '../components/AppNavbar';
import "../styles/Home.css"

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <AppNavbar />
                <h1 className="display-1">Welcome to the Bugtracker!</h1>
            </div>
        )
    }
}
