import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ChackoutFrom from './ChackoutFrom';

const stripePromise = loadStripe('pk_test_51Jx3n8HVUqYvgWXvgFsVADE0ScezcUqSWC1QNdqKcJQD3mDOYDaohOHzKf7CzQCht0Sxgm4kmaod1wdTva6iZ7iO00rXeK1qCk');

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`https://damp-falls-66437.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[appointmentId])
    return (
        <div>
            <h2>Pay: {appointment.patientName} for {appointment.serviceName}</h2>
            <h2>price: ${appointment.price}</h2>
            { appointment?.price && <Elements stripe={stripePromise}>
                <ChackoutFrom 
                appointment={appointment}/>
            </Elements>}
        </div>
    );
};

export default Payment;