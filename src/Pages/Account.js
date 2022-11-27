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

export default function App() {
  return (


    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
    
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">!!  ADD ACCOUNT  !!</p>




    <MDBValidation className='row g-3'>
    <MDBValidationItem className='col-md-4'>
       <MDBInput
        label='First name'
      />
    </MDBValidationItem>
    <MDBValidationItem className='col-md-4'>
       <MDBInput
        label='Middle name'
      />
    </MDBValidationItem>
    <MDBValidationItem className='col-md-4'>
       <MDBInput
        label='Last Name'
      />
    </MDBValidationItem>
    <MDBValidationItem className='col-md-4'>
       <MDBInput
        label='Phone Number'
      />
    </MDBValidationItem>
    <MDBValidationItem className='col-md-4'>
       <MDBInput
        label='Email Id'
      />
    </MDBValidationItem>
    <MDBValidationItem className='col-md-4'>
      <MDBInput
        label='Date of Birth'
        type='date'
      />
    </MDBValidationItem>
    <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
      <MDBInputGroup textBefore='@'>
        <input
          placeholder='Username'
        />
      </MDBInputGroup>
    </MDBValidationItem>
    <MDBValidationItem className='col-md-4'>
       <MDBInput
        label='Password'
      />
    </MDBValidationItem>
    <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
      <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
    </MDBValidationItem>
    <div className='col-12'>
    <a href="/loginin"><button type="button" class="btn btn-primary">ADD</button></a>
    </div>
  </MDBValidation>


</MDBCardBody>
</MDBCard>

  );
}