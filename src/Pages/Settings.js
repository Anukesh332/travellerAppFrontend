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

function Settings() {
  return (
    <MDBContainer fluid>



      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
            
    
        <MDBCard>
        <MDBCardBody>
          <MDBCardTitle className='text-center'><b><h1>Settings</h1></b></MDBCardTitle>
          <MDBCardText>
        
            <MDBRow>


            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <MDBRange
                defaultValue={4}
                min='0'
                max='5'
                step='0.5'
                id='customRange3'
                label='Brightness'
            />
            <MDBRange
                defaultValue={2.5}
                min='0'
                max='5'
                step='0.5'
                id='customRange3'
                label='Smoothness'
            />
            <MDBRange
                defaultValue={1.5}
                min='0'
                max='5'
                step='0.5'
                id='customRange3'
                label='Applicable Range'
            />
       

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <MDBRange
                defaultValue={3.5}
                min='0'
                max='5'
                step='0.5'
                id='customRange3'
                label='Efficiency'
            />
            <MDBRange
                defaultValue={1}
                min='0'
                max='5'
                step='0.5'
                id='customRange3'
                label='Output'
            />
            <MDBRange
                defaultValue={4.5}
                min='0'
                max='5'
                step='0.5'
                id='customRange3'
                label='Effectiveness'
            />
              
            </MDBCol>
            
        </MDBRow>
          </MDBCardText>
          <MDBCardTitle className='text-center'>
         <a href="/home"><button type="button" class="btn btn-primary">Back</button></a>
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>





  );
}

export default Settings;