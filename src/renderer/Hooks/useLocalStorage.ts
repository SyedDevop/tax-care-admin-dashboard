import React, { useState, useEffect } from 'react';

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

const useLocalStorage = <T>(key: string, initialValue?: T): ReturnType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : initialValue;
    } catch (err) {
      console.warn(`Error reading localStorage key “${key}”:`, err);
      return initialValue;
    }
  });
  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (e) {
        console.error(e);
      }
    }
  }, [state, key]);
  return [state, setState];
};
export default useLocalStorage;
