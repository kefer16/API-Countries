import { Suspense } from "react";
import "../styles/Country.scss";
interface CountryProps {
   svgImage: any;
   title: string;
   nativeName: string;
   population: number;
   region: string;
   subRegion: string;
   capital: string;
   topLevelDomain: string;
   currencies: string;
   languages: string;
}
export const Country = ({
   svgImage,
   title,
   nativeName,
   population,
   region,
   subRegion,
   capital,
   topLevelDomain,
   currencies,
   languages,
}: CountryProps) => {
   return (
      <div className="container">
         <div className="country-container container-max">
            <Suspense fallback={<h1 className="card-image">cargando</h1>}>
               <img
                  className="country-image"
                  src={svgImage}
                  alt={`bandera de ${title}`}
                  loading="lazy"
               />
            </Suspense>

            <div className="country-descripcion">
               <p className="country-descripcion-text country-descripcion-title">
                  {title}
               </p>
               <p className="country-descripcion-text">
                  <strong className="country-descripcion-text-bold">
                     Native Name:{" "}
                  </strong>
                  {nativeName}
               </p>
               <p className="country-descripcion-text">
                  <strong className="country-descripcion-text-bold">
                     Population:{" "}
                  </strong>
                  {population}
               </p>
               <p className="country-descripcion-text">
                  <strong className="country-descripcion-text-bold">
                     Region:{" "}
                  </strong>
                  {region}
               </p>
               <p className="country-descripcion-text">
                  <strong className="country-descripcion-text-bold">
                     Sub Region:{" "}
                  </strong>
                  {subRegion}
               </p>

               <hr className="separator" />
               <p className="country-descripcion-text">
                  <strong className="country-descripcion-text-bold">
                     Capital:{" "}
                  </strong>
                  {capital}
               </p>
               <p className="country-descripcion-text">
                  <strong className="country-descripcion-text-bold">
                     Top Level Domain:
                  </strong>
                  {topLevelDomain}
               </p>
               <p className="country-descripcion-text">
                  <strong className="country-descripcion-text-bold">
                     Currencies:
                  </strong>
                  {currencies}
               </p>
               <p className="country-descripcion-text">
                  <strong className="country-descripcion-text-bold">
                     Languages:{" "}
                  </strong>
                  {languages}
               </p>
            </div>
         </div>
      </div>
   );
};
