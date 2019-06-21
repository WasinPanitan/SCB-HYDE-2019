import express from 'express';
import service from '../service';

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.send(await service.user.findAll());
});

router.get('/:id', async (req, res, next) => {
  res.send(await service.user.findById(req.params.id));
});

router.post('/', async (req, res, next) => {
  res.send(await service.user.create(req.body));
});

router.put('/:id', async (req, res, next) => {
  res.send(await service.user.update(req.params.id, req.body));
});

router.delete('/:id', async (req, res, next) => {
  res.status(204).send(await service.user.delete(req.params.id));
});

export default router;
