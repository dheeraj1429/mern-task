import { ApiResponseInterface, ErrorType } from '../../../shared/types';

export interface CountriesInterface {
   iso2: string;
   iso3: string;
   country: string;
}
export interface GetCountriesInterface {
   error: boolean;
   msg: string;
   data: CountriesInterface[];
}
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
export interface InitialStateInterface {
   getCountries: GetCountriesInterface | null | undefined;
   getCountriesLoading: boolean;
   getCountriesError: ErrorType;
   postUserInformation: PostUserInformationResponse | null;
   postUserInformationLoading: boolean;
   postUserInformationError: ErrorType;
   allUsers: GetAllUsersType | null;
   allUsersLoading: boolean;
   allUsersError: ErrorType;
}
