import { createContext, FC, useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

import { userService } from '../services/user';
import toast from 'react-hot-toast';

interface AuthProps {
  authState: {
    isAuthenticated: boolean;
    user: {
      id: string;
      fullName: string;
      userName: string;
      email: string;
      dateOfBirth: string;
      presentAddress: string;
      permanentAddress: string;
      city: string;
      postalCode: string;
      country: string;
    } | null;
  };
  appLoading: boolean | undefined;
  isPending: boolean;
  authError: string | undefined;
  updateProfile: (userData: any) => void;
}

export const AuthContext = createContext<Partial<AuthProps>>({});
interface Props {
  children: React.ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  // Queries
  const {
    data,
    isLoading: appLoading,
    isError,
  } = useQuery({
    queryKey: ['getUser'],
    queryFn: () => userService.getUser('1'),
  });

  // mutations
  const { mutate, isPending } = useMutation({
    mutationKey: ['updateUser'],
    mutationFn: (userData: any) => userService.updateUser('1', userData),
    onSuccess: () => {
      toast.success('Profile updated successfully', {
        icon: '👏',
        duration: 3000,
      });
    },
  });

  const updateProfile = useCallback(
    (userData: any) => {
      mutate(userData);
    },
    [mutate],
  );

  const authError = isError
    ? 'Something went wrong. Please try again.'
    : undefined;

  const values = useMemo(() => {
    return {
      authState: {
        isAuthenticated: !!data,
        user: data,
      },
      updateProfile,
      authError,
      appLoading,
      isPending,
    };
  }, [data, updateProfile, authError, appLoading, isPending]);

  return (
    <AuthContext.Provider value={values as AuthProps}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
