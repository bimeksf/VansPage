import data from '../../data.js';

import { useParams } from 'react-router-dom';

export default function Pricing() {

    const { id } = useParams();

    const van = data.vans.find((van) => van.id === id);

    return (
        <p className='price'>${van.price}<span>/day</span></p>

    )
}   