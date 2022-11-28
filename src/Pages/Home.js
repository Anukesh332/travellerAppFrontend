import React from 'react'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import  travelK  from '../images/travelk.jpg'
import img from '../images/img.jpg'
import { NavLink, UNSAFE_DataRouterStateContet } from "react-router-dom";





const Home = () => {
  return (
    <>
    <div className="king">
    <Navbar/>
    <div className="big">
    <Dashboard/>

<div class="mx-5 mt-5">

   
<MDBContainer fluid>

      <MDBCard className='text-black m-2' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <p className="text-center h2  mb-5 mx-1 mx-md-4 mt-4">!!   WELCOME  !!</p>

            <div>

            <p>Image result for travel agency description example. A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination.</p>
            </div>

            <div className="add_btn" class="mt-4">
            <NavLink to="/travellerregister" className="btn btn-outline-info">
              Register
            </NavLink>
 
            </div> 

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src={img} fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>





    </div>
 
    </div>
    </div>
    </>
  )
}

export default Home

