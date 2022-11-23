import React, { useState, useEffect } from 'react'
import { NavLink, UNSAFE_DataRouterStateContet } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { geturl1 } from './Config'
import { CSVLink } from "react-csv"
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'

const Bookinglist = () => {
  const [getuserdata, setUserdata] = useState([])
  console.log(getuserdata)

  const getdata = async (e) => {
    const res = await fetch(geturl1, {
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

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const deletedata = await res2.json()
    console.log(deletedata)

    if (res2.status === 422 || !deletedata) {
      console.log('error')
    } else {
      console.log('user deleted')
      getdata()
    }
  }

  return (

    <header>
   

   <Navbar/>
    <div className="big">
    <Dashboard/>
   




      <div className='mt-5'>
        <div className='container'>
          <div className='ems'>
            <h3>Booking Table</h3>
          </div>
          {/* <div className='add_btn mt-2'>
            <NavLink to='/bookingregister' className='btn btn-primary'>
              Add User +
            </NavLink>
          </div> */}

          {/* <CSVLink data={getuserdata} className="btn btn-success mb-3">Download in Excel</CSVLink> */}

          <table class='table'>
            <thead>
              <tr className='tabletop'>
                <th scope='col'>Traveller Code</th>
                <th scope='col'>Traveller Name</th>
                <th scope='col'>From</th>
                <th scope='col'>To</th>
                <th scope='col'>Travilling Date</th>
                <th scope='col'>Status</th>
                <th scope='col'>View</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
                {/* <th scope='col'>Grade</th>
                <th scope='col'>Department</th>
                <th scope='col'>L+1</th> */}
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr className='tablebottom'>
                      <th scope='row'>{element.TravellerCode}</th>
                      <td><b>{element.TravellerName}</b></td>
                      <td><b>{element.From}</b></td>
                      <td><b>{element.To}</b></td>
                      <td><b>{element.TravellingDate}</b></td>
                      <td><b>{element.Status}</b></td>
                      {/* <td><b>{element.EndDate}</b></td>
                      <td><b>{element.Status}</b></td> */}
                      {/* <td>{element.grade}</td> */}
                      {/* <td>{element.department}</td> */}
                      {/* <td>{element.L1}</td> */}

                      <td className='d-flex justify-content-between'>
                        <NavLink to={`/details/${element._id}`}>
                          <button className='btn btn-success'>VIEW</button>
                        </NavLink>
                        </td>

                        <td>
                        <NavLink to='/edit2'>
                          <button className='btn btn-primary'>EDIT</button>
                        </NavLink>
                        </td>

                        <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => deleteuser(element._id)}>DELETE
                        </button>
                        </td>

                        
                     
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>



      </div>


    </header>
  )
}

export default Bookinglist
