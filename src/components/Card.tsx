import { Suspense } from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";
export interface CardProps {
   code: string;
   image: string;
   name: string;
   population: string;
   region: string;
   capital: string;
}
export const Card = ({
   code,
   image,
   name,
   population,
   region,
   capital,
}: CardProps) => {
   return (
      <Link to={`/description/${code}`} className="card">
         <Suspense fallback={<h1 className="card-image">cargando</h1>}>
            <img src={image} alt={name} className="card-image" />
         </Suspense>

         <div className="card-text">
            <h2 className="card-text-title">{name}</h2>
            <p className="card-text-description">
               <b className="card-text-description-bold">Population:</b>
               {population}
            </p>
            <p className="card-text-description">
               <b className="card-text-description-bold">Region:</b>
               {region}
            </p>
            <p className="card-text-description">
               <b className="card-text-description-bold">Capital:</b>
               {capital}
            </p>
         </div>
      </Link>
   );
};
