import './style.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import Home from '../../feature/Home/Home';
import RegisterUser from '../../feature/user/Registration';
import Login from '../../feature/user/Login';
import { Route } from 'react-router';




function App() {
 


  return (
    <>
      <NavBar/>
     

      
      <Container  style = {{marginTop: '71px'}}>

        <Route exact path='/' component = {Home}/>
        <Route path='/register' component = {RegisterUser}/>
        <Route path='/login' component={Login}/>
      {/* <Home/> */}
      {/* <RegisterUser/> */}
       {/* <Login/> */}
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
