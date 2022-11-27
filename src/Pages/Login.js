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
    MDBCardTitle,
    MDBCardText,
    MDBValidation,
    MDBValidationItem,
    MDBCheckbox,
    MDBInputGroup
  }
  from 'mdb-react-ui-kit';

export default function Login() {
  return (


    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
    
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">!!  Login  !!</p>




    <MDBValidation className='text-center mb-5 mx-1 mx-md-4 mt-4'>
   
    
  
    <MDBValidationItem className='text-center mb-5 mx-1 mx-md-4 mt-4'>
       <MDBInput
        label='Username'
      />
    </MDBValidationItem>
  
    <MDBValidationItem className='text-center mb-5 mx-1 mx-md-4 mt-4'>
       <MDBInput
        label='Password'
      />
    </MDBValidationItem>
    
    <div className='col-12'>
    <a href="/home"><button type="button" class="btn btn-primary">Login</button></a>
    </div>
  </MDBValidation>


</MDBCardBody>
</MDBCard>

  );
}