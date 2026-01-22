import React, { useState } from 'react'

function Register(){
  const [data,setData]=useState({
    first_name:"",
    email:""
  })
  function handleData(e){
    const{name,value}=e.target
    setData({...data,[name]:value})
    

  }
  function formSubmit(){
    console.log(data)
  }
    return (
      <>
          <h1 className="heading">Register</h1>
            <label>First name</label>
            <input type='text' name='first_name' value={data.first_name} onChange={handleData}/>
            <label>E-mail</label>
            <input type='text' name='email' value={data.email} onChange={handleData}/>
          <button onClick={formSubmit}>Register</button>
      </>


  )
}

export default Register