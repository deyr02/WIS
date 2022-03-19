import React, { Fragment, useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { AppUser } from '../models/AppUser';
import NavBar from './NavBar';
import Home from '../../feature/Home/Home';
import RegisterUser from '../../feature/user/Registration';




function App() {
  const[users, setUsers] = useState<AppUser[]>( []);

  useEffect(()=>{
    axios.get<AppUser[]>('https://localhost:5001/api/account').then(response => {
  
    setUsers(response.data);
    })
  },[])


  return (
    <>
      <NavBar/>
     

      
      <Container  style = {{marginTop: '71px'}}>
      {/* <Home/> */}
      <RegisterUser/>
        {/* <Header as='h2' icon={'plug'} content="Wester institute of technology" />
        <List>
            {
          
              users.map((item)=>(
                <List.Item key={item.eamil}>{item.firstName}</List.Item>
              ))
            }
        </List> */}
      </Container> 
    </>
  );
}

export default App;
