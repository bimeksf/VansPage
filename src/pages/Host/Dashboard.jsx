
import { Link } from 'react-router-dom';
import data from '../../data.js';

export default function Dashboard() {
    const van = data.vans.map((van) => { 

        return (
            <Link to={`/host/vans/${van.id}`}>
            <div key={van.id} className="card">
                    <img className="medium" src={van.imageUrl} alt={van.name} />
                        <h2>{van.name}</h2>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                </Link>


)
       });

    return (
        <>
        <h1>Welcome</h1>

        <div className="van-listed">
            {van}  
        </div>
        
        </>



    )
}