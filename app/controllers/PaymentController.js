import axios from 'axios';
import PaymentService from '../services/PaymentService.js';

class PaymentController {
    constructor() {
        this.paymentService = new PaymentService();
    }

    async getPayments(request, response) {
        try {
            const payments = await this.paymentService.getPayments();
            response.status(200).json(payments);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }

    async getPayment(request, response) {
        const paymentId = request.params.id;

        try {
            const payment = await this.paymentService.getPayment(paymentId);
            response.status(200).json(payment);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }

    async createPayment(request, response) {
        const { reservationId, filmId, amount } = request.body;

        try {
            const payment = await this.paymentService.createPayment(reservationId, filmId, amount);
            response.status(201).json(payment);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }
}

export default PaymentController;
