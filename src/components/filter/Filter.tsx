import {
   ChangeEvent,
   FormEvent,
   useCallback,
   useEffect,
   useState,
} from "react";
import "./Filter.scss";
import { Grid } from "../grid/Grid";
import { Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineBreackHeader } from "../line-break/LineBreackHeader";
import Pagination from "../pagination/Pagination";
import { RegionDto } from "../../apis/country/dto/AllRegion.dto";
import { CountryApi } from "../../apis/country/country.api";
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

   const [countriesFiltered, setCountriesFiltered] = useState<RegionDto[]>([]);
   const [numbersPages, setNumbersPages] = useState<number[]>([]);
   const [numbersResults] = useState<number>(8);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [region, setRegion] = useState("");
   const [search, setSearch] = useState("");

   function filterSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
   }

   function regionSelected(e: ChangeEvent<HTMLSelectElement>) {
      const regionId = e.target.value;
      const pageInitial = 1;
      setRegion(regionId);
      setCurrentPage(pageInitial);
      navigate(`/?regionid=${regionId}&search=${search}&page=${pageInitial}`);
   }

   function searchChange(e: ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      const searchContent = e.target.value;
      const pageInitial = 1;
      setSearch(searchContent);
      setCurrentPage(pageInitial);
      navigate(
         `/?regionid=${region}&search=${searchContent}&page=${pageInitial}`
      );
   }
   const changePage = (page: number) => {
      setRegion(region);
      setSearch(search);
      setCurrentPage(page);
      navigate(`/?regionid=${region}&search=${search}&page=${page}`);
   };
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

         const numberRowsSalt = (currentPage - 1) * numbersResults;
         const numberPagination = Math.ceil(data.length / numbersResults);
         data = data.splice(numberRowsSalt, numbersResults);
         setNumbersPages(generationArrayNumbers(numberPagination));
         setCountriesFiltered(data);
      },
      []
   );

   useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      const regionid = urlParams.get("regionid");
      const searchcontent = urlParams.get("search");
      const page = urlParams.get("page");
      const regionvalidada = regionid === null ? "all" : regionid;
      const searchValida = searchcontent === null ? "" : searchcontent;
      let pageValida = page === null ? 1 : Number(page);
      pageValida = pageValida <= 0 ? 1 : Number(pageValida);

      setRegion(regionvalidada);
      setSearch(searchValida);
      setCurrentPage(pageValida);
      getCountries(searchValida, regionvalidada, numbersResults, pageValida);
   }, [region, search, numbersResults, currentPage, getCountries]);

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
            funCurrentPage={changePage}
         />
      </>
   );
};
