import React from "react"
 
import { ListGroup, ListGroupItem} from 'react-bootstrap'
import EmployeePanelHeader from './EmployeePanelHeader.js'

class EmployeePanel extends React.Component {

    render() {
        
        const {contact} = this.props.employee
        console.log(this.props);

        return (
            
                <ListGroup>
                    <ListGroupItem>{this.props.employee.name}</ListGroupItem>
                    <ListGroupItem>{contact.office}</ListGroupItem>
                    <ListGroupItem>{contact.mobile}</ListGroupItem>
                    <ListGroupItem>{contact.sms}</ListGroupItem>
                    <ListGroupItem>{contact.email}</ListGroupItem>
                </ListGroup>
            
        );
    }
}

export default EmployeePanel