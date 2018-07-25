import React, { Component } from 'react';

import "../styles/AddTaskForm.css";

class AddTaskForm extends Component {
    constructor(props) {
        super(props);

        this.initState();
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    initState() {
        this.state = {
            inputValue: ''
        };
    }

    updateInputValue(evt) {
        this.setState({inputValue: evt.target.value});
    }

    render() {
        return (
            <div className="AddTaskForm">
                <p>Add a new task</p>
                <input id="newTaskInput" type="text" value={this.state.inputValue} 
                onChange={evt => this.updateInputValue(evt)}/>
                <button href="#" className="btn btn-sm" onClick={evt => this.props.addTaskOnClick(this.state.inputValue)}>+</button>
                <button href="#" className="btn btn-sm" onClick={this.props.getAllTasks}>Update</button>
            </div>
        );
    }
}

export default AddTaskForm;