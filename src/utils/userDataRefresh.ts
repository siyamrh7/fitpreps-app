import { baseUrl } from '../constants/baseConstant';
import { store } from '../store';
import { clearUser, setUser } from '../store/auth/userSlice';

/**
 * Manually refresh user data using the stored token
 * This can be called when the app comes back to foreground or when user data needs to be refreshed
 */
export const refreshUserData = async () => {
  const state = store.getState();
  const { user } = state.user;
  
  if (!user?.token) {
    console.log('No token available for user data refresh');
    return;
  }

  try {
    const response = await fetch(`${baseUrl}/api/users/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.log('Token expired, clearing user data');
        store.dispatch(clearUser());
        return;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    // Update the user data in Redux store
    store.dispatch(setUser({
      ...user,
      user: data,
      metadata: data.metadata,
      points: data.points,
    }));
    
    console.log('User data refreshed successfully');
    return data;
  } catch (error) {
    console.error('Failed to refresh user data:', error);
    throw error;
  }
};
