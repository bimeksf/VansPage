import { Link } from 'react-router-dom';
import data from '../../data.js';

export default function Hostvans() {
    const van = data.vans.map((van) => { 

        return (
            <Link to={`/host/vans/${van.id}`}>
            <div key={van.id} className="flex items-center w-5/6   bg-white  p-2 rounded-md shadow-sm font-mono">
                    <img className="w-1/4 object-cover  h-1/4" src={van.imageUrl} alt={van.name} />
                        <div className='flex flex-col justify-center items-start w-11/12 gap-1 ml-4'>
                            <h2 className='text-sm font-bold'>{van.name}</h2>
                            <p className='text-sm '>${van.price}<span className='font-normal'>/day</span></p>
                        </div>
                    </div>
                </Link>


)
       });

    return (
        <>
        <h1 className='font-bold text-xl my-6'>Your listed vans</h1>

        <div className="flex flex-col items-center   h-screen gap-4 ">
            {van}  
        </div>
        
        </>



    )
}