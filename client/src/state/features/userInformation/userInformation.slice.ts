import { createSlice } from '@reduxjs/toolkit';
import { getAllCountries, postUserInformationHandler, getAccountInformation } from './userInformation.actions';
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
         });
   },
});

export default userInformation;
