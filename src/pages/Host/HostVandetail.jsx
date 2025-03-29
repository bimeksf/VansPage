

import { Link ,useParams , Outlet} from 'react-router-dom';
import data from '../../data.js';

export default function HostVandetail() {
    const { id } = useParams(); 

    const dataVans = data.vans;


    const filteredVan = dataVans.find((van) => van.id === id);
    console.log(filteredVan);


        if(!filteredVan){
        return <h1>Van not found</h1>
        }

    return (
        <div className="van-detail-wrapper">
                <Link to="/vans" className="btn-van">Back to all vans</Link>
            <h1>Explore our van options</h1>
            <div className="van-container">
                <img src={filteredVan.imageUrl} alt={filteredVan.name}/>
                <i  className="btn-filteredVan">{filteredVan.type}</i>
                    <h2>{filteredVan.name}</h2>
                    <p className='price'>${filteredVan.price}<span>/day</span></p>
                    <p>{filteredVan.description}</p>
                <button  className="btn-van">Rent this Van</button>
            <nav>
                <Link to="." end  className="btn-van">Details</Link>
                <Link to="pricing" className="btn-van">Pricing</Link>
                <Link to="photos" className="btn-van">Photos</Link>
            </nav>
                <Outlet />
            </div> 
        </div>
    );

}