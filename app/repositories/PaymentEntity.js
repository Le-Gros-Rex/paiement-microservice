import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reservationId: mongoose.Schema.Types.ObjectId,
    filmId: mongoose.Schema.Types.ObjectId,
    amount: Number,
});

const PaymentEntity = mongoose.model('Payment', paymentSchema);

export default PaymentEntity;
