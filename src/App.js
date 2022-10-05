import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SearchForm from './Components/SearchForm/SearchForm';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ProtectedRoutes from './ProtectedRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import AdminPortal from './Components/AdminPortal/AdminPortal';
import Listings from './Components/Listings/Listings';

function App() {

  const [loggedIn, setLoggedIn]=useState(false);
  const [name, setName]=useState('');
  const [id, setId]=useState('');
  const [admin, setAdmin]=useState('');


  function handleAllStates(newLoggedInValue,newNameValue,newIdValue,newAdminValue){
    setLoggedIn(newLoggedInValue);
    setId(newIdValue);
    setName(newNameValue);
    setAdmin(newAdminValue);
  }

  function logout(){
    setLoggedIn(false);
    setId('');
    setName('');
    setAdmin('');
  }

  
  // const mystyle = {
  //   fontSize: "large",
  //   padding: "10px",
  //   fontFamily: "Arial"
  // };
  return (
        <div className="App" style={{margin:'20px'}}>
            <Navbar>
              <Container>
                <Navbar.Brand href="/">Book Your Room</Navbar.Brand>
                <Navbar.Toggle />
                { !loggedIn ?
                <Navbar.Collapse className="justify-content-end">                  
                  <Navbar.Text>
                   <a href="/Login" style={{textDecoration:'none'}}>&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp; </a>
                  </Navbar.Text>
                  <Navbar.Text>
                   <a href="/Register" style={{textDecoration:'none'}}>&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp; </a>
                  </Navbar.Text>
                </Navbar.Collapse>
                :                
                <Navbar.Collapse className="justify-content-end">  
                <Navbar.Text>
                  <a>&nbsp;&nbsp;&nbsp;Hi {name}!&nbsp;&nbsp;&nbsp; </a>
                  </Navbar.Text>
                  { admin ?
                    <Navbar.Text>
                   <a href="/AdminPortal" style={{textDecoration:'none'}}>&nbsp;&nbsp;&nbsp;Admin Portal&nbsp;&nbsp;&nbsp; </a>
                  </Navbar.Text> 
                  : null}
                <Navbar.Text>
                  <a  onClick={logout} href="/" style={{textDecoration:'none'}}>&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp; </a>
                  </Navbar.Text>
                </Navbar.Collapse>
                }
              </Container>
            </Navbar>
            <br/><br/><br/>
          <div style={{marginLeft:'150px', marginRight:'150px'}}>
            <Router> 
                <Routes>
                    <Route path="/" exact element={<SearchForm />} />
                    <Route path="/Login" exact element={<Login handleAllStates={handleAllStates} />} />
                    <Route path="/Register" element={<Register />} />
                    {/* <Route element={<ProtectedRoutes />} >   
                        <Route path="/Places" element={<Listings />} />
                    </Route> */}
                    <Route path="/AdminPortal" element={ <AdminPortal />} /> 
                    <Route path="*" element={ <div>404 PAGE NOT FOUND</div>} />   
                </Routes>
            </Router>
         </div>
        </div>
  );
}

export default App;
