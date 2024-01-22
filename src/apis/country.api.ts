import axios from "axios";
import { FindCodesDto } from "../dtos/responses/FindCodes.dto";
import { GlobalConfig } from "../configs/global.config";
import { CountriesDto } from "../dtos/responses/FindCodeCountry.dto";
import { RegionDto } from "../dtos/responses/AllRegion.dto";

export class CountryApi {
   async findCodesCountry(codesCountries: string): Promise<FindCodesDto[]> {
      try {
         const config = {
            headers: {
               "Content-Type": "application/json",
            },
         };

         const response = await axios.get(
            `${GlobalConfig.url_api}/alpha?codes=${codesCountries}`,
            config
         );
         return response.data;
      } catch (error: any) {
         return Promise.reject(error);
      }
   }

   async findCodeCountry(codeCountry: string): Promise<CountriesDto[]> {
      try {
         const config = {
            headers: {
               "Content-Type": "application/json",
            },
         };

         const response = await axios.get(
            `${GlobalConfig.url_api}/alpha/${codeCountry}`,
            config
         );
         return response.data;
      } catch (error: any) {
         return Promise.reject(error);
      }
   }

   async findRegion(region: string): Promise<RegionDto[]> {
      try {
         const config = {
            headers: {
               "Content-Type": "application/json",
            },
         };
         const response = await axios.get(
            `${GlobalConfig.url_api}/region/${region}`,
            config
         );
         return response.data;
      } catch (error: any) {
         return Promise.reject(error);
      }
   }

   async allRegion(): Promise<RegionDto[]> {
      try {
         const config = {
            headers: {
               "Content-Type": "application/json",
            },
         };

         const response = await axios.get(
            `${GlobalConfig.url_api}/all`,
            config
         );
         return response.data;
      } catch (error: any) {
         return Promise.reject(error);
      }
   }
}
