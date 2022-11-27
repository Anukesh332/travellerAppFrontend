import React, { useState, useEffect } from "react";
import { NavLink, UNSAFE_DataRouterStateContet } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
import { geturl } from "./Config";
import { CSVLink } from "react-csv";
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import { MDBTable } from 'mdb-react-ui-kit';


const Travellerlist = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(geturl, {
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

  const [deleteuserdata, setUserdata1] = useState([]);
  console.log(deleteuserdata);

  const deleteuser = async (TravellerCode) => {
    
    const res2 = await fetch(`http://localhost:5000/Traveller/${TravellerCode}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      console.log("error");
    } else {
      setUserdata1(data2);
      console.log("user deleted");
    }
  };

  useEffect(() => {
    deleteuser();
  }, []);



  // let allresult;
  // const handleSearchall = (event) => {
  //   let searchtextall = event.target.value;
  //   console.log(searchtextall);
  //   console.log(getuserdata);
  //   allresult = getuserdata.filter((item) =>
  //     item.EmployeeCode.toLowerCase()
  //       .toLowerCase()
  //       .includes(searchtextall.toLowerCase())
  //   );
  //   setUserdata(allresult);
  //   console.log(allresult);
  // };

  // let allresults;
  // const handleSearchall1 = (event) => {
  //   let searchtextall1 = event.target.value;
  //   console.log(searchtextall1);
  //   console.log(getuserdata);
  //   allresults = getuserdata.filter((item) =>
  //     item.EmployeeName.toLowerCase()
  //       .toLowerCase()
  //       .includes(searchtextall1.toLowerCase())
  //   );
  //   setUserdata(allresults);
  //   console.log(allresults);
  // };

  return (
    <header>
      
<div className="king1">


      <Navbar/>
      <h3 class="text-center">Traveller List</h3>
      

    <div className="big">
      
      
    <Dashboard/>
    
   
<div class="mx-2"></div>



 <MDBTable responsive>
      <div className="mt-1">
        <div className="container">
          <div className="ems">
          </div>
          <div className="add_btn">
            <NavLink to="/travellerregister" className="btn btn-primary">
              Add User +
            </NavLink>
 
            </div> 

          <div className="add_btn">


          <CSVLink data={getuserdata} className="btn btn-success">
            Download in Excel
          </CSVLink>
          
          </div> 
           
        <div class="table-responsive text-center" className="acc">
          <table class="table table-bordered border-primary table-hover">
            <thead>
              <tr className="tabletop">
                <th scope="col">
                  <div class="input-group">
                    <div class="form-outline">
                      {/* <input
                        type="search"
                        id="form1"
                        class="form-control"
                        onChange={handleSearchall}
                        placeholder="Filter"
                      /> */}
                    </div>
                  </div>{" "}
                  Traveller Code
                </th>
                <th scope="col">
                  {/* <input
                    type="search"
                    id="form1"
                    class="form-control"
                    onChange={handleSearchall1}
                    placeholder="Get by Name"
                  /> */}
                  Traveller Name
                </th>
                <th scope="col">Traveller Mail</th>
                <th scope="col">Traveller DOB</th>
                <th scope="col">Traveller Gender</th>
                <th scope="col">Traveller Number</th>
                <th scope="col">Validity Date</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                {/* <th scope='col'>Grade</th>
                <th scope='col'>Department</th>
                <th scope='col'>L+1</th> */}
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element) => {
                return (
                  <>
                    <tr className="tablebottom">
                      <th scope="row">{element.TravellerCode}</th>
                      <td>
                        <b>{element.TravellerName}</b>
                      </td>
                      <td>
                        <b>{element.TravellerMail}</b>
                      </td>
                      <td>
                        <b>{element.TravellerDOB}</b>
                      </td>
                      <td>
                        <b>{element.TravellerGender}</b>
                      </td>
                      <td>
                        <b>{element.TravellerNumber}</b>
                      </td>
                      <td>
                        <b>{element.ValidDate}</b>
                      </td>
                      {/* <td>{element.grade}</td> */}
                      {/* <td>{element.department}</td> */}
                      {/* <td>{element.L1}</td> */}

                      <td className="d-flex justify-content-between">
                        <NavLink to={`/details/${element._id}`}>
                          <button className="btn btn-success">VIEW</button>
                        </NavLink>
                      </td>

                      <td>
                        <NavLink to="/edit">
                          <button className="btn btn-primary">EDIT</button>
                        </NavLink>
                      </td>

                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteuser(element.TravellerCode)}
                        >
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

export default Travellerlist;
