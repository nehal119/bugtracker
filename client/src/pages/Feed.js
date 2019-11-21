import React, { Component } from 'react'
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';

export default class Feed extends Component {
    render() {
        return (
            <div className="Feed mt-5">
                <AppNavbar />
                <h1>Inside Feed</h1>
                <AppFooter />
            </div>
        )
    }
}
