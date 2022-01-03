import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useAuth } from './useAuth';

const useFirebaseStore = () => {
  const { user } = useAuth();
  const storage = getStorage();

  const uploadFiles = (file: any) => {
    const { name } = file;
    const path = user?.uid || 'no user';
    const date = new Date().toLocaleDateString().replaceAll('/', '-');
    const storageRef = ref(storage, `${path}/${date}/${name}`);
    return uploadBytesResumable(storageRef, file);
  };
  return { uploadFiles };
};

export default useFirebaseStore;
