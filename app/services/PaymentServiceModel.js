class PaymentServiceModel {
    createPayment(id, reservationId, filmId, amount) {
        return {
            id,
            reservationId,
            filmId,
            amount
        };
    }

    formatPayment(payment) {
        const id = payment._id;
        const reservationId = payment.reservationId;
        const filmId = payment.filmId;
        const amount = payment.amount;

        return this.createPayment(id, reservationId, filmId, amount);
    }
}

export default PaymentServiceModel;
