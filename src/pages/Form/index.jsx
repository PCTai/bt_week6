import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [open, setOpen] = useState(false);

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
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
        setErrorEmail('You have entered an invalid email address!');
      }
      
    }
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(userName===''){
      setErrorUserName(checkValueInput(''));
    }
    else if(email === ''){
      setErrorEmail('You have entered an invalid email address!')
    }
    else{
      if(errorEmail==='' && errorUserName===''){
        // console.log('Đăng ký thành công');
        setOpen(!open);
      }
    }
  }
  // console.log(open);
  return (
    <div className="register container m-auto  text-blue-900 font-bold ">
      {open && 
      <div
        
       className="model fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center">
          <div className="model-container w-96 h-80 flex justify-center flex-col items-center bg-white shadow-md">
            <h3 className="text-2xl">You have successfully registered</h3>
            <button onClick={() =>setOpen(false)} className="mt-8 pl-10 pr-10 bg-blue-900 text-white pt-4 pb-4 rounded-xl">OK</button>
          </div>
      </div>}
      <form method="get" action="" className="mt-28 p-10 bg-white max-w-lg m-auto shadow">
        <Link to='/' className=" block">{'<-'}Back home</Link>

        <h3 className="text-3xl pb-10">Register</h3>
        <div className="form-group">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            UserName
          </label>
          <div className="relative mt-2 ">
            <input
              onChange={(e) =>setUserName(e.target.value)}
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
              onChange={(e) =>setEmail(e.target.value)}
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
