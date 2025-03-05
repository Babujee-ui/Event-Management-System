import React from 'react'
import{useNavigate} from 'react-router-dom'

export default function Admin() {

  const navigate=useNavigate()

// eventplaceupdatepage
 
  const EventplaceCreate=()=>{
    navigate('/Create1')
  }
 

  return (
    <div className='admin-body'>
    <div>
        <div className='ad bookingupdate'>
            <p>Event places</p>
            <button className='ad-btn' onClick={EventplaceCreate}>Create</button>
        </div>
    </div>
    </div>
  )
}
