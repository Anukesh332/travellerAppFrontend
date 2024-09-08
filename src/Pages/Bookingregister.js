import React, { useEffect } from 'react'
import {useState} from 'react'
import {posturl1} from './Config'
import { geturl } from './Config'
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
import  kingimg1  from '../images/kingimg1.jpg'





const Bookingregister = () => {

    const [inpval, setINP, ] = useState({
        TravellerCode:"",
        TravellerName:"",
        From:"",
        To:"",
        TravellingDate:"",
        Status:""
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

const addinputdata1 = async(e)=>{
    e.preventDefault();

    const {TravellerCode, TravellerName, From, To, TravellingDate, Status} = inpval;

    const res = await fetch(posturl1,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            TravellerCode, TravellerName, From, To, TravellingDate, Status
        })
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 404 || !data){
        alert("error");
        console.log("error");
    }else{
        alert("data added");
        console.log("data added");
    }
}



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
const [getuserdata, setUserdata] = useState([])


console.log(getuserdata)
  
    const getdata = async (e) => {
      const res = await fetch(geturl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      const data = await res.json()
      console.log(data)
  
      if (res.status === 404 || !data) {
        console.log('error')
      } else {
        setUserdata(data)
        console.log('getdata')
      }
    }
  
    useEffect(() => {
      getdata()
    }, [])
  
   

    return (
        <header>

    <Navbar/>
    <div className="big">
    <Dashboard/>

      <div>
            <div>
               
          


<MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Booking Register</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                {/* <MDBInput label='Traveller Code' id='form1' type='text' className='w-100' value={inpval.TravellerCode} onChange={setdata} name="TravellerCode" placeholder="Enter Traveller Code"/> */}
                
    
                        <form>
                            <select  value={inpval.TravellerCode} onChange={setdata} name="TravellerCode" class="form-control">
                            <option>Select Traveller Code </option>
                            {getuserdata.map((element, id) => {
                                return (
                                    <>
                                    <option>{element.TravellerCode}</option>
                                    </>
                                        )
                                })}
                            </select>
                        </form>
            

                    {/* <MDBDropdown>
                          <MDBDropdownToggle tag='a' className='btn btn-outline-secondary'>
                            Traveller Code
                          </MDBDropdownToggle>
                          <MDBDropdownMenu>
                          {getuserdata.map((element, id) => {
                            return (
                                   <>
                                   <option>{element.TravellerCode}</option>
                                   </>
                                       )
                               })}
                          </MDBDropdownMenu>
                        </MDBDropdown> */}
                                                
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                {/* <MDBInput label='Traveller Name' id='form2' type='text' value={inpval.TravellerName} onChange={setdata} name="TravellerName" placeholder="Enter Name"/> */}
                {/* <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='btn btn-outline-secondary'>
                      Traveller Name
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link> 
                    {getuserdata.map((element ) => {
                                return (
                                    <>
                                    <option>{element.TravellerName}</option>
                                    </>
                                        )
                                })}</MDBDropdownItem>
                       </MDBDropdownMenu>
                     </MDBDropdown> */}

                        <form>
                            <select  value={inpval.TravellerName} onChange={setdata} name="TravellerName" class="form-control">
                            <option>Select Traveller Name</option>
                            {getuserdata.map((element) => {
                                return (
                                    <>
                                    <option>{element.TravellerName}</option>
                                    </>
                                        )
                                })}
                            </select>
                        </form>
                    


              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='From' id='form3' type='text' name="From" value={inpval.From} onChange={setdata} placeholder="Enter From (Location)"/>
              </div>


              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='To' id='form3' type='text' name="To" value={inpval.To} onChange={setdata} placeholder="Enter To (Location)"/>
              </div>


              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Travelling Date' id='form3' type='date' name="TravellingDate" value={inpval.TravellingDate} onChange={setdata} placeholder="Enter Travelling Date"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Status' id='form3' type='text' name="Status" value={inpval.Status} onChange={setdata} placeholder="Enter Active Or Inactive"/>
              </div>

           

            


              
              <button type="button" class="btn btn-primary" onClick={addinputdata1}>Register</button>


              {/* <MDBBtn className='mb-4' size='lg' type="submit" onClick={addinputdata1}>Register</MDBBtn> */}

          

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src={kingimg1} fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>








            </div>
        </div>


        </div>
        

        </header>
    
    )
}

export default Bookingregister;


