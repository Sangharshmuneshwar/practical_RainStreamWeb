
import {v4 as uuid} from "uuid";

let users = [];

export const getUsers = (req, res)=>{
    res.send(users)
};

export const createUsers = (req, res)=>{
    const user = req.body;
    users.push({...user,id: uuid()});

    res.send('user addes succses')
};
export const getUser = (req, res)=>{
    const Singleuser = users.filter((user)=>user.id===req.params.id)
    

    res.send(Singleuser)
};

export const deleteUser = (req,res)=>{
    users = users.filter((user)=> user.id !== req.params.id);
    res.send('User deleted succses');
};

export const updateUser =(req,res) =>{
    const user = users.find((user)=> user.id === req.params.id);

    user.name = req.body.name;
    user.email = req.body.email;
    user.MobileNo = req.body.MobileNo;
    user.gender = req.body.gender;
    user.hobbies = req.body.hobbies;

 
    res.send('User update succses');
};