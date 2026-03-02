import { singup } from '#controllers/auth.controller.js';
import express from 'express';
const router = express.Router();

router.post('/sign-up', singup);
router.post('sign-in', (req, res) => {
  res.send('signin');
});
router.post('sign-out', (req, res) => {
  res.send('signout');
});

export default router;
