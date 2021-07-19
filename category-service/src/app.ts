import express, { Request, Response } from 'express';
import 'express-async-errors';

import { errorHandler, NotFoundError } from '@slcdemogallery/common';
import { indexCategoryRouter } from './routes/index';
import { createCategoryRouter } from './routes/create';
import { updateCategoryRouter } from './routes/update';
import { deleteCategoryRouter } from './routes/delete';

const app = express();
app.use(express.json());

app.use(indexCategoryRouter);
app.use(createCategoryRouter);
app.use(updateCategoryRouter);
app.use(deleteCategoryRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };