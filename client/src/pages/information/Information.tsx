import { useEffect } from 'react';
import { getAccountInformation } from '../../state/features/userInformation/userInformation.actions';
import { allUsersLoadingSelector, allUsersSelector } from '../../state/features/userInformation/userInformation.selector';
import { useAppDispatch, useAppSelector } from '../../state/store/hooks';
import CircularProgress from '@mui/material/CircularProgress';

function Information() {
   const allUsers = useAppSelector(allUsersSelector);
   const allUsersLoading = useAppSelector(allUsersLoadingSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getAccountInformation());
   }, []);

   return (
      <div>
         {allUsersLoading ? <CircularProgress /> : null}
         {!!allUsers && allUsers.length ? (
            <div>
               {allUsers.map((item) => (
                  <div style={{ marginTop: '2rem' }}>
                     <p>{item.firstName}</p>
                     <p>{item.lastName}</p>
                     <p>{item.age}</p>
                     <p>{item.city}</p>
                     <p>{item.country}</p>
                     <p>{item.dob}</p>
                     <p>{item.email}</p>
                     <p>{item.gender}</p>
                     <p>{item.state}</p>
                  </div>
               ))}
            </div>
         ) : (
            <p>Oops there is no users</p>
         )}
      </div>
   );
}

export default Information;
