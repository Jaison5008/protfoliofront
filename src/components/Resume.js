import React, { Fragment, useState } from 'react'
import {AiFillMail,  AiFillPhone} from 'react-icons/ai'
import { useDispatch } from 'react-redux'; 
import { addUserThunk } from '../slice/userSlice';  
function Resume() { 
    const dispatch=useDispatch()
const [name ,setName]=useState('')
const [email ,setEmail]=useState('') 
const [phone ,setPhone]=useState('') 
const [message,setMessage]=useState('') 
const [error,setError]=useState(''); 
const [sucess,setSucess]=useState('')
const submiting=async(e)=>{   
    e.preventDefault()
    if(name&&email&&phone&&message){
   const response= await dispatch(addUserThunk({name,email,phone,message}));   
   setName('') 
   setEmail('') 
   setPhone('') 
   setMessage('')
   if(response){ 
    setSucess('post sucess!!!')
   }else{setError(response.data.error)}
    }else{ 
      setError('pls enter all fields')
    }
  }
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="ff-jose fw-bold ls-2">Jaison M</h2>
                    </div> 
                    <div className="col-md-4">
                        <h5 className="ff-jose fw-bold ls-1 "><AiFillMail className='fs-5 mx-2'/>jaison.eee@gmail.com</h5>
                    </div>
                    <div className="col-md-2">
                        <h5 className="ff-jose fw-bold ls-1"><AiFillPhone className='fs-5 mx-2'/>9790800129</h5>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-1">EDUCATION</h4>
                        <ul> 
                        <li>
                                <h4 className="ff-jose my-1 text-red">FULL STACK DEVELOPMENT PROGRAME</h4>
                                <h6 className="blue-label px-1 py-1">2023</h6> 
                                <p className="m-0">GUVI</p>
                                
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BE - Electrical and Electronics Engineering</h4>
                                <h6 className="blue-label px-1 py-1">2007 - 2011</h6> 
                                <p className="m-0">Sri Lakshmi Ammal Engineering College</p>
                                
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-1 py-1">2007</h6>
                                <p className="m-0">P C K G GOVT HR SEC SCHOOL</p>
                                
                            </li>
                        </ul>

                    </div> 
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">Get in Toch</h4>
                        <form action="" className="site-form">
						
						<div className="form-group mb-2">
							<input type="text" className="form-control px-1 py-2" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
						</div>
						<div className="form-group mb-2">
							<input type="text" className="form-control px-1 py-2" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
						</div>
						<div className="form-group mb-2">
							<input type="text" className="form-control px-1 py-2" placeholder="Your Phone"  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
						</div>
						<div className="form-group mb-2">
							<textarea className="form-control px-1 py-2"cols="6" rows="4" placeholder="Write a Message"  value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
						</div>
						<div className="form-group">
							<input type="submit" className="blue-label text-white px-1 py-2" onClick={submiting}/>
						</div>
					</form>
                    </div>
                </div>

                <hr></hr>
                
                
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume 

