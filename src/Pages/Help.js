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
  MDBRange,
  MDBCheckbox,
  MDBCardTitle,
  MDBCardText
}
from 'mdb-react-ui-kit';

function Help() {
  return (
    <MDBContainer fluid>



      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
            
    
        <MDBCard>
        <MDBCardBody>
          <MDBCardTitle className='text-center mt-5'><b><h1>Self Help </h1></b></MDBCardTitle>
          <MDBCardTitle className='text-center mt-5'><b><h1>Is The Best</h1></b></MDBCardTitle>
          <MDBCardTitle className='text-center mt-5'><b><h1>Help</h1></b></MDBCardTitle>
          <MDBCardTitle className='text-center mt-5'>
         <a href="/home"><button type="button" class="btn btn-primary">Back</button></a>
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>





  );
}

export default Help;