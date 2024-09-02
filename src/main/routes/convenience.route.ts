import { Router } from 'express';
import { adapterRouterJson } from '../adapters/express-adapter';
import { validateContract } from '../middleware/celebrate-contract';
import { getConvencienceValidation, registerConvenienceValidation } from '../validations/convenience';
import { makeGetConvenienceController, makeRegisterConvenienceController } from '../factories/convenience';

const router = Router();

router.post('/registry', validateContract(registerConvenienceValidation), adapterRouterJson(makeRegisterConvenienceController()));
router.post('/close-convenience', validateContract(getConvencienceValidation), adapterRouterJson(makeGetConvenienceController()));

export default router;
