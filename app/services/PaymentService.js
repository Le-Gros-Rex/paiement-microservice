import PaymentRepository from '../repositories/PaymentRepository.js';

class PaymentService {
    constructor() {
        this.paymentRepository = new PaymentRepository();
    }

    async getPayments() {
        try {
            return await this.paymentRepository.findAll();
        } catch (error) {
            throw error;
        }
    }

    async getPayment(paymentId) {
        try {
            return await this.paymentRepository.findById(paymentId);
        } catch (error) {
            throw error;
        }
    }

    async createPayment(reservationId, filmId, amount) {
        try {
            return await this.paymentRepository.create(reservationId, filmId, amount);
        } catch (error) {
            throw error;
        }
    }
}

export default PaymentService;
