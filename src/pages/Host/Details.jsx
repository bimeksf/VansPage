
import { Link ,useParams , Outlet} from 'react-router-dom';
import data from '../../data.js';

export default function Details() {
  const { id } = useParams();

  const van = data.vans.find((van) => van.id === id);
  console.log(van);


  return (

<div className="van-container">
        <h2>name: {van.name}</h2>
    <i  className="btn-filteredVan">Category: {van.type}</i>
        <p>Description:{van.description}</p>

        </div>
  )


}
