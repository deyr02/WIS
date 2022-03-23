import React from "react";
import { Header, Table } from "semantic-ui-react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import { AppUser } from "../../app/models/AppUser";


interface Props{
    user: AppUser
}



export default function LoginSuccessful({user}:Props){


    return(
        <Segment placeholder>
            <Header icon>
           Welcome to Western institute of Technology. <br/> <br/> You have logged in successfully.
            </Header>

            <Table celled striped>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell textAlign="center" colSpan ='2'>User Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                <Table.Row>
                    <Table.Cell style={{width: '150px'}} >Name</Table.Cell>
                    <Table.Cell textAlign='right'>{user.firstName + " "+ user.lastName}</Table.Cell>
                </Table.Row>

                     
                <Table.Row>
                    <Table.Cell style={{width: '150px'}} >Date of Birth</Table.Cell>
                    <Table.Cell textAlign='right'>{user.dob ===""? "": new Date(user.dob).toDateString()}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell style={{width: '150px'}} >Email</Table.Cell>
                    <Table.Cell textAlign='right'>{user.eamil}</Table.Cell>
                </Table.Row>

                </Table.Body>
            </Table>
            
        </Segment>
    )
}