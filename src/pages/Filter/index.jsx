
import './style.css';
import {users} from '../../constants/users'
import { useRef, useState } from 'react';

function Filter() {

    const [listUser, setListUser] = useState(users);
    const inputRef= useRef();
    const handleClick =() =>{
        
        if(inputRef.current.value){
            const newlist= listUser.filter((item) =>{
                return item.name.toLowerCase() !== inputRef.current.value.toLowerCase();
            })
            setListUser(newlist);
        }
    }

    return ( 
        <div className="filter container pl-6 pr-6 pt-20  m-auto grid gap-10">
            <div className="nav-left">
                <h3 className="text-3xl font-bold text-blue-900 ">Search Filter</h3>
                <div className="search mt-6 w-full flex">
                    <input ref={inputRef} type='text' className=" form-input rounded text-pink-500 p-1 flex-1 outline-none "/>
                    <button onClick={handleClick} className='p-4 ml-2 bg-blue-900 text-white rounded hover:shadow-blue-900 shadow'>Search</button>
                </div>
            </div>
            <div className="user-main">
                <h3 className="text-2xl text-left"> List User</h3>
                <div className="list-user">
                <table className="table-auto w-full border-collapse border border-slate-500 ">
                    <thead>
                        <tr>
                            <th className='border border-slate-600'>Stt</th>
                            <th className='border border-slate-600'>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser.map(item =>(
                            <tr key={item.id}>
                                <td className='border border-slate-600'>{item.id}</td>
                                <td className='border border-slate-600 '>{item.name}</td>
                            </tr >
                        )) }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
     );
}

export default Filter;