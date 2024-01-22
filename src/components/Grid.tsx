import { useEffect, useState } from "react";
import { Card } from "./Card";
import "../styles/Grid.scss";
import { Loader } from "./Loader";
import { CountryApi } from "../apis/country.api";
import { RegionDto } from "../dtos/responses/AllRegion.dto";
interface GridProps {
   searchValue: string;
   peticion: string;
}

export const Grid = ({ searchValue, peticion }: GridProps) => {
   const [cards, setCards] = useState<RegionDto[]>([]);

   const getCountries = async (searchValue: string, peticion: string) => {
      const apiCountry = new CountryApi();
      let data: RegionDto[] = [];

      if (peticion === "all" || peticion === "") {
         await apiCountry.allRegion().then((resp) => {
            data = resp;
         });
      } else {
         await apiCountry.findRegion(peticion).then((resp: RegionDto[]) => {
            data = resp;
         });
      }
      if (searchValue) {
         data = data.filter((item: RegionDto) =>
            item.name.common.toLowerCase().includes(searchValue.toLowerCase())
         );
      }

      setCards(data);
   };

   useEffect(() => {
      getCountries(searchValue, peticion);
   }, [searchValue, peticion]);

   return (
      <div className="background-body container">
         {cards ? (
            <div className="gridcountries container-max ">
               {cards.length === 0 && (
                  <p className="gridcountries-vacio">
                     No country found, change filters
                  </p>
               )}
               {cards.map((card) => {
                  return (
                     <Card
                        key={card.cca3}
                        code={card.cca3}
                        image={card.flags.png}
                        name={card.name.common}
                        population={card.population.toLocaleString()}
                        region={card.region}
                        capital={card.capital}
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
