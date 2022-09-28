import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Places from './Components/Places/places';
import SearchForm from './Components/SearchForm/SearchForm';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ProtectedRoutes from './ProtectedRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import AllBookings from './Components/AllBookings/AllBookings';

function App() {
  
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
          <div style={{marginLeft:'150px', marginRight:'150px'}}>
            <Router> 
                <Routes>
                    <Route path="/" exact element={<SearchForm />} />
                    <Route path="/Login" exact element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route element={<ProtectedRoutes />} >   
                        <Route path="/Places" element={<Places />} />
                    </Route>
                    <Route path="/AllBookings" element={ <AllBookings />} />  
                    <Route path="/MyBooking" element={ <div>My Booking</div>} />
                    <Route path="*" element={ <div>404 PAGE NOT FOUND</div>} />   
                </Routes>
            </Router>
         </div>
        </div>
  );
}

export default App;
