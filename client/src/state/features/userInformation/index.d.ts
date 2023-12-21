import { ApiResponseInterface, ErrorType } from '../../../shared/types';

export interface CountriesInterface {
   id: number;
   name: string;
   iso2: string;
}
export type GetCountriesType = Array<CountriesInterface>;
export interface PostUserInformationResponse extends ApiResponseInterface {}
export type GetAllUsersType = Array<{
   _id: string;
   firstName: string;
   lastName: string;
   email: string;
   country: string;
   state: string;
   city: string;
   dob: string;
   age: number;
   gender: string;
}>;
export type GetStateByCountriesType = Array<CountriesInterface>;
export type getCityByCountriesType = Array<{ id: number; name: string }>;
export interface InitialStateInterface {
   getCountries: GetCountriesType | null | undefined;
   getCountriesLoading: boolean;
   getCountriesError: ErrorType;
   postUserInformation: PostUserInformationResponse | null;
   postUserInformationLoading: boolean;
   postUserInformationError: ErrorType;
   allUsers: GetAllUsersType | null;
   allUsersLoading: boolean;
   allUsersError: ErrorType;
   stateByCountries: GetStateByCountriesType | null;
   stateByCountriesLoading: boolean;
   stateByCountriesError: ErrorType;
   cityByCountries: getCityByCountriesType | null;
   cityByCountriesLoading: boolean;
   cityByCountriesError: ErrorType;
}
