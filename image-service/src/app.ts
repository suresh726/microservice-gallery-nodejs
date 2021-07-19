import express, { Request, Response } from 'express';
import 'express-async-errors';

import { errorHandler, NotFoundError } from '@slcdemogallery/common';
import { indexImageRouter } from './routes/index';

const app = express();
app.use(express.json());

app.use(indexImageRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };