import express from 'express';
import service from '../service';

const router = express.Router();

router.get('/user-profile', async (req, res, next) => {
  res.send(await service.user.userProfile(req.headers));
});

router.get('/token', async (req, res, next) => {
  res.send(await service.user.token(req.headers));
});

export default router;
