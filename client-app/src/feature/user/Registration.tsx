import axios, { Axios } from "axios";
import { response } from "express";
import { any } from "prop-types";
import React, { ChangeEvent, useState } from "react";
import { Button, Container, Form, Header, Input, Message } from "semantic-ui-react";
import agent from "../../app/api/agent";
import { RegisterUserDTO } from "../../app/models/RegisterUserDTO";
import RegistrationSuccessfull from "./RegistrationSuccessfull";


export default function RegisterUser(){

    const[UserDetails, setUserDetails] = useState<RegisterUserDTO>({
        firstName: '',
        lastName:'',
        dOB:'',
        email:'',
        password:''
    });

    interface formInterface {
        firstNameError: {}|null,
        LastNemaeError: {}|null,
        dobError: {}|null,
        emailError: {}|null, 
        confirmPasswordEror:{}|null, 
    }
   

    const [submitting, setSubmmitng] = useState(false);
    const[errorFields, setErrorFields] = useState<formInterface>({
        firstNameError: null,
        LastNemaeError: null, 
        dobError: null, 
        emailError: null, 
        confirmPasswordEror: null 
    });
     //this variable has been set to check input password and confirm password are same.
     const [password, setPassword] = useState("");
     const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState<boolean>(false);
    
    function clearErrorMessage(){
        setErrorFields({...errorFields,   firstNameError:null });
        setErrorFields({...errorFields,   LastNemaeError:null });
        setErrorFields({...errorFields,   dobError:null });
        setErrorFields({...errorFields,   emailError:null });
        setErrorFields({...errorFields,   confirmPasswordEror:null });
    }

    function handleSubmit(){

        //making sure error fields are cleared
       clearErrorMessage();
       setErrorFields({...errorFields,   emailError:null });
        
        //checik password and confirm password are same.
        if(password != UserDetails.password){
            setErrorFields({...errorFields,   confirmPasswordEror:{content:"Passwords did not match." } })
            return;

        }
        else{
            setSubmmitng(true);
            agent.Account.register(UserDetails).then(function(response){
                // console.log(response.status);
                //   console.log(response.data);
                //   console.log(response.statusText);
                //   console.log(response.headers);

                  if(response.status == 200){
                      setIsRegistrationSuccessful(true);
                  }
                
                  setSubmmitng(false);
              }).catch(function(error){
                //   console.log(error.response.status)
                //   console.log(error.response)
                  if(error.response.data.errors != null){
                    for(const key in  error.response.data.errors){
                        console.log(key)
                        switch(key){
                            case 'firstName':
                             setErrorFields({...errorFields,   firstNameError:{content:error.response.data.errors[key][0] } })
                             break;
                             case 'lastName':
                                setErrorFields({...errorFields,   LastNemaeError:{content:error.response.data.errors[key][0] } })
                                break;  
                            case 'dOB':
                                setErrorFields({...errorFields,   dobError:{content:error.response.data.errors[key][0] } })
                                break;  
                            case 'email':
                                setErrorFields({...errorFields,   emailError:{content:error.response.data.errors[key][0] } })
                                break; 
                             
                        }   
                    }

                  }
              setSubmmitng(false);
                
                console.log(errorFields);
        
              })
             
              
        }
  
    }

    function hadleInputChange(event: ChangeEvent<HTMLInputElement>){
        const{name, value} = event.target;
        setUserDetails({...UserDetails, [name]:value});
    }
    return(
        
        <Container style={{padding: '30px 50px'}}>

            {isRegistrationSuccessful?

        <RegistrationSuccessfull/>:

            <>
            <Header as='h2' content='Register with Western Institute of studies.' color='blue' textAlign='left'/>
            <Form onSubmit={handleSubmit} loading= {submitting} autoComplete="off" >
                <Form.Field>
                    <label>First Name</label>
                    <Form.Input onChange={(e)=> hadleInputChange(e)} value={UserDetails.firstName} name="firstName" required  plachholder = "First Name"
                        error= {errorFields.firstNameError}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Last Name</label>
                    <Form.Input onChange={(e)=> hadleInputChange(e)} value={UserDetails.lastName} name="lastName" required  plachholder = "Last Name"
                    error= {errorFields.LastNemaeError}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <Form.Input onChange={(e)=> hadleInputChange(e)} type="Date" value={UserDetails.dOB} name="dOB" required plachholder = "Date of Birth"
                    error= {errorFields.dobError}
                    />
                </Form.Field>
                <Form.Field >
                    <label>Email</label>
                    <Form.Input onChange={(e)=> hadleInputChange(e)} type="email" value={UserDetails.email} name="email"  required  plachholder = "Email"
                    error= {errorFields.emailError}
                    />
                
                </Form.Field>
                <Form.Field>
                    <label>Pasword</label>
                    <Input type="password" onChange={(e)=>setPassword(e.target.value)}  name="checkPass" required  plachholder = "Password"/>
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <Form.Input onChange={(e)=> hadleInputChange(e)} type="password" value={UserDetails.password} name="password" required  plachholder = "Confirm Password"
                    error= {errorFields.confirmPasswordEror}
                    />
                </Form.Field>
                <Button type='submit' disabled = {submitting} loading= {submitting} positive floated="right">Submit</Button>
            </Form>
            </>
            
        
        }    
            
        </Container>
        
    )
}