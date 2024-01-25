import { Card } from "./Card";
import "../styles/Grid.scss";
import { Loader } from "./Loader";
import { RegionDto } from "../dtos/responses/AllRegion.dto";
interface GridProps {
   countries: RegionDto[];
}

export const Grid = ({ countries }: GridProps) => {
   return (
      <div className="background-body container">
         {countries ? (
            <div className="gridcountries container-max ">
               {countries.length === 0 && (
                  <p className="gridcountries-vacio">
                     No country found, change filters
                  </p>
               )}
               {countries.map((country) => {
                  return (
                     <Card
                        key={country.cca3}
                        code={country.cca3}
                        image={country.flags.png}
                        name={country.name.common}
                        population={country.population.toLocaleString()}
                        region={country.region}
                        capital={country.capital}
                     />
                  );
               })}
            </div>
         ) : (
            <Loader />
         )}
      </div>
   );
};
