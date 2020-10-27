import React, { useState } from 'react';

const Contact = ()=>{
    const [data,setData] = useState({
        fullname:"",
        phone:'',
        coursename:'',
        email:"",
        message:""

    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            }
        })
    }
        
    const formSubmit = (ex)=>{
        ex.preventDefault();
        alert(
            `My name is ${data.fullname}. My phone number is ${data.phone}. My Coursename is ${data.coursename}. My email id is ${data.email}.`)
    }
  return(
      <>
    <div className='my-5'>
        <h1 className='text-center'>Contact US</h1>
    </div>
    <div className='container contact_div'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1">FullName</label>
                    <input type="text" 
                    class="form-control" 
                    id="exampleInputEmail1"
                    name='fullname'
                    value={data.fullname}
                    onChange={InputEvent} 
                    placeholder="Enter Your FullName"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1">Phone</label>
                    <input type="number" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    name='phone'
                    value={data.phone}
                    onChange={InputEvent} 
                    placeholder='Enter phone Number'/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your phone no. with anyone else.</small>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1">Course Name</label>
                    <input type="text" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    name='coursename'
                    value={data.coursename}
                    onChange={InputEvent} 
                    placeholder='Enter Course Name'/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your course name with anyone else.</small>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="text" 
                    class="form-control" 
                    id="exampleInputPassword1" 
                    name='email'
                    value={data.email}
                    onChange={InputEvent} 
                    placeholder="Enter Email Id"/>
                </div>
                <div className='mb-3' >
                    <label for ='message' class='form-label'>Message</label>
                    <textarea className='form-control' 
                    rows='3' 
                    name='message'
                    value={data.message}
                    onChange={InputEvent} 
                    placeholder='Enter your message here...' >
                        
                    </textarea>
                </div>
                <div className="mb-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact;
