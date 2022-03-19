import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default function NavBar(){
    return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets\logo.png" alt="logo" style={{margin:'5px 10px 5px 0'}}/>
                    Western Institute of Studies
                </Menu.Item>

                <Menu.Item  to='/activities' name="Home"/>
                <Menu.Item position="right"  to='/activities' name="Register"/>
                <Menu.Item   to='/activities' name="log in"/>


            </Container>

        </Menu>
    )
}