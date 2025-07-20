

import express from 'express';
import { createBill, getBills } from '../controllers/billsController.js';

const router = express.Router();

router.post('/create', createBill);

export default router;