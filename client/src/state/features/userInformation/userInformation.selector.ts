import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store/store';

const userInformationReducer = (state: AppState) => state.userInformation;

export const getCountriesLoadingSelector = createSelector(
   [userInformationReducer],
   (userInformationSlice) => userInformationSlice.getCountriesLoading,
);
export const getCountriesErrorSelector = createSelector([userInformationReducer], (userInformationSlice) => userInformationSlice.getCountriesError);
export const getCountriesSelector = createSelector([userInformationReducer], (userInformationSlice) => userInformationSlice.getCountries);
export const postUserInformationLoadingSelector = createSelector(
   [userInformationReducer],
   (userInformationSlice) => userInformationSlice.postUserInformationLoading,
);
export const postUserInformationErrorSelector = createSelector(
   [userInformationReducer],
   (userInformationSlice) => userInformationSlice.postUserInformationError,
);
export const postUserInformationSelector = createSelector(
   [userInformationReducer],
   (userInformationSlice) => userInformationSlice.postUserInformation,
);
export const allUsersSelector = createSelector([userInformationReducer], (userInformationSlice) => userInformationSlice.allUsers);
export const allUsersLoadingSelector = createSelector([userInformationReducer], (userInformationSlice) => userInformationSlice.allUsersLoading);
export const stateByCountriesSelector = createSelector([userInformationReducer], (userInformationSlice) => userInformationSlice.stateByCountries);
export const stateByCountriesLoadingSelector = createSelector(
   [userInformationReducer],
   (userInformationSlice) => userInformationSlice.stateByCountriesLoading,
);
export const cityByCountriesSelector = createSelector([userInformationReducer], (userInformationSlice) => userInformationSlice.cityByCountries);
export const cityByCountriesLoadingSelector = createSelector(
   [userInformationReducer],
   (userInformationSlice) => userInformationSlice.cityByCountriesLoading,
);
