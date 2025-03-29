

import data from '../../data.js';
import { useParams } from 'react-router-dom';
export default function Photos() {
    const { id } = useParams();

    const van = data.vans.find((van) => van.id === id);
    return (


        <img src={van.imageUrl} alt={van.name}/>


    )
}