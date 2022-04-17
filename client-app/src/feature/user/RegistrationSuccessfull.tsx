import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Header, Icon } from "semantic-ui-react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment";

export default function RegistrationSuccessfull(){
    return(

        <Segment placeholder>
            <Header icon>
            You have Registered successfully. The login has been created as per given detialls.
            </Header>
            <Button as={NavLink} to='/login' primary>Login</Button>
        </Segment>
    )
}