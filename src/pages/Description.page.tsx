import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Return } from "../components/Return";
import { BorderCountry } from "../components/BorderCountry";
import { Country } from "../components/Country";
import { Loader } from "../components/Loader";
import { CountryApi } from "../apis/country.api";
import { CountriesDto } from "../dtos/responses/FindCodeCountry.dto";
import SeparationDescription from "../components/SeparationDescription";

export const Description = () => {
   const { codeCountry } = useParams();
   const [countries, setCountries] = useState<CountriesDto>();

   const getCountries = async (codeCountry: string) => {
      const apiContry = new CountryApi();
      await apiContry
         .findCodeCountry(codeCountry)
         .then((resp: CountriesDto[]) => {
            setCountries(resp[0]);
         });
   };

   useEffect(() => {
      window.scroll(0, 0);
      getCountries(codeCountry ?? "");
   }, [codeCountry]);

   return (
      <div className="container-body">
         {countries ? (
            <>
               <SeparationDescription />
               <Return />
               <Country
                  key={countries.cca2}
                  svgImage={countries.flags.svg}
                  title={countries.name.common}
                  nativeName={
                     Object.values(countries.name.nativeName)[0].common
                  }
                  population={countries.population}
                  region={countries.region}
                  subRegion={countries.subregion}
                  capital={countries.capital}
                  topLevelDomain={countries.tld}
                  currencies={Object.values(countries.currencies)[0].name}
                  languages={Object.values(countries.languages).toString()}
               />
               <BorderCountry
                  key={`cb${countries.cca2}`}
                  borders={countries.borders}
               />
            </>
         ) : (
            <Loader oculte={false} />
         )}
      </div>
   );
};
