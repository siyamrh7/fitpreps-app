import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useFetchUserDataMutation } from '../store/apiSlices/auth/userSlice';
import { setUser, clearUser } from '../store/auth/userSlice';

export const useUserInitialization = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const [fetchUserData, { isLoading, error }] = useFetchUserDataMutation();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeUser = async () => {
      // Check if user has a token but no complete user data
      if (user?.token && !user?.user) {
        try {
          console.log('Fetching user data with existing token...');
          const response = await fetchUserData(user.token).unwrap();
          
          // Update the user data in Redux store
          dispatch(setUser({
            ...user,
            user: response.user,
            metadata: response.metadata,
            points: response.points,
            subscription: response.subscription
          }));
          
          console.log('User data fetched and updated successfully');
        } catch (error: any) {
          console.log('Failed to fetch user data:', error);
          
          // Check if it's an authentication error
          if (error?.data?.message === 'Invalid Token' || error?.status === 401) {
            console.log('Token is invalid, clearing user data');
            dispatch(clearUser());
          }
        }
      }
      
      setIsInitialized(true);
    };

    initializeUser();
  }, []);

  return { isLoading, error, isInitialized };
};
