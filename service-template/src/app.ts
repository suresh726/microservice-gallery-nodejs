import express, { Request, Response } from 'express';
import 'express-async-errors';

import { errorHandler } from '@slcdemogallery/common';
import { indexRouter } from './routes';

const app = express();
app.use(express.json());

app.use(indexRouter);


app.use(errorHandler);

export { app };