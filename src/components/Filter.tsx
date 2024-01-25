import {
   ChangeEvent,
   FormEvent,
   useCallback,
   useEffect,
   useState,
} from "react";
import "../styles/Filter.scss";
import { Grid } from "./Grid";
import { Search as SearchIcon } from "lucide-react";
import { Params, useNavigate, useParams } from "react-router-dom";
import { LineBreackHeader } from "./LineBreackHeader";
import Pagination from "./Pagination";
import { RegionDto } from "../dtos/responses/AllRegion.dto";
import { CountryApi } from "../apis/country.api";
const filterOptions: FilterProps[] = [
   {
      code: "all",
      name: "Filter to by Region",
   },
   {
      code: "africa",
      name: "Africa",
   },
   {
      code: "americas",
      name: "America",
   },
   {
      code: "asia",
      name: "Asia",
   },

   {
      code: "europe",
      name: "Europe",
   },
   {
      code: "oceania",
      name: "Oceania",
   },
];

interface FilterProps {
   code: string;
   name: string;
}
export const Filter = () => {
   const navigate = useNavigate();
   const { regionid, searchcontent }: Readonly<Params<string>> = useParams();

   // const [countries, setCountries] = useState<RegionDto[]>([]);
   const [countriesFiltered, setCountriesFiltered] = useState<RegionDto[]>([]);
   const [numbersPages, setNumbersPages] = useState<number[]>([]);
   const [numbersResults] = useState<number>(8);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [region, setRegion] = useState(
      regionid === undefined ? "all" : regionid
   );
   const [search, setSearch] = useState(
      searchcontent === undefined ? "" : searchcontent
   );

   function filterSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
   }

   function regionSelected(e: ChangeEvent<HTMLSelectElement>) {
      const regionId = e.target.value;
      setRegion(regionId);
      setCurrentPage(1);
      navigate(`/region/${regionId}/${search}`);
   }

   function searchChange(e: ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      const searchContent = e.target.value;
      setSearch(searchContent);
      setCurrentPage(1);
      navigate(`/region/${region}/${searchContent}`);
   }
   function generationArrayNumbers(quantityElements: number): number[] {
      return Array.from({ length: quantityElements }, (_, index) => index + 1);
   }
   const getCountries = useCallback(
      async (
         searchValue: string,
         peticion: string,
         numbersResults: number,
         currentPage: number
      ) => {
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
               item.name.common
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
            );
         }

         // setCountries(data);
         const numberRowsSalt = (currentPage - 1) * numbersResults;
         const numberPagination = Math.ceil(data.length / numbersResults);
         data = data.splice(numberRowsSalt, numbersResults);
         setNumbersPages(generationArrayNumbers(numberPagination));
         setCountriesFiltered(data);
      },
      []
   );
   useEffect(() => {
      const regionvalidada = regionid === undefined ? "all" : regionid;
      const searchValida = searchcontent === undefined ? "" : searchcontent;

      setRegion(regionvalidada);
      setSearch(searchValida);
      getCountries(searchValida, regionvalidada, numbersResults, currentPage);
   }, [regionid, searchcontent, numbersResults, currentPage, getCountries]);

   return (
      <>
         <div className="filter-body container">
            <div className="filter-container container-max">
               <form onSubmit={filterSubmit} className="form-container">
                  <div className="form-container-search">
                     <SearchIcon className="form-container-search-icon" />
                     <input
                        id="input-search"
                        value={search}
                        onChange={searchChange}
                        type="text"
                        placeholder="Search for a Country"
                        className="form-container-search-input"
                        autoComplete="off"
                     />
                  </div>

                  <select
                     value={region}
                     onChange={regionSelected}
                     className="form-container-filter"
                  >
                     {filterOptions.map((option) => (
                        <option
                           key={option.code}
                           className="form-container-filter-option"
                           value={option.code}
                        >
                           {option.name}
                        </option>
                     ))}
                  </select>
               </form>
            </div>
         </div>
         <LineBreackHeader />
         <Grid countries={countriesFiltered} />
         <Pagination
            numbersPage={numbersPages}
            currentPage={currentPage}
            funCurrentPage={setCurrentPage}
         />
      </>
   );
};
