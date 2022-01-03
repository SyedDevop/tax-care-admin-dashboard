import {
  httpsCallable,
  getFunctions,
  connectFunctionsEmulator,
} from 'firebase/functions';
import { getApp } from 'firebase/app';

// interface FirebaseFunctions {
//   addAdminPrivilege: HttpsCallable<Functions, string>;
// }

const useFirebaseFunction = () => {
  const firebaseFunctions = getFunctions(getApp());
  // eslint-disable-next-line no-restricted-globals
  connectFunctionsEmulator(firebaseFunctions, 'localhost', 5001);
  const addAdminPrivilege = httpsCallable(firebaseFunctions, 'addAdminClaims');
  const isDiscount = httpsCallable(firebaseFunctions, 'isDiscount');

  return { addAdminPrivilege, isDiscount };
};
export default useFirebaseFunction;
