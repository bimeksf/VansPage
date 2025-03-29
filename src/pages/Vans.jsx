import { Link, Navigate } from "react-router-dom";

import data from "../data.js";

export default function Van() {
  const dataVans = data.vans;
  console.log(dataVans);

  const van = dataVans.map((van) => {
    return (
      <Link to={`/vans/${van.id}`}>
        <div key={van.id} className="van-wrapper">
          <img src={van.imageUrl} alt={van.name} />
          <div className="van-info">
            <h2>{van.name}</h2>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <button className="btn-van">{van.type}</button>
        </div>
      </Link>
    );
  });

  return (
    <div className="van-detail-wrapper">
      <h1>Explore our van options</h1>
      <div className="van-detail-container">{van}</div>
    </div>
  );
}
