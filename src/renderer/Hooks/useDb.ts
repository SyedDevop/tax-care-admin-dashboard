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
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { UserOrderData } from '../Types';

const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8081);
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

  const putDoc = <T>(data: Record<string, T>, id: string) => {
    return updateDoc(doc(db, 'orders', id), data);
  };

  const postDoc = <T>(collationName: string, data: Record<string, T>) => {
    return addDoc(collection(db, collationName), data);
  };

  const deleteDocument = (id: string, collationName: string) => {
    return deleteDoc(doc(db, collationName, id));
  };

  return {
    orderById,
    addExistingUserOrder,
    addNewUserOrder,
    orderExist,
    getALlDoc,
    getQueryReference,
    onSnapshot,
    putDoc,
    deleteDocument,
    postDoc,
  };
};

export default useDb;
