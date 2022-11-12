
import './style.css'

function Filter() {
    return ( 
        <div className="filter container pl-6 pr-6 pt-20  m-auto grid gap-10">
            <div className="nav-left">
                <h3 className="text-3xl font-bold text-blue-900 ">Search Filter</h3>
                <div className="search mt-6 w-full flex">
                    <input type='text' className=" form-input rounded text-pink-500 p-1 flex-1"/>
                    <button className='p-4 ml-2 bg-blue-900 text-white rounded hover:shadow-blue-900 shadow'>Search</button>
                </div>
            </div>
            <div className="user-main">
            <h3 className="text-2xl text-left"> List User</h3>
            <div className="list-user">

            </div>
            </div>
        </div>
     );
}

export default Filter;