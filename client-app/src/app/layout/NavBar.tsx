import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

export default function NavBar(){
    return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header as={NavLink} to='/'>
                    <img src="/assets\logo.png" alt="logo" style={{margin:'5px 10px 5px 0'}}/>
                    Western Institute of Studies
                </Menu.Item>

                <Menu.Item as ={NavLink}  to='/' name="Home"/>
                <Menu.Item as={NavLink} to='/register' position="right" name="Register"/>
                <Menu.Item as={NavLink} to='/login' name="log in"/>


            </Container>

        </Menu>
    )
}