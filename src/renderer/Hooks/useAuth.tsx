import { useState, useEffect, useContext, createContext, FC } from 'react';
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  User,
  updatePassword,
  CustomParameters,
} from 'firebase/auth';
import firebaseConfig from '../../../firebase-config.json';

export const app = initializeApp(firebaseConfig);

export interface AuthContextValue {
  user: User | null;
  isAuthenticating: boolean;
  createUser: (email: string, password: string) => Promise<boolean>;
  signInUser: (email: string, password: string) => Promise<boolean>;
  signOutUser: () => void;
  updateUserPassword: (password: string) => Promise<void> | undefined;
  userPasswordResetEmail: (email: string) => Promise<void>;
  emailVerification: () => { message: string; value: boolean } | undefined;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provide hook that creates auth object and handles state.
export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const auth = getAuth();

  /**
   * @type {Function} - Create a new user with email and password.
   * @param {string} email - Email of the user to be created.
   * @param {string} password - Password for the user to be created.
   * @return {Promise} Boolean - Returns true if the user was successfully created.
   * */
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };

  /**
   * @type {Function} - SignIn existing user with email and password.
   * @param {string} email - Email of the user to be signed in.
   * @param {string} password - Password for the user to be signed in.
   * @return {promise} Boolean - Returns true if the user is successfully Authenticated and signed in.
   * */
  const signInUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        setUser(userCredentials.user);
        return true;
      }
    );
  };

  /**
   * @type {Function} - SignOut current user.
   * @return {Void} This is the result.
   * */
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        return setUser(null);
      })
      .catch((e) => console.log(e));
  };

  // eslint-disable-next-line consistent-return
  const updateUserPassword = (password: string) => {
    const { currentUser } = auth;
    if (currentUser) {
      return updatePassword(currentUser, password);
    }
  };

  const userPasswordResetEmail = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };
  // const addAdminPrivilege = () => {
  //   return
  // }
  // eslint-disable-next-line consistent-return
  const emailVerification = () => {
    if (!user) {
      return { message: 'User have not logged in.', value: false };
    }
    sendEmailVerification(user)
      .then(() => {
        return { message: 'User has been verified.', value: false };
      })
      .catch((error) => {
        return { message: error, value: false };
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setIsAuthenticating(false);
    });
    // Cleanup subscription on unmount
    return unsubscribe();
  }, [auth]);

  const values = {
    user,
    isAuthenticating,
    createUser,
    signInUser,
    signOutUser,
    updateUserPassword,
    userPasswordResetEmail,
    emailVerification,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
