import React from "react";
import { Button, Container, Form, Input } from "semantic-ui-react";

export default function RegisterUser(){
    return(
        <Container style={{padding: '30px 50px'}}>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <Input onChange={()=> console.log("changed")}  plachholder = "First Name"/>
                </Form.Field>

                <Form.Field>
                    <label>Last Name</label>
                    <Input  plachholder = "Last Name"/>
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <Input type="Date"  plachholder = "Date of Birth"/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <Input  plachholder = "Email"/>
                </Form.Field>
                <Form.Field>
                    <label>Pasword</label>
                    <Input type="password"  plachholder = "Password"/>
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <Input type="password"  plachholder = "Confirm Password"/>
                </Form.Field>
                <Button type='submit' positive floated="right">Submit</Button>
            </Form>
        </Container>
        
    )
}