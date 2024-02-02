import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentInitiationData, setPaymentInitiationData] = useState(null);

    const handlePaymentInitiation = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:10000/api/payments/initiate', { name, email, phone, amount });
            setPaymentInitiationData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error initiating payment:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handlePaymentInitiation}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
                <button type="submit" disabled={loading}>Initiate Payment</button>
            </form>
            {paymentInitiationData && (
                <div>
                    <p>Proceed with payment below:</p>
                    <iframe src={paymentInitiationData.paymentInitiationUrl} title="Paystack Checkout" width="100%" height="500px" />
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
