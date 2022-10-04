import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./AddEdit.css";
import { useNavigate, useParams } from 'react-router-dom';



function AddEdit() {

    const initialState = {
        name: "",
        email:"",
        mobileNo:"",
        gender:"",
        hobbies:"",
    };

    const [state, setState] = useState(initialState);

    const{name,email,mobileNo,gender,hobbies} = state;

    const {id}  = useParams();
   useEffect(()=>{
    if(id){
        getSingleStudent(id);
    }
   },[id])

   const getSingleStudent = async (id)=>{
    const res = await axios.get(`http://localhost:5000/user/${id}`);
    if(res.status===200){
       setState({...res.data[0]});
    }
   }

   const navigate = useNavigate();


    const addStudent = async (data)=>{
        const res = await axios.post('http://localhost:5000/user', data);
        if(res.status===200){
            alert(res.data)
        }
    }

    const updateStudent = async (data,id)=>{
        const res = await axios.put(`http://localhost:5000/user/${id}`, data);
        if(res.status===200){
            alert(res.data)
        }
    }
  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!name || !email || ! mobileNo || !gender || !hobbies){
        alert("please enter all input field")
    }
   
    else{
        if(!id){
            addStudent(state);
        }
        else{
            updateStudent(state,id);
        }
        
       setTimeout(() => {
        navigate("/");
       }, 500);
    }

    
  }
  
 const handleInput = (e)=>{
  let {name, value} = e.target;
  setState({...state, [name]: value});
 }

  return (
    <div style={{marginTop:"100px"}}>
        <form style={{margin:"auto", padding: "15px", maxWidth:"400px", alignContent:"center"}} onSubmit={handleSubmit} >
     <label htmlFor='name'>name</label>
     <input type="text" id = "name" name='name' placeholder='enter name...' onChange={ handleInput} value = {name} />

     <label htmlFor='email'>email</label>
     <input type="email" id = "email" name='email' placeholder='enter email...' onChange={ handleInput} value = {email} />

     <label htmlFor='mobileNo'>mobileNo</label>
     <input type="number" id = "mobileNo" name='mobileNo' placeholder='enter mobileNo...' onChange={ handleInput} value = {mobileNo} />

     <label htmlFor='gender'>gender</label>
     <input type="text" id = "gender" name='gender' placeholder='enter gender...' onChange={ handleInput} value = {gender} />

     <label htmlFor='hobbies'>hobbies</label>
     <input type="text" id = "hobbies" name='hobbies' placeholder='enter hobbies...' onChange={ handleInput} value = {hobbies} />

     <input type="submit" value = {id? "update": "Add"}/>

        </form>
    </div>
  )
}

export default AddEdit;