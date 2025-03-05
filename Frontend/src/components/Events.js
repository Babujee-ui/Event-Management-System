import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate} from 'react-router-dom'

export default function Events() {
    const[list,setList]=useState([])
        useEffect(()=>{
            axios.get('http://localhost:3001/events/events')
            .then(res=>setList(res.data.message))
            .catch(err=>console.log(err))
        },[])
    const navigate=useNavigate()
    // const handle=()=>{
    //     alert('Booked sucessfully...👍')
    // }
  return (
    <div class="event-containers ">
        {list.map(x=>(
        <div class="event-card">
        
            
            <div class="cardimg">
                <img src={x.img} alt="image"/>
            </div>
            
            <div class="title">
                <p className='event-title'><span>Event Name : {x.name}</span></p>
            </div>
           
           <div>
            <p className='event-desc'><span>About : {x.description}</span></p>
            </div>

            <div>
            <p className='event-price'><span>Price:Rs.{x.price}-/only</span></p>
            </div>
            
            <div class="tag"><button onClick={()=>{alert(`${x.name} booked Succesfully...👍`)}} className='Book-btn'><span>Book Event</span></button></div>
            <div class="curve_one"></div>
            <div class="curve_two"></div>
            
            {/*  */}
       
        </div>
 ))}
        {/* add new */}
        <div class="recipe-card"></div>
        </div>
    
  )
}

