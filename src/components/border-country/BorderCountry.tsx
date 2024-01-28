import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BorderCountry.scss";
import { useState } from "react";
import { CountryApi } from "../../apis/country/country.api";
import { FindCodesDto } from "../../apis/country/dto/FindCodes.dto";
interface BorderCountryProps {
   borders: any;
}

export const BorderCountry = ({ borders }: BorderCountryProps) => {
   const [itemBoder, setItemBorder] = useState<FindCodesDto[]>([]);

   const getCountries = async (borderCodes: string) => {
      if (borderCodes) {
         const apiCountry = new CountryApi();
         await apiCountry
            .findCodesCountry(borderCodes)
            .then((resp: FindCodesDto[]) => {
               setItemBorder(resp);
            });
      }
   };

   useEffect(() => {
      getCountries(borders);
   }, [borders]);

   return (
      <div className="container">
         <div className="bordercountry-container container-max">
            <p className="bordercountry-title">Border Countries:</p>
            <div className="bordercountry">
               {itemBoder.length > 0 ? (
                  itemBoder.map((country: FindCodesDto) => (
                     <Link
                        key={country.cca2}
                        to={`/description/${country.cca2}`}
                        className="bordercountry-item"
                     >
                        {country.name.common}
                     </Link>
                  ))
               ) : (
                  <p className="bordercountry-nofound">
                     No border country found
                  </p>
               )}
            </div>
         </div>
      </div>
   );
};
