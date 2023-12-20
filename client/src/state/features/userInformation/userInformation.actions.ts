import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorResponseType, KnownError } from '../../../shared/types';
import { GetAllUsersType, GetCountriesInterface, PostUserInformationResponse } from '.';
import { axiosCountryInstance, axiosInstance } from '../../../services/axios.service';
import { FormStateInterface } from '../../../pages/Home';

export const getAllCountries = createAsyncThunk<GetCountriesInterface, void, { rejectValue: KnownError }>(
   'info/GetCountriesInterface',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosCountryInstance.get('/countries');
         return response.data;
      } catch (err) {
         const error: ErrorResponseType = err as any;
         if (!error?.response) {
            throw err;
         }
         return rejectWithValue(error?.response?.data);
      }
   },
);

export const postUserInformationHandler = createAsyncThunk<PostUserInformationResponse, FormStateInterface, { rejectValue: KnownError }>(
   'postUserInformationHandler',
   async (data, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/user/storeUser', data);
         return response.data;
      } catch (err) {
         const error: ErrorResponseType = err as any;
         if (!error.response) {
            throw err;
         }
         return rejectWithValue(error?.response?.data);
      }
   },
);

export const getAccountInformation = createAsyncThunk<GetAllUsersType, void, { rejectValue: KnownError }>(
   'getAccountInformation',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/user/get-all-users');
         return response.data;
      } catch (err) {
         const error: ErrorResponseType = err as any;
         if (!error.response) {
            throw err;
         }
         return rejectWithValue(error?.response?.data);
      }
   },
);
