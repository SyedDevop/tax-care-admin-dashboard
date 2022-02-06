/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { v4 as uuid } from 'uuid';

function uuidGenerator(): string {
  return uuid().substring(0, 10).toUpperCase().replace('-', '');
}

/**
 * This function takes an object and check if any of the passed value matches in the Object.
 * @param obj Object to check in.
 * @param v value to compare against the Object.
 * @returns Boolean
 */
function isAny<T>(obj: Record<string, T>, v: T): boolean {
  return Object.values(obj).some((item) => item === v);
}

/**
 * This function takes an object and check if all Object properties match in the Object.
 * @param obj Object to check in.
 * @param v value to compare against the Object.
 * @returns Boolean
 */
function isAll<T>(obj: Record<string, T>, v: T): boolean {
  return Object.values(obj).every((item) => item === v);
}

function formatTimestamp(time: Date) {
  return time.toUTCString().split(' ').slice(1, 4).join(' ');
}

export const numberToCurrency = (number: number): string => {
  return `Rs ${number.toLocaleString('en-IN', { maximumFractionDigits: 2 })}/-`;
};

function isObjectEmpty<T>(object: Record<string, T>): boolean {
  for (const property in object) {
    // if any enumerable property is found object is not empty
    return false;
  }

  return true;
}

// eslint-disable-next-line import/prefer-default-export
export { isAny, isAll, formatTimestamp, isObjectEmpty, uuidGenerator };
