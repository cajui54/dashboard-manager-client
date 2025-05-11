export const checkIfThereOnlyNumbers = (value: string): boolean => {
  return value.split('').every((_value) => Number.isFinite(Number(_value)));
};
