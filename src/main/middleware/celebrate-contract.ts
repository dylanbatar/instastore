import { celebrate } from 'celebrate';

const SCHEMA_OPTIONS = {
  abortEarly: true,
  allowUnknow: false
};

export const validateContract = (contract: any) => {
  return celebrate(contract, SCHEMA_OPTIONS);
};
