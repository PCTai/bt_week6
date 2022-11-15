
import './style.css';
import {users} from '../../constants/users'
import {  useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Filter() {
    const sorter2 = (sortBy,sort) => (a, b) =>{
        if(sort==='asc'){
            if(sortBy==='age'){
                return a[sortBy] > b[sortBy] ? 1 : -1;
            }
            return a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
        }
        else{
           if(sort==='desc'){
            console.log('desc');
            if(sortBy==='age'){

                return a[sortBy] < b[sortBy] ? 1 : -1;
            }
            return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? 1 : -1;
           }
        }
    }
    const [order, setOrder] = useState('name');
    const [sort, setSort] = useState('asc');
    // console.log(sort);
    const [listUser, setListUser] = useState(users.sort(sorter2(order,sort)));
    const inputRef= useRef();
    
    const handleSearchClick =() =>{
        
        if(inputRef.current.value){
            const newlist= users.filter((item) =>{
                return item.name.toLowerCase().includes(inputRef.current.value.toLowerCase());
            })
            setListUser(newlist);
            inputRef.current.value= '';
            inputRef.current.focus();
        }
        else{
            setListUser(users);
        }
    }
    const handleEnter =(e) =>{
        
        if (e.keyCode === 13) {
            handleSearchClick();
        }
    }
    const handleSetOrder =(e) =>{
        setOrder(e.target.value);
        setListUser(listUser.sort(sorter2(e.target.value,sort)))
       
    }
    const handleSetSort =(e) =>{
        setSort(e.target.value);
        // console.log(e.target.value);
        setListUser(listUser.sort(sorter2(order,e.target.value)))
    }


    return ( 
        <div className="filter container pl-6 pr-6 pt-28  m-auto grid gap-10">
            <div className="nav-left">
                <Link to='/' className=" block">{'<-'}Back home</Link>
                <h3 className="text-3xl font-bold text-blue-900 ">Search Filter</h3>
                <div className="search mt-6 w-full flex">
                    <input onKeyDown={handleEnter} 
                    ref={inputRef} type='text' 
                    className=" form-input rounded text-pink-500 p-1 flex-1 outline-none pl-4"
                    placeholder='Enter key'
                    />
                    <button onClick={handleSearchClick} className='p-4 ml-2 bg-blue-900 text-white rounded hover:shadow-blue-900 shadow'>Search</button>
                </div>
                <h3 className="text-xl text-left font-bold text-blue-900 mt-4">Order</h3>
                <select onChange={handleSetOrder} className='outline-none max-w-xs w-full mt-4 p-4' name="propoty" id="user">
                    <option className='block p-4' value="name">Name</option>
                    <option className='block p-4' value="age">Age</option>
                </select>

                <h3 className="text-xl text-left font-bold text-blue-900 mt-4">Sort</h3>
                <select onChange={handleSetSort} className='outline-none max-w-xs w-full mt-4 p-4' name="propoty" id="user">
                    <option className='block p-4' value="asc">ASC</option>
                    <option className='block p-4' value="desc">DESC</option>
                </select>
            </div>
            <div className="user-main">
                <h3 className="text-2xl text-left font-bold text-blue-900"> List User</h3>
                <div className="list-user mt-6">
                <table className="table-auto w-full border-collapse border border-slate-500 ">
                    <thead>
                        <tr>
                            <th className='border pt-4 pb-4 text-xl border-slate-600'>Stt</th>
                            <th className='border pt-4 pb-4 text-xl border-slate-600'>Name</th>
                            <th className='border pt-4 pb-4 text-xl border-slate-600'>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser.map((item,index) =>(
                            <tr key={item.id}>
                                <td className='border pt-4 pb-4 pl-2 text-xl border-slate-600'>{index+1}</td>
                                <td className='border pt-4 pb-4 text-xl text-center border-slate-600 '>{item.name}</td>
                                <td className={`border pt-4 pb-4 text-xl text-center border-slate-600 ${item.age>=18?'text-green-500':'text-red-500'}`}>{item.age}</td>
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