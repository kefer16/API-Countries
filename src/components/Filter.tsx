import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "../styles/Filter.scss";
import { Grid } from "./Grid";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Params, useNavigate, useParams } from "react-router-dom";
import { LineBreackHeader } from "./LineBreackHeader";
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
      navigate(`/region/${regionId}/${search}`);
   }

   function searchChange(e: ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      const searchContent = e.target.value;
      setSearch(searchContent);
      navigate(`/region/${region}/${searchContent}`);
   }

   useEffect(() => {
      const regionvalidada = regionid === undefined ? "all" : regionid;
      const searchValida = searchcontent === undefined ? "" : searchcontent;

      setRegion(regionvalidada);
      setSearch(searchValida);
   }, [regionid, searchcontent]);

   return (
      <>
         <div className="filter-body container">
            <div className="filter-container container-max">
               <form onSubmit={filterSubmit} className="form-container">
                  <div className="form-container-search">
                     <SearchRoundedIcon className="form-container-search-icon" />
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
         <Grid searchValue={search} peticion={region} />
      </>
   );
};
