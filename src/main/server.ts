import dotenv from 'dotenv';
dotenv.config();

import { syncDatabase } from '../external/repositories/convenienceRepository/config/conection';
import app from './config/app';

app.listen(process.env.PORT, () => {
  syncDatabase().then();
  console.log(`Server running on port ${process.env.PORT}`);
});

export default app;
