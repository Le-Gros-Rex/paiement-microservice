import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reservationId: String,
    filmId: String,
    amount: Number,
});

const PaymentEntity = mongoose.model('Payment', paymentSchema);

export default PaymentEntity;
