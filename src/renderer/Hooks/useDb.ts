import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  orderBy,
  connectFirestoreEmulator,
  onSnapshot,
} from 'firebase/firestore';

import { UserOrderData } from '../Types';

const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 9999);
const useDb = () => {
  const orderById = async (userId: string) => {
    const queryRef = query(
      collection(db, 'existingUserOrder'),
      where('userId', '==', userId),
      orderBy('issuedDate')
    );
    return getDocs(queryRef);
  };

  const addExistingUserOrder = (data: UserOrderData) => {
    const uploadDate = { ...data, issuedDate: serverTimestamp() };
    return addDoc(collection(db, 'existingUserOrder'), uploadDate);
  };

  const addNewUserOrder = (data: UserOrderData) => {
    const uploadDate = { ...data, issuedDate: serverTimestamp() };
    return addDoc(collection(db, 'newUserOrder'), uploadDate);
  };

  const orderExist = async (filed: string, userId: string) => {
    let exists = false;
    const queryRef = query(
      collection(db, 'existingUserOrder'),
      where('userId', '==', userId),
      where('tag', '==', filed)
    );
    await getDocs(queryRef).then((data) => {
      data.forEach((result) => {
        exists = result.exists();
      });
      return exists;
    });
    return exists;
  };

  const getALlDoc = async (collationName: string) => {
    const queryRef = query(collection(db, collationName));
    return getDocs(queryRef);
  };

  const getQueryReference = (collationName: string) => {
    return query(collection(db, collationName), orderBy('issuedDate', 'desc'));
  };

  return {
    orderById,
    addExistingUserOrder,
    addNewUserOrder,
    orderExist,
    getALlDoc,
    getQueryReference,
    onSnapshot,
  };
};

export default useDb;
