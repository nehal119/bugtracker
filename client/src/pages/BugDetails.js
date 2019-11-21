import React, { Component } from 'react'
import AppNavbar from '../components/AppNavbar';
import BugBody from '../components/BugBody';
import { Container } from 'reactstrap';
import AppFooter from '../components/AppFooter';

class BugDetails extends Component {
    render() {
        const { projectId, bugId } = this.props.match.params
        return (
            <div>
                <AppNavbar />
                <Container>
                    <BugBody projectId={projectId} bugId={bugId} />
                </Container>
                <AppFooter />
            </div>
        )
    }
}
export default BugDetails;
