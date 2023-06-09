import * as dotenv from 'dotenv';
import express from 'express';
import PaymentController from './app/controllers/PaymentController.js';
import mongoose from 'mongoose';
import authMiddleware from './app/middleware/authMiddleware.js';

dotenv.config();
const app = express();
const paymentController = new PaymentController();

app.use(express.json());

async function main() {
  await mongoose.connect(process.env.DB_URI);
  console.log('Connected to the database');
}

app.get('/payments', authMiddleware ,paymentController.getPayments.bind(paymentController));
app.get('/payments/:id', authMiddleware ,paymentController.getPayment.bind(paymentController));
app.post('/payments', authMiddleware ,paymentController.createPayment.bind(paymentController));

app.listen(3000, async () => {
  try {
    await main();
    console.log('Server running on port 3000');
  } catch (error) {
    console.error('Error starting the server:', error);
  }
});
