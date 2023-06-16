import PaymentEntity from './PaymentEntity.js';

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
}

export default PaymentRepository;
