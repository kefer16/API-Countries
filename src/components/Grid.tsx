import { useEffect, useState } from "react";
import get from "axios";
import { Card } from "./Card";
import "../styles/Grid.scss";
import { Loader } from "./Loader";
interface CardProps {
   cca3: string;
   code: string;
   image: string;
   name: {
      common: string;
   };
   population: string;
   region: string;
   capital: string;
   flags: {
      png: string;
   };
}
const getCountries = async (searchValue: string, peticion: string) => {
   let url = "",
      data: any = [];

   if (peticion === "all") {
      url = `${process.env.REACT_APP_URL_API}/${peticion}`;
   } else {
      url = `${process.env.REACT_APP_URL_API}/region/${peticion}`;
   }

   await get(url).then((response) => {
      data = response.data;
   });

   if (searchValue) {
      data = data.filter((item: any) =>
         item.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );
   }

   // data = data.slice(16,32)
   // console.log(data.length);

   return data;
};
interface GridProps {
   searchValue: string;
   peticion: string;
}
export const Grid = ({ searchValue, peticion }: GridProps) => {
   const [cards, setCards] = useState<CardProps[]>();

   useEffect(() => {
      const execute = async () => {
         const dataCountries = await getCountries(searchValue, peticion);
         setCards(dataCountries);
      };

      execute();
   }, [searchValue, peticion]);

   return (
      <div className="background-body container">
         {cards ? (
            <div className="gridcountries container-max ">
               {cards.length === 0 ? (
                  <p className="gridcountries-vacio">
                     No country found, change filters
                  </p>
               ) : (
                  <></>
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
