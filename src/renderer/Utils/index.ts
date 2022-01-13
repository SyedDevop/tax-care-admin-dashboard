/**
 * This function takes an object and check if any of the passed value matches in the Object.
 * @param obj Object to check in.
 * @param v value to compare against the Object.
 * @returns Boolean
 */
function isAny<T>(obj: Record<string, T>, v: T): boolean {
  return Object.values(obj).some((item) => item === v);
}

// eslint-disable-next-line import/prefer-default-export
export { isAny };
