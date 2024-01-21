import { useEffect, useState } from "react";
import get from "axios";
import { useParams } from "react-router-dom";
import "../styles/Description.scss";
import { Return } from "./Return";
import { BorderCountry } from "./BorderCountry";
import { Country } from "./Country";
import { LineBreackHeader } from "./LineBreackHeader";
import { Loader } from "./Loader";

const getCountries = async (codeCountry: string | undefined) => {
   const url = `${process.env.REACT_APP_URL_API}/alpha/${codeCountry}`;
   let data: CountriesProps[] = [];
   await get(url).then(function (response) {
      data = response.data;
   });
   return data[0];
};

interface CountriesProps {
   cca2: string;
   flags: {
      svg: string;
   };
   name: {
      nativeName: NativeNameProps;
      common: string;
   };
   population: number;
   region: string;
   subregion: string;
   capital: string;
   tld: string;
   currencies: CurrencieProps;
   languages: LanguageProps;
   borders: any;
}

interface NativeNameProps {
   common: string;
   nativeName: string;
}

interface CurrencieProps {
   name: string;
}
interface LanguageProps {
   name: string;
}

export const Description = () => {
   const { codeCountry } = useParams();
   const [countries, setCountries] = useState<CountriesProps>();

   useEffect(() => {
      window.scroll(0, 0);
      const execute = async () => {
         const dataCountry = await getCountries(codeCountry);
         setCountries(dataCountry);
      };
      execute();
   }, [codeCountry]);

   return (
      <>
         {countries ? (
            <>
               <LineBreackHeader />
               <Return key={`r${countries.cca2} `} />
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
               {/* {countries.borders ? ( */}
               <BorderCountry
                  key={`cb${countries.cca2}`}
                  borders={countries.borders}
               />
               {/* ) : (
						<></>
					)} */}
            </>
         ) : (
            <Loader oculte={false} />
         )}
      </>
   );
};
