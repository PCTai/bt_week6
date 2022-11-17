import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

function Form() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openToast, setOpenToast] = useState(false);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const checkValueInput =(value) =>{
    if(value==='' || value===null){
      return 'This field cannot be empty';
    }
    if(value.length<6){
      return "Length must be more than or equal to 6 letters";
    }
    return '';
  }
  const handleBlur= (e) =>{
    if(e.target.name==='username'){
      setErrorUserName(checkValueInput(userName));
    }
    else{
      if(validateEmail(email)){
        setErrorEmail('');
      }
      else{
        if(email===''){
          setErrorEmail('This field cannot be empty');
        }else{
          setErrorEmail('You have entered an invalid email address!');
        }
      }
      
    }
  }
  const showMessage =()=>{
    setOpenToast(true);
        setTimeout(()=>{
        setOpenToast(false)
    },4000)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(userName===''){
      setErrorUserName(checkValueInput(''));
    }
    if(email === ''){
      setErrorEmail('This field cannot be empty')
    }
    else{
      if(errorEmail==='' && errorUserName===''){
        setMessage('You have successfully registered');
        showMessage('success');  
      }
    }
  }
  // console.log(openToast);
  return (
    
    <div className="h-screen register container m-auto  text-blue-900 font-bold  flex items-center justify-center">
      <div id="toast">
      {openToast && <div className="toast text-green-500 fixed top-6 right-6  z-10 border-l-4 bg-white p-5 border-green-500">
        {message}
        </div>}
      </div>
      
      <form method="get" action="" className=" w-full p-10 bg-white max-w-sm m-auto shadow">
        <Link to='/' className=" block">{'<-'}Back home</Link>

        <h3 className="text-3xl pb-10">Register</h3>
        <div className="form-group">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            UserName
          </label>
          <div className="relative mt-2 ">
            <input
              onChange={(e) =>setUserName(e.target.value.trim())}
              type="text"
              name="username"
              id="username"
              className="outline-none block w-full rounded-md bg-gray-100 border-solid border-x-2 border-y-2 pt-2 pb-2 pl-2"
              placeholder="Enter UserName"
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-sm font-normal">{errorUserName}</span>
          </div>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-2 ">
            <input
              onChange={(e) =>setEmail(e.target.value.trim())}
              type="email"
              name="email"
              id="email"
              className="outline-none block w-full rounded-md bg-gray-100 border-solid border-x-2 border-y-2 pt-2 pb-2 pl-2"
              placeholder="Enter email"
              onBlur={handleBlur}

            />
            <span className="text-red-500 text-sm font-normal">{errorEmail}</span>

          </div>
        </div>
        <button onClick={handleSubmit} className="mt-8 w-full max-w-md bg-blue-900 text-white pt-4 pb-4 rounded-xl" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
