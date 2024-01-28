export interface CountriesDto {
   cca2: string;
   flags: {
      svg: string;
   };
   name: {
      nativeName: NativeNameDto;
      common: string;
   };
   population: number;
   region: string;
   subregion: string;
   capital: string;
   tld: string;
   currencies: CurrencieDto;
   languages: LanguageDto;
   borders: any;
}

interface NativeNameDto {
   common: string;
   nativeName: string;
}

interface CurrencieDto {
   name: string;
}
interface LanguageDto {
   name: string;
}
