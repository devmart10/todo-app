import React, { Component } from "react"

import '../styles/App.css'

import Task from "./Task.js"
import NavBar from "./NavBar.js"
import MySidebar from "./Sidebar.js"
import SidePanel from "./SidePanel.js"
import AddTaskForm from "./AddTaskForm.js"

import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);

        sessionStorage.setItem('username', 'devmart10')

        this.state = {
            tasks: []
        };

        this.updateTasks = this.updateTasks.bind(this);
        this.getAllTasks = this.getAllTasks.bind(this);
        this.addTaskOnClick = this.addTaskOnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.getAllTasks();
    }

    updateTasks(data) {
        this.setState({tasks: data.tasks})
    }

    getAllTasks() {
        fetch('http://localhost:5000/tasks',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }).then(function(response) {
            return response.json();
        }).then(function(responseData) {
            console.log(responseData);
            this.updateTasks(responseData);
        }.bind(this));

    }

    addTaskOnClick(value) {
        fetch('http://localhost:5000/tasks',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(
                {
                    'name': value
                }
            )
        }).then(function(response) {
            // console.log(response.status);
            this.getAllTasks();
        }.bind(this));
    }

    handleDelete(id) {
        console.log(id);
        fetch('http://localhost:5000/tasks/' + id,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }).then(function(response) {
            // console.log(response.status);
            this.getAllTasks();
        }.bind(this));   
    }

    render() {
        const renderedTasks = [];
        for (let i = 0; i < this.state.tasks.length; i++) {
            let task = this.state.tasks[i];
            renderedTasks.push(
                <Task key={i} {...task} handleDelete={this.handleDelete}/>
            );
        };

        return (
            <div className="App">
                <NavBar />
                {/*<MySidebar />*/}
                <Grid fluid className="no-padding">
                    <Row className="show-grid no-margin">
                        <Col xs={12} className="label-panel">
                            <SidePanel />
                        </Col>
                        <Col xs={9} className="main-content">
                            <Row className="show-grid no-margin">
                                <Col xs={12}>
                                    <AddTaskForm addTaskOnClick={this.addTaskOnClick} getAllTasks={this.getAllTasks}/>
                                </Col>
                            </Row>
                            <Row className="show-grid no-margin">
                                <Col xs={12}>
                                    {renderedTasks}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default App