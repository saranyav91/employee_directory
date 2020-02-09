import React from 'react'
import {Col, Row, Button, Glyphicon, Panel, ListGroupItem, ListGroup, FormControl } from 'react-bootstrap'
import employeeList from './employeeList.json';
import HomePage from './components/HomePage/HomePage.js'
import EmployeePage from './components/EmployeePage/EmployeePage.js'
import Btn from './components/Button'

//fiter by name
const filterEmployee = (searchText, maxResults) => {
  return employeeList.filter((employee) => {
    if (employee.data.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}
//sort by name



var maxResults = 4;

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            selectedEmployee: employeeList[0].data,
            filteredEmployee: filterEmployee('', maxResults)
        }
    }
//filter by name
    onSearch = (event) => {
        this.setState({
            filteredEmployee: filterEmployee(event.target.value, maxResults)
        });
    }
    //to sort by name
    onClick = (event) => {
        console.log("in sort on click");
    employeeList.sort((a, b) => (a.data.name > b.data.name) ? 1 : -1)
    this.setState({
        filteredEmployee: employeeList
    });

    
    console.log(employeeList);
    }

    onClick1 = (event) => {
        console.log("in sort info on click");
    employeeList.sort((a, b) => (a.data.info > b.data.info) ? 1 : -1)
    this.setState({
        filteredEmployee: employeeList
    });

    
    console.log(employeeList);
    }

    onClick2 = (event) => {
        console.log("in sort info on click");
    employeeList.sort((a, b) => (a.data.info > b.data.info) ? 1 : -1)
    this.setState({
        filteredEmployee: employeeList
    });

    
    console.log(employeeList);
    }

    onEmployeeClick = (employee) => {
        this.setState({
            selectedEmployee: {name: employee.name, info: employee.info, contact: employee.contact}
        });
    }

    render() {
        return (
            <Col lg={8} md={7} sm={4} lgOffset={2}>
                <Col lg={6}>
                    <HomePage onSearch={this.onSearch} employeeData={this.state.filteredEmployee} onEmployeeClick={this.onEmployeeClick}/>
                </Col>  
                <Col lg={6}>
                    <EmployeePage selectedEmployee={this.state.selectedEmployee}/>
                </Col>
                <br/>
                <br/>
                <Button onClick={this.onClick2} variant="warning" size="lg">Display all</Button>
                <br/>
                <br/>
                <Button onClick={this.onClick} variant="warning" size="lg">Sort-name</Button>
                <br/>
                <br/>
                <Button onClick={this.onClick1} variant="warning" size="lg">Sort-info</Button>
               
            </Col>
            
        );
    }
}

