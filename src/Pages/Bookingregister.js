import React, { useEffect } from 'react'
import {useState} from 'react'
import {posturl1} from './Config'
import { geturl } from './Config'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'




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
    <h1>Home</h1>
  






      <div>
            <h1 className='ems'><i>Booking Ticket</i></h1>


            <div>
                <form className='regemp'>
                <div class="form-group">
                    <label for="exampleInputreferencecode1"><b>Traveller Code</b></label>
                        <form>
                            <select  value={inpval.TarvellerCode} onChange={setdata} name="TravellerCode" class="form-control" className='widthreg'>
                            <option>Traveller Code  .</option>
                            {getuserdata.map((element, id) => {
                                return (
                                    <>
                                    <option>{element.TravellerCode}</option>
                                    </>
                                        )
                                })}
                            </select>
                        </form>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputName1"><b>Traveller Name</b></label>
                        <form>
                            <select  value={inpval.TravellerName} onChange={setdata} name="TravellerName" class="form-control" className='widthreg'>
                            <option>Traveller Name  .</option>
                            {getuserdata.map((element, id) => {
                                return (
                                    <>
                                    <option>{element.TravellerName}</option>
                                    </>
                                        )
                                })}
                            </select>
                        </form>
                    </div>


                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>From</b></label>
                        <input type="text" name="From" value={inpval.From} onChange={setdata} class="form-control" id="exampleid1" placeholder="Location" className='widthreg'></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>To</b></label>
                        <input type="text" name="To" value={inpval.To} onChange={setdata} class="form-control" id="exampleid1" placeholder="To" className='widthreg1'></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Travelling Date</b></label>
                        <input type="text" name="TravellingDate" value={inpval.TravellingDate} onChange={setdata} class="form-control" id="exampleid1" placeholder="Travelling Date" className='widthreg1'></input>
                    </div>

                    
                    <div class="form-group">
                        <label for="exampleInputreferencecode1"><b>Status</b></label>
                        <select type="text" name="Status" value={inpval.Status} onChange={setdata} class="form-control" id="exampleid1" placeholder="Enter Dept Name" className='widthreg'>
                        <option selected>Your Status  </option>
                        <option>Active</option>
                        <option>Inactive</option>
                        </select>
                    </div>
                    
                    

                    </form>
                    <div className='submitbtn1'>
                    <button type="submit" onClick={addinputdata1} class="btn btn-primary">Submit</button>
                    </div>
            </div>
        </div>


        </div>
        

        </header>
    
    )
}

export default Bookingregister;


