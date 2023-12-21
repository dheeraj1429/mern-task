import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormStateInterface } from '.';
import { getAllCountries, postUserInformationHandler } from '../../state/features/userInformation/userInformation.actions';
import {
   getCountriesLoadingSelector,
   getCountriesSelector,
   postUserInformationErrorSelector,
   postUserInformationSelector,
   postUserInformationLoadingSelector,
} from '../../state/features/userInformation/userInformation.selector';
import { useAppDispatch, useAppSelector } from '../../state/store/hooks';
import { FormContainer, HomePageContainer } from './Home.style';
import { useSelector } from 'react-redux';

const schema = yup.object({
   firstName: yup
      .string()
      .required()
      .typeError('First name is required')
      .matches(/^[a-zA-Z ]+$/, 'First name must contain only alphabets'),
   lastName: yup
      .string()
      .required()
      .typeError('Last name is required')
      .matches(/^[a-zA-Z ]+$/, 'Last name must contain only alphabets'),
   email: yup.string().email().required().typeError('Email is required'),
   country: yup.string().required().typeError('Country is required'),
   state: yup.string().required().typeError('State is required'),
   city: yup.string().required().typeError('City is required'),
   dob: yup.string().required().typeError('Dob is required'),
   age: yup.number().required().typeError('Age is required').min(14).max(99),
   gender: yup.string().required().typeError('Gender is required'),
});

function Home() {
   const {
      control,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm<FormStateInterface>({
      resolver: yupResolver(schema),
   });
   const dispatch = useAppDispatch();

   const getCountriesLoading = useAppSelector(getCountriesLoadingSelector);
   const getCountries = useAppSelector(getCountriesSelector);
   const postUserInformationError = useAppSelector(postUserInformationErrorSelector);
   const postUserInformationLoading = useAppSelector(postUserInformationLoadingSelector);
   const postUserInformation = useSelector(postUserInformationSelector);

   const submitHandler = function (data: FormStateInterface) {
      dispatch(postUserInformationHandler(data));
   };

   const dateChangeHandler = function (onChange: any, event: dayjs.Dayjs | null) {
      if (event) {
         var currentYear = new Date().getFullYear();
         const birthYear = new Date(event.toISOString()).getFullYear();
         const age = currentYear - birthYear;
         setValue('age', age);
         onChange(event);
      }
   };

   useEffect(() => {
      dispatch(getAllCountries());
   }, []);

   return (
      <HomePageContainer>
         <FormContainer>
            <Box onSubmit={handleSubmit(submitHandler)} component="form" sx={{ '& > :not(style)': { my: 1, width: '100%' } }}>
               <Controller
                  name="firstName"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <TextField onChange={onChange} value={value || ''} label="First Name" variant="outlined" type="text" />
                  )}
               />
               {!!errors.firstName?.message ? <FormHelperText error>{errors.firstName.message}</FormHelperText> : null}
               <Controller
                  name="lastName"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <TextField onChange={onChange} value={value || ''} label="Last Name" variant="outlined" type="text" />
                  )}
               />
               {!!errors.lastName?.message ? <FormHelperText error>{errors.lastName.message}</FormHelperText> : null}
               <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <TextField onChange={onChange} value={value || ''} label="E-Mail" variant="outlined" type="email" />
                  )}
               />
               {!!errors.email?.message ? <FormHelperText error>{errors.email.message}</FormHelperText> : null}
               {getCountriesLoading ? <CircularProgress size={'20px'} /> : null}
               {!!getCountries && getCountries?.data.length ? (
                  <Controller
                     name="country"
                     control={control}
                     render={({ field: { onChange, value } }) => (
                        <TextField onChange={onChange} value={value || ''} select label="Country">
                           {getCountries.data.map((option) => (
                              <MenuItem key={option.country} value={option.country}>
                                 {option.country}
                              </MenuItem>
                           ))}
                        </TextField>
                     )}
                  />
               ) : !getCountriesLoading ? (
                  <FormHelperText error>Opps! there is not country right now</FormHelperText>
               ) : null}
               <Controller
                  name="state"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <TextField onChange={onChange} value={value || ''} label="State" variant="outlined" type="text" />
                  )}
               />
               {!!errors.state?.message ? <FormHelperText error>{errors.state.message}</FormHelperText> : null}
               <Controller
                  name="city"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <TextField onChange={onChange} value={value || ''} label="City" variant="outlined" type="text" />
                  )}
               />
               {!!errors.city?.message ? <FormHelperText error>{errors.city.message}</FormHelperText> : null}
               <FormLabel>Please selected you gender</FormLabel>
               <Controller
                  name="gender"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <FormControl>
                        <RadioGroup
                           value={value || ''}
                           onChange={onChange}
                           aria-labelledby="demo-radio-buttons-group-label"
                           defaultValue="female"
                           name="radio-buttons-group"
                        >
                           <FormControlLabel value="female" control={<Radio />} label="Female" />
                           <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                     </FormControl>
                  )}
               />
               {!!errors.gender?.message ? <FormHelperText error>{errors.gender.message}</FormHelperText> : null}
               <Controller
                  name="dob"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label="Date of birth">
                           <MobileDatePicker
                              onChange={(event) => dateChangeHandler(onChange, event)}
                              value={!!value ? dayjs(value) : dayjs(Date())}
                           />
                        </DemoItem>
                     </LocalizationProvider>
                  )}
               />
               {!!errors.dob?.message ? <FormHelperText error>{errors.dob.message}</FormHelperText> : null}
               <Controller
                  name="age"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <TextField disabled onChange={onChange} value={value || ''} label="Age" variant="outlined" />
                  )}
               />
               {!!errors.age?.message ? <FormHelperText error>{errors.age.message}</FormHelperText> : null}
               {postUserInformationLoading ? (
                  <p>Loading....</p>
               ) : (
                  <Button type="submit" variant="contained" color="success">
                     Save
                  </Button>
               )}
               {postUserInformationError && postUserInformationError?.message ? (
                  <FormHelperText error>{postUserInformationError?.message}</FormHelperText>
               ) : null}
               {postUserInformation && postUserInformation?.message ? <p>{postUserInformation?.message}</p> : null}
            </Box>
         </FormContainer>
      </HomePageContainer>
   );
}

export default Home;
