import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Create1() {
  const navigate=useNavigate()
    const[Data,setData]=useState({
        name:'',
        description:'',
        price:'',
        img:''
      })
      const handlechange=(e)=>{
        setData({...Data,[e.target.name]:e.target.value})
      }
      const handlesubmit=(e)=>{
        // e.preventDefault()
        console.log(Data)
        axios.post('http://localhost:3001/events/events',Data)
        .then(res=>{
          alert('updated Successfully....')
        })
        .catch(err=>{
          alert('Something went wrong')
          console.log(err)
        })
    }
  return (
    <div className='create-body'>
        <div className='create-form'>
            <form>
            <button className='close'onClick={()=>{navigate('/admin')}}>X</button><br/>
                <p className='ce-header'>Create Page:-</p>            
                <label className='create-details'>Event Name:-</label><br/>
                <input type='text' name='name' value={Data.name} onChange={handlechange}/><br/>

                <label className='create-details'>Event Description:-</label><br/>
                <textarea name='description' value={Data.description} onChange={handlechange}/><br/>

                <label className='create-details'>Event price:-</label><br/>
                <input name='price' value={Data.price} onChange={handlechange}/><br/>

                <label className='create-details'>Event Image:-</label><br/>
                <input name='img' value={Data.img} onChange={handlechange}/><br/>

                <button type='submit' onClick={handlesubmit} className='create-btn'>Submit</button>
            </form>
            {/* {msg} */}
        </div>
    </div>
  )
}


// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './Style.css'
// export default function Recipeadd() {
//     const navigate=useNavigate()
//     const[message,setMessage]=useState('')
//     const[formData,setFormData]=useState({
//         name:'',
//         image:'',
//         ingredients:'',
//         steps:''
//     })
//     const handleChange=(e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value})
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         axios.post('http://localhost:2803/recipe/recipe',formData)
        
//         .then(res=>{
//             alert('Signup Successfull Redirecting to Recipe Page...')
//             setTimeout(() => {
//                 navigate('/recipe')
//              });
//         })
//         .catch(err=>{
//             setMessage('')
//             alert('Something went wrong')
//         })
//     }
//   return (
//         <div className='containers'>
//       <form onSubmit={handleSubmit}>
//         <div className='main1'>
//         <div className='main'>
//             <div className='form form1'>
//             {/* <h1 className='text-[30px] relative bottom-6'>Enter your Recipe</h1> */}
//         <label>Enter Recipe name:</label><br></br>
//         <input name='name' value={formData.name} onChange={handleChange} required/><br></br>
//         <label>Image URL: </label><br></br>
//         <input name='image' value={formData.image} onChange={handleChange} required/><br></br>    
//         <label>Enter Ingredients:</label><br></br>
//         <textarea name='ingredients' value={formData.ingredients} onChange={handleChange} required></textarea><br></br>
//         <label>Enter steps :</label><br></br>
//         <textarea name='steps' value={formData.steps} onChange={handleChange} required></textarea><br></br>
//         <button className='btn1' type='submit'>Add Recipe</button>
//         </div>
//         </div>
//         </div>
//       </form>
      
//       {message}
//     </div>
//   )
// }