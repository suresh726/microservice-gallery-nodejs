import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {

  res.send({ foo: 'bar'});
});

export { router as indexRouter };