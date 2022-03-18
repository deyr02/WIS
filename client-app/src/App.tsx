import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';
export interface AppUserDTO {
  firstName: string;
  lastName: string;
  eamil: string;
  dOB: string;
}

function App() {
  const[users, setUsers] = useState<AppUserDTO[]>( []);

  useEffect(()=>{
    axios.get('https://localhost:5001/api/account').then(response => {
  
    setUsers(response.data);
    })
  },[])


  return (
    <div>
      <Header as='h2' icon={'plug'} content="Wester institute of technology" />
      <List>
          {
         
            users.map((item)=>(
              <List.Item key={item.eamil}>{item.firstName}</List.Item>
            ))
          }
      </List>
   
    </div>
  );
}

export default App;
