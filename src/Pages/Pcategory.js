import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import { MDBTable } from 'mdb-react-ui-kit';
import { geturlpcategory, posturlpcategory } from "./Config";





const Pcategory = () => {
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);
  
    const getdata = async (e) => {
      const res = await fetch(geturlpcategory, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await res.json();
      console.log(data);
  
      if (res.status === 404 || !data) {
        console.log("error");
      } else {
        setUserdata(data);
        console.log("getdata");
      }
    };
  
    useEffect(() => {
      getdata();
    }, []);
  
    
  
  
    const [inpval, setINP] = useState({
      wld_p_no:"",
      wld_p_category:"",
      wld_material:"",
      wld_createdby:"",
      wld_updatedon:"",
      wld_master_id:"",
      wld_updatedby:""
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
  
  const {wld_p_no, wld_p_category, wld_material, wld_createdby} = inpval;
  
  const res = await fetch(posturlpcategory,{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
        wld_p_no, wld_p_category, wld_material, wld_createdby
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
  
  
  
  const [show,setshow]=useState(false)
  
  const [show2,setshow2]=useState(true)
  
  



  
  
  const addinputdataedit = async(wld_master_id)=>{
  
  const {wld_p_no, wld_p_category, wld_material, wld_updatedby,wld_updatedon} = inpval;
  
  const res2 = await fetch(`http://localhost:5000/pcategory/update/${wld_master_id}`,
  {
    method: "POST",
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify({
      wld_master_id,wld_p_no, wld_p_category, wld_material, wld_updatedby,wld_updatedon
    })
  });
  
  const data2 = await res2.json();
  console.log(data2);
  
  if(res2.status === 422 || !data2){
    alert("error");
    console.log("error");
  }else{
    alert("data added");
    console.log("data added");
  };
  };
  
  
  const [show1,setshow1]=useState(false)
  

  
  
  
  const addinputdataeditdelete = async(wld_master_id)=>{
  
    const {wld_p_no, wld_p_category, wld_material, wld_updatedby,wld_updatedon} = inpval;
    
    const res2 = await fetch(`http://localhost:5000/pcategory/delete/${wld_master_id}`,
    {
      method: "POST",
      headers: {
          "Content-Type":"application/json",
      },
      body: JSON.stringify({
        wld_master_id,wld_p_no, wld_p_category, wld_material, wld_updatedby,wld_updatedon
      })
    });
    
    const data2 = await res2.json();
    console.log(data2);
    
    if(res2.status === 422 || !data2){
      alert("error");
      console.log("error");
    }else{
      alert("data added");
      console.log("data added");
    };
    };
    
  










    return (
        <header>
          
    <div className="king1">
    
    
          <Navbar/>
          <h3 class="text-center">Pcategory List</h3>
          
    
        <div className="big">
          
          
        <Dashboard/>
        
       
    <div class="mx-2"></div>
    
    
    
     <MDBTable responsive>
          <div className="mt-1">
           
            <div className="container">
              <div className="ems">
              </div>
              <div className="add_btn">
     
                <button className="btn btn-warning" onClick={()=>setshow1(!show1)}>Add</button>

                </div> 
            <div class="table-responsive text-center" className="acc">
              <table class="table table-bordered border-primary table-hover">
              <thead>
              <tr className="tabletop">
                <th scope="col">wld_p_no</th>
                <th scope="col">wld_p_category</th>
                <th scope="col">wld_material</th>
                {show1?<th scope="col">wld_createdby</th>:null}
                {show?<th scope="col">wld_updatedby</th>:null}
                <th scope="col">wld_deleted</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
            {show1?
              <tr>
                <td>
                  <input type='text' className='w-100' value={inpval.wld_p_no} onChange={setdata} name="wld_p_no" placeholder="Enter wld_p_no"></input>
                </td>
                <td>
                  <input type='text' className='w-100' value={inpval.wld_p_category} onChange={setdata} name="wld_p_category" placeholder="Enter wld_p_category"></input>
                </td>
                <td>
                  <input type='text' className='w-100' value={inpval.wld_material} onChange={setdata} name="wld_material" placeholder="Enter wld_material"></input>
                </td>
                <td>
                  <input type='text' className='w-100' value={inpval.wld_createdby} onChange={setdata} name="wld_createdby" placeholder="Enter wld_createdby"></input>
                </td>
                <td>
                </td>
                <td>
                <button className="btn btn-success" onClick={addinputdata}>Save</button>
                </td>
                <td>
                <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              :null}
              {getuserdata.map((element) => {
                return (
                    <>
                    <tr className="tablebottom">
                    
                      <td>
                      {show2?<><b>{element.wld_p_no}</b><br /></>:null}
                      {show?<input type='text' value={inpval.wld_p_no} onChange={setdata} name="wld_p_no" placeholder="Enter wld_p_no"></input>:null}
                      </td>
                      <td>
                      {show2?<><b>{element.wld_p_category}</b><br /></>:null}
                      {show?<input type='text' className='w-100' value={inpval.wld_p_category} onChange={setdata} name="wld_p_category" placeholder="Enter wld_p_category"></input>:null}
                      </td>
                      <td>
                        {show2?<><b>{element.wld_material}</b><br /></>:null}
                      {show?<input type='text' className='w-100' value={inpval.wld_material} onChange={setdata} name="wld_material" placeholder="Enter wld_material"></input>:null}
                      </td>
                      
                     
                      {show?<td>{show2?<><b>{element.wld_updatedby}</b><br /></>:null}
                        <input type='text' className='w-100' value={inpval.wld_updatedby} onChange={setdata} name="wld_updatedby" placeholder="Enter wld_updatedby"></input>
                        </td>:null}
                     
                        {show1?<td></td>:null}


                      <td>
                        <b>{element.wld_deleted}</b>
                      </td>
                 
                      <td>
                      {show2?<button className="btn btn-primary" onClick={()=>{setshow(!show);setshow2(!show2)}}>EDIT</button>:null}
                          {show?<button className="btn btn-success" onClick={()=>addinputdataedit(`${element.wld_master_id}`)}>Save</button>:null}
                      {show?<button className="btn btn-primary" onClick={()=>{setshow(!show);setshow2(!show2)}}>Cancel</button>:null}

                      </td>
                      <td>
                        <button
                          className="btn btn-danger" onClick={()=>addinputdataeditdelete(`${element.wld_master_id}`)}>
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
              </table>
            </div>
            
    
    
              
              
            </div>
          </div>
    
          </MDBTable>
    
          <div class="mx-2"></div>
    
          </div>
    
    
          </div>
    
        </header>
      );
    };


export default Pcategory;
  