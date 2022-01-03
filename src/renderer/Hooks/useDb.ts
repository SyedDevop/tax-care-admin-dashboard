import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  orderBy,
} from 'firebase/firestore';

import { ExistingUserOrder, NewUserOrder } from '../Type';

const useDb = () => {
  const db = getFirestore();

  const orderById = async (userId: string) => {
    const queryRef = query(
      collection(db, 'existingUserOrder'),
      where('userId', '==', userId),
      orderBy('issuedDate')
    );
    return getDocs(queryRef);
  };

  const addExistingUserOrder = (data: ExistingUserOrder) => {
    const uploadDate = { ...data, issuedDate: serverTimestamp() };
    return addDoc(collection(db, 'existingUserOrder'), uploadDate);
  };

  const addNewUserOrder = (data: NewUserOrder) => {
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

  return { orderById, addExistingUserOrder, addNewUserOrder, orderExist };
};

export default useDb;
