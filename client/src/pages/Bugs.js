import React, { Component } from 'react'
import AppNavbar from '../components/AppNavbar';
import BugList from '../components/BugList';
import BugModal from '../components/BugModal';
import ItemBody from '../components/ItemBody';
import { Container } from 'reactstrap';

class Bugs extends Component {
    render() {
        const { id } = this.props.match.params
        return (
            <div>
                <AppNavbar />
                <Container>
                    <BugModal id={id} />
                    <ItemBody id={id} />
                    <BugList id={id} />
                </Container>
            </div>
        )
    }
}
export default Bugs;
