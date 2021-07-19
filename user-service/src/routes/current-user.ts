import express, {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/api/users/currentuser', async (req: Request, res: Response) => {
  try {
      const payload = jwt.verify(req!.session!.jwt, process.env.JWT_KEY!);
      res.send(payload);
    } catch (err) {
      res.status(200).send({success: false});
    };
});

export { router as currentUserRouter };
