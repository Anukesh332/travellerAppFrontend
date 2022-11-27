import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import startimg from '../images/startimg.jpg'




function Start() {
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><b>!! WE ARE HERE TO MEET YOUR BEST TRAVELLING PLACES  !!</b></p>

             <MDBCardImage src={startimg} fluid/>

             {/* <p>Travel Agents meet with clients to discuss and learn about their travel requirements. They are responsible for advising clients about suitable travel options in accordance with their needs, wants and capabilities. In addition, they help them plan trips to domestic or international destinations, tours, accommodation, transport, insurance and fares.In order to attract Travel Agents that best matches your needs, it is very important to write a clear and precise Travel Agent job description.  Travel Agent job</p> */}

            </MDBCol>


            {/* <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'> */}
              
            {/* <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><b>If you dont have account then SIGN UP here</b></p> */}

            {/* <button type="button" class="btn btn-primary mx-5">SIGN UP</button> */}

            {/* </MDBCol> */}


            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>


            <a href="loginin"><button type="button" class="btn btn-primary mx-5 mt-5">LOGIN IN</button></a>
            <p class='mt-3'><b>If you already have account then LOGIN IN here</b></p>

            <a href="/account"><button type="button" class="btn btn-primary mx-5 mt-5">ADD ACCOUNT</button></a>
            <p class='mt-3'><b>If you dont have account then CREATE ACCOUNT here</b></p>



            </MDBCol>
          

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Start;