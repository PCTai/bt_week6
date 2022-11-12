import { Link  } from "react-router-dom";
import './style.css'

function Home() {
    return ( 
       <>
        <div className="container pl-6 pr-6 w-full text-center mx-auto">
            <h1 className="text-3xl font-bold mt-10 text-blue-900">
                Project Week 6
            </h1>
            <div className="mt-10 list-project w-full grid gap-6">
                <Link to={"/register"}>
                    <div className="item text-center w-full pt-16 pb-16 bg-white hover:shadow-lg rounded-lg">
                        <h3 className="text-2xl">Form Register</h3>
                    </div>
                </Link>
                <Link to={"/search"}>
                    <div className="item text-center w-full pt-16 pb-16 bg-white hover:shadow-lg rounded-lg">
                        <h3 className="text-2xl">Search Filter</h3>
                    </div>
                </Link>
                <Link to={"/quiz"}>
                    <div className="item text-center w-full pt-16 pb-16 bg-white hover:shadow-lg rounded-lg">
                        <h3 className="text-2xl">Quiz App</h3>
                    </div>
                </Link>
            </div>
            
        </div></>
     );
}

export default Home;