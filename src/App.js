import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Places from './Components/Book/Places/places';
import SearchForm from './Components/SearchForm/SearchForm';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ProtectedRoutes from './ProtectedRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  
  // const mystyle = {
  //   fontSize: "large",
  //   padding: "10px",
  //   fontFamily: "Arial"
  // };
  return (
        <div className="App" style={{margin:'50px'}}>
            {/* <div>
              <br/>
                  <div>
                      <div style={{display:'inline-Block', textAlign:'left'}}><a href="/" style={{textDecoration:'none'}}> Book Your Room&nbsp;&nbsp;&nbsp;</a></div> 
                      <div style={{display:'inline-Block', textAlign:'right'}}><a href="/"style={{textDecoration:'none'}}>&nbsp;&nbsp;Login&nbsp;&nbsp;</a> </div>
                      <div style={{display:'inline-Block', textAlign:'right'}}><a href="/Register" style={{textDecoration:'none'}}>&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</a></div> 
                </div>  
              </div> */}
            <Navbar>
              <Container>
                <Navbar.Brand href="/">Welcome to Book Your Room</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                   <a href="/Login" style={{textDecoration:'none'}}>&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp; </a>
                  </Navbar.Text>
                  <Navbar.Text>
                   <a href="/Register" style={{textDecoration:'none'}}>&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp; </a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <br/><br/><br/>
          <Router> 
              <Routes>
                  <Route path="/" exact element={<SearchForm />} />
                  <Route path="/Login" exact element={<Login />} />
                  <Route path="/Register" element={<Register />} />
                  <Route element={<ProtectedRoutes />} >   
                      <Route path="/Places" element={<Places />} />
                  </Route>            
                  <Route path="*" element={ <div>404 PAGE NOT FOUND</div>} />  
              </Routes>
          </Router>
        </div>
  );
}

export default App;
