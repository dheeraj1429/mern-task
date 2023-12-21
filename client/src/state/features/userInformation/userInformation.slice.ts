import { createSlice } from '@reduxjs/toolkit';
import {
   getAllCountries,
   postUserInformationHandler,
   getAccountInformation,
   getStateByCountries,
   getCityByCountries,
} from './userInformation.actions';
import { InitialStateInterface } from '.';

const INITIALSTATE: InitialStateInterface = {
   getCountries: null,
   getCountriesLoading: false,
   getCountriesError: null,
   postUserInformation: null,
   postUserInformationLoading: false,
   postUserInformationError: null,
   allUsers: null,
   allUsersLoading: false,
   allUsersError: null,
   stateByCountries: null,
   stateByCountriesLoading: false,
   stateByCountriesError: null,
   cityByCountries: null,
   cityByCountriesLoading: false,
   cityByCountriesError: null,
};

const userInformation = createSlice({
   name: 'userInformation',
   initialState: INITIALSTATE,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllCountries.pending, (state) => {
            state.getCountries = null;
            state.getCountriesLoading = true;
            state.getCountriesError = null;
         })
         .addCase(getAllCountries.rejected, (state, action) => {
            state.getCountries = null;
            state.getCountriesLoading = false;
            state.getCountriesError = action.payload;
         })
         .addCase(getAllCountries.fulfilled, (state, action) => {
            state.getCountries = action.payload;
            state.getCountriesLoading = false;
            state.getCountriesError = null;
         })
         .addCase(postUserInformationHandler.pending, (state) => {
            state.postUserInformation = null;
            state.postUserInformationLoading = true;
            state.postUserInformationError = null;
         })
         .addCase(postUserInformationHandler.rejected, (state, action) => {
            state.postUserInformation = null;
            state.postUserInformationLoading = false;
            state.postUserInformationError = action.payload;
         })
         .addCase(postUserInformationHandler.fulfilled, (state, action) => {
            state.postUserInformation = action.payload;
            state.postUserInformationLoading = false;
            state.postUserInformationError = null;
         })
         .addCase(getAccountInformation.pending, (state) => {
            state.allUsers = null;
            state.allUsersLoading = true;
            state.allUsersError = null;
         })
         .addCase(getAccountInformation.rejected, (state, action) => {
            state.allUsers = null;
            state.allUsersLoading = false;
            state.allUsersError = action.payload;
         })
         .addCase(getAccountInformation.fulfilled, (state, action) => {
            state.allUsers = action.payload;
            state.allUsersLoading = false;
            state.allUsersError = null;
         })
         .addCase(getStateByCountries.pending, (state) => {
            state.stateByCountries = null;
            state.stateByCountriesLoading = true;
            state.stateByCountriesError = null;
         })
         .addCase(getStateByCountries.rejected, (state, action) => {
            state.stateByCountries = null;
            state.stateByCountriesLoading = false;
            state.stateByCountriesError = action.payload;
         })
         .addCase(getStateByCountries.fulfilled, (state, action) => {
            state.stateByCountries = action.payload;
            state.stateByCountriesLoading = false;
            state.stateByCountriesError = null;
         })
         .addCase(getCityByCountries.pending, (state) => {
            state.cityByCountries = null;
            state.cityByCountriesLoading = true;
            state.cityByCountriesError = null;
         })
         .addCase(getCityByCountries.rejected, (state, action) => {
            state.cityByCountries = null;
            state.cityByCountriesLoading = false;
            state.cityByCountriesError = action.payload;
         })
         .addCase(getCityByCountries.fulfilled, (state, action) => {
            state.cityByCountries = action.payload;
            state.cityByCountriesLoading = false;
            state.cityByCountriesError = null;
         });
   },
});

export default userInformation;
