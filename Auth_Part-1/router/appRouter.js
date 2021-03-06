import express from 'express';
import { 
  logIn,
  signUp
} from '../controllers/appController';

const router = express.Router();

router
  .route('/login')
    .post(logIn);

router
  .route('/signup')
    .post(signUp);

export default router;  