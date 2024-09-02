import { Express, Router, Request, Response } from 'express';

import { convenienceRoute } from '../routes';

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  router.use('/health', (request: Request, response: Response) => {
    response.status(200).json({ status: 'ok' });
  });
  router.use('/convenience', convenienceRoute);
};
