import React, { Component } from "react"
import { Panel } from "react-bootstrap"

import '../styles/SidePanel.css';

var test_data = [
    {
        name: "Chores",
        link: "/test"
    },
    {
        name: "Finance",
        link: "/test"
    },
    {
        name: "Events",
        link: "/test"
    }
];

class SidePanel extends Component {
    render() {
        return (
            <Panel bsStyle='success' className='SidePanel'>
                <Panel.Heading className='SidePanel_header'>
                    <Panel.Title componentClass='h5'>Labels</Panel.Title>
                </Panel.Heading>
                <Panel.Body className='SidePanel_body'>
                    <ul>
                    {test_data.map((object, i) => 
                        <div><li><a key={i} className='SidePanel_link' href={object.link}>{object.name}</a></li><hr /></div>)}
                    </ul>
                </Panel.Body>
            </Panel>
        )
    }
}

export default SidePanel