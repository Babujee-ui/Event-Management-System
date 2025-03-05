import React,{useState,useEffect} from 'react'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'


export default function Edit() {

  const navigate=useNavigate()
  const[prodData,setprodData]=useState({
    // placename:data.name,
    // description:data.desc,
    // price:data.price,
    // img:data.img
})
const[popup,setpopup]=useState(false)
const[data,setdata]=useState({})
const[,list,Setlist]=useState({})
useEffect(()=>{
    axios.get('http://localhost:3002/user')
    .then(res=>Setlist(res.data))
    .catch(err=>console.log(err))
},[])
const handleDel=(id)=>{
    axios.delete(`http://localhost:3002/user/${id}`)
    .then(res=>{alert('Delected sucessfully!!!!');console.log(res)})
    .catch(err=>(console.log(err)))
}
const handlechange=(e)=>{
    setprodData({...prodData,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
    // e.PreventDefault()
    axios.put(`http://localhost:3000/user/${data.id}`,prodData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

  return (
    <div className='edit-body'>
        <div className='edit-form'>
        <form>
            <button className='close'onClick={()=>{navigate('/admin')}}>X</button><br/>
            <p className='ce-header'>Edit page:-</p>
            <label className='create-details'>Place Name:-</label><br/>
            <input type='text' name='name' /><br/>
            <label className='create-details'>Place price:-</label><br/>
            <input type='text' name='price'/><br/>
            <label className='create-details'>Product Description:-</label><br/>
            <textarea  name='desc' /><br/>
            <label className='create-details'>Product Image:-</label><br/>
            <input name='img' /><br/>
            <button type='submit'  className='edit-btn'>Submit</button>
        </form>
        </div>
    </div>
  )
}
