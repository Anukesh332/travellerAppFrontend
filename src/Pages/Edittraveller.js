import React, { useEffect } from 'react'
import {useState} from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import {puturl} from './Config'
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
import { MDBRadio } from 'mdb-react-ui-kit';




const Travellerregisteredit = () => {

    const [inpval, setINP] = useState({
        TravellerCode:"",
        TravellerName:"",
        TravellerGender:"",
        TravellerMail:"",
        TravellerNumber:"",
        TravellerDOB:"",
        ValidDate:""
    })

const setdata = (e) => {
    console.log(e.target.value)
    const {name,value} = e.target
    setINP((preval) =>{
        return {
            ...preval,
            [name] : value
        }
    })
}

// const addinputdata = async(e)=>{
//     e.preventDefault();

//     const {TravellerCode, TravellerName, TravellerGender, TravellerMail, TravellerDOB, TravellerNumber, ValidDate} = inpval;

//     const res = await fetch(posturl,{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             TravellerCode, TravellerName, TravellerGender, TravellerMail, TravellerDOB, TravellerNumber, ValidDate
//         })
//     });

//     const data = await res.json();
//     console.log(data);

//     if(res.status === 404 || !data){
//         alert("error");
//         console.log("error");
//     }else{
//         alert("data added");
//         console.log("data added");
//     }
// }



// hffngf

// const [getuserdata,setUserdata] = useState([]);
// console.log(getuserdata);

// const getdata = async(e)=>{
//     e.preventDefault(); 

//     const res = await fetch("/getdata",{
//         method:"GET",
//         headers:{
//             "Content-Type":"application/json"
//         },
//     });

//     const data = await res.json();
//     console.log(data);

//     if(res.status === 404 || !data){
//         console.log("error");
//     }else{
//         setUserdata(data);
//         console.log("get data");
//     }
// }


// useEffect(()=>{
//     getdata();
// },[])




const addinputdata11 = async(e)=>{
    e.preventDefault();

    const {TravellerCode, TravellerName, TravellerGender, TravellerMail, TravellerDOB, TravellerNumber, ValidDate} = inpval;

    const res = await fetch(puturl,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            TravellerCode, TravellerName, TravellerGender, TravellerMail, TravellerDOB, TravellerNumber, ValidDate
        })
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data){
        alert("error");
        console.log("error");
    }else{
        alert("data added");
        console.log("data added");
    }
}








    return (
        <>

    <Navbar/>
    <div className="big">
    <Dashboard/>
   



      <div>
            {/* <h1 className='ems'><i>Traveller Register</i></h1> */}


            <div>

                {/* <form className='regemp'>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Traveller Code</b></label>
                        <input type="text" value={inpval.TravellerCode} onChange={setdata} name="TravellerCode" class="form-control" id="exampleInputreferencecode1" placeholder="Enter Traveller Code" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName1"><b>Traveller Name</b></label>
                        <input type="text" value={inpval.TravellerName} onChange={setdata} name="TravellerName" class="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Enter Name" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Traveller Mail</b></label>
                        <input type="email" name="TravellerMail" value={inpval.EmployeeMail} onChange={setdata} class="form-control" id="exampleInputemail1" placeholder="Enter Email" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Traveller Gender</b></label>
                        <input type="text" name="TravellerGender" value={inpval.TravellerGender} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter Gender" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Traveller DOB</b></label>
                        <input type="text" name="TravellerDOB" value={inpval.TravellerDOB} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter DOB" className='widthreg'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Valid Up To</b></label>
                        <input type="text" name="ValidDate" value={inpval.ValidDate} onChange={setdata} class="form-control" id="exampleid1" placeholder="Validity Date" className='widthreg1'></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Phone Number</b></label>
                        <input type="text" name="TravellerNumber" value={inpval.TravellerNumber} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter Phone Number" className='widthreg1'></input>
                    </div>
                    {/* <div class="form-group">
                        <label for="exampleInputreferencecode1">Upload Image</label>
                        <input type="file" name="EndDate" value={inpval.EndDate} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter End Date" className='widthreg1'></input>
                    </div> */}
                {/* </form>
                    <div className='submitbtn'>
                    <button type="submit" onClick={addinputdata} class="btn btn-primary">Submit</button>
                    </div> */} 


<MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Traveller</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Traveller Code' id='form1' type='text' className='w-100' value={inpval.TravellerCode} onChange={setdata} name="TravellerCode" placeholder="Enter Traveller Code"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Traveller Name' id='form2' type='text' value={inpval.TravellerName} onChange={setdata} name="TravellerName" placeholder="Enter Name"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Traveller Mail' id='form3' type='email' name="TravellerMail" value={inpval.TravellerMail} onChange={setdata} placeholder="Enter Email"/>
              </div>


              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Traveller Gender' id='form3' type='text' name="TravellerGender" value={inpval.TravellerGender} onChange={setdata} placeholder="Enter Gender"/>
              </div>
                {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBRadio name='TravellerGender' id='flexRadioDefault1' label='Male' value={inpval.TravellerGender} onChange={setdata}/>
                <MDBRadio name='TravellerGender' id='flexRadioDefault2' label='Female' value={inpval.TravellerGender} onChange={setdata}/>
                </div> */}


              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Traveller DOB' id='form3' type='date' name="TravellerDOB" value={inpval.TravellerDOB} onChange={setdata} placeholder="Enter DOB"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Traveller Number' id='form3' type='text' name="TravellerNumber" value={inpval.TravellerNumber} onChange={setdata} placeholder="Enter Phone Number"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Validity Date of Card' id='form3' type='date' name="ValidDate" value={inpval.ValidDate} onChange={setdata} placeholder="Enter Validity Date upto"/>
              </div>

            


              
              <button type="button" class="btn btn-primary" onClick={addinputdata11}>Register</button>
        
                
              {/* <MDBBtn className='mb-4' size='lg' type="submit" onClick={addinputdata}>Register</MDBBtn> */}

            

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src={travelK} fluid/>
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

export default Travellerregisteredit;


