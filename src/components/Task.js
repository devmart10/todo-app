import React, { Component } from "react"
import { Button, Panel } from 'react-bootstrap'

import '../styles/Task.css';

class Task extends Component {
    constructor(props) {
        super(props);

        this.getBody = this.getBody.bind(this);

        this.state = {
            id: props.id,
            name: props.name,
            description: props.description,
            due_date: props.due_date,
            created_date: props.created_date,
            created_by: props.created_by,
            status: props.status
        }
    }

    getBody() {
        if (this.props.description) {
            return (
                <Panel.Body className='Task__body'>
                    <p>{this.props.description}</p>
                </Panel.Body>
            );
        }
        return '';
    }

    render() {
        const style_heading = {

        };

        return (
            <Panel bsStyle='success' className='Task pull-right'>
                <Panel.Heading className='Task__header bottom-radius' style={{display: 'flex'}}>
                    <Panel.Title componentClass='h3'>{this.props.name}</Panel.Title>
                    <a className='btn btn-default' onClick={evt => this.props.handleDelete(this.state.id)} style={{padding: '1rem', backgroundColor: 'pink'}}>Delete</a>
                </Panel.Heading>
                {this.getBody()}
            </Panel>
        )
    }
}

export default Task