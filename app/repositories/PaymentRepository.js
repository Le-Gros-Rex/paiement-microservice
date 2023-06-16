import PaymentEntity from './PaymentEntity.js';
import mongoose from 'mongoose';

class PaymentRepository {
    async findAll() {
        try {
            return await PaymentEntity.find();
        } catch (error) {
            throw error;
        }
    }

    async findById(paymentId) {
        try {
            return await PaymentEntity.findById(paymentId);
        } catch (error) {
            throw error;
        }
    }

    async create(reservationId, filmId, amount) {
        const payment = new PaymentEntity({
            _id: new mongoose.Types.ObjectId(), // Générer un nouvel identifiant
            reservationId: reservationId,
            filmId: filmId,
            amount: amount
        });
        return payment.save();
    }
}

export default PaymentRepository;
