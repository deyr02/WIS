import React, { ChangeEvent, useState } from "react";
import { Button, Container, Form, Header, Message } from "semantic-ui-react";
import agent from "../../app/api/agent";
import { AppUser } from "../../app/models/AppUser";
import { LoginDTO } from "../../app/models/LoginDTO";
import LoginSuccessful from "./LoginSuccessful";



export default function Login(){

    const[submitting, setSubmitting] = useState(false);
    const[UserDetails, setUserDetails] = useState<LoginDTO>({
        email: '',
        password: ''
    })

    const[appUser, setAppUser] = useState<AppUser>({
        firstName :"",
        lastName: "",
        dob: "",
        eamil:"",
    })

    const [showError, setShowerror] = useState(false);
    const[sucessfulLoigin, setSuccessfulLogin] = useState<Boolean>(false);

    function handleSubmit(){

        console.log(UserDetails);
        setSubmitting(true)
        agent.Account.login(UserDetails).then(function(response){
            console.log(response);
            setSubmitting(false);

            if(response.status == 200){
                setAppUser(response.data)
                setSuccessfulLogin(true);
            }

        }).catch(function (error){
           console.log(error.response);
            if(error.response.status >=400){
                setShowerror(true);
                setSubmitting(false);
                setAppUser({
                    firstName :"",
                    lastName: "",
                    dob: "",
                    eamil:"",
                });

                setSuccessfulLogin(false);
            }

        });

    }

    function hadleInputChange(event: ChangeEvent<HTMLInputElement>){
        const{name, value} = event.target;
        setUserDetails({...UserDetails, [name]:value});
    }
    return(
        <Container style={{padding: '30px 50px'}}>
            {
                sucessfulLoigin?

                <LoginSuccessful user={appUser}/>
                :
                <>
                <Header as='h2' content='Login to Western Institute of Studies' color='blue' textAlign='left'/>
                <Form error= {showError} onSubmit={handleSubmit} loading= {submitting} autoComplete={"Off"} >
                <Message
                error
                header='Login failed'
                content='Invaild Email or password'
                />
                    <Form.Field >
                        <label>Email</label>
                        <Form.Input onChange={(e)=> hadleInputChange(e)} type="email" value={UserDetails.email} name="email"  required  plachholder = "Email" 
                
                        />
                    
                    </Form.Field>
                    <Form.Field>
                        <label>Pasword</label>
                        <Form.Input type="password" onChange={(e)=>hadleInputChange(e)}  name="password" required  plachholder = "Password"/>
                    </Form.Field>
                    
                    <Button type='submit' disabled = {submitting} loading= {submitting} positive floated="right">Submit</Button>
            </Form>
                </>
            }
            

            
        </Container>
    )
}