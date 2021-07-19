import express, { Request, Response } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import cors from 'cors';
import { errorHandler, NotAuthorizedError, NotFoundError, requireAuth } from '@slcdemogallery/common';
import { categoryServiceProxy } from './proxies/category-service-proxy';
import { userServiceProxy } from './proxies/user-service-proxy';
import { imageServiceProxy } from './proxies/images-service-proxy';
import { categoryServiceAdminProxy } from './proxies/category-service-admin-proxy';

const app = express();

app.use(cors());

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

// app.use('/api/admin/categories', requireAuth, categoryServiceAdminProxy);
app.use('/api/admin/categories', categoryServiceAdminProxy);
app.use('/api/categories',categoryServiceProxy);
app.use('/api/users', userServiceProxy);
app.use('/api/image-list/*', imageServiceProxy);
app.use('/api/image-detail/*', imageServiceProxy);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };

