function Form() {


  
  return (
    <div className="register container m-auto  text-blue-900 font-bold ">
      <form method="get" action="" className="mt-28 p-10 bg-white max-w-lg m-auto shadow">
        <h3 className="text-3xl pb-10">Register</h3>
        <div className="form-group">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            UserName
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="username"
              id="username"
              className="outline-none block w-full rounded-md bg-gray-100 border-solid border-x-2 border-y-2 pt-2 pb-2 pl-2"
              placeholder="Enter UserName"
            />
          </div>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="email"
              id="email"
              className="outline-none block w-full rounded-md bg-gray-100 border-solid border-x-2 border-y-2 pt-2 pb-2 pl-2"
              placeholder="Enter email"
            />
          </div>
        </div>
        <button className="mt-8 w-full max-w-md bg-blue-900 text-white pt-4 pb-4 rounded-xl" type="">Submit</button>
      </form>
    </div>
  );
}

export default Form;
