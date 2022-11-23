import React, { useEffect } from 'react'
import {useState} from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import {posturl} from './Config'

const Travellerregister = () => {

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

const addinputdata = async(e)=>{
    e.preventDefault();

    const {TravellerCode, TravellerName, TravellerGender, TravellerMail, TravellerDOB, TravellerNumber, ValidDate} = inpval;

    const res = await fetch(posturl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            TravellerCode, TravellerName, TravellerGender, TravellerMail, TravellerDOB, TravellerNumber, ValidDate
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






    return (
        <>

    <Navbar/>
    <div className="big">
    <Dashboard/>
   



      <div>
            <h1 className='ems'><i>Traveller Register</i></h1>


            <div>

                <form className='regemp'>
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
                </form>
                    <div className='submitbtn'>
                    <button type="submit" onClick={addinputdata} class="btn btn-primary">Submit</button>
                    </div>
            </div>
        </div>



        </div>

        </>

    )
}

export default Travellerregister;


