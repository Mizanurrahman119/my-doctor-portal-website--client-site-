import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const ChackoutFrom = ({appointment}) => {
    const {price, patientName, _id} = appointment;
    const  stripe = useStripe();
    const  elements = useElements();

    const {user} = useAuth();

    // error message 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    // useEffect(() => {
    //   fetch('https://damp-falls-66437.herokuapp.com/create-payment-intent', {
    //     mehtod: 'POST',
    //     headers: {
    //       'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify({price})
    //   })
    //   .then(res => res.json())
    //   .then(data => console.log(data?.clientSecret));
    // },[price]);

    useEffect(() => {
      fetch('https://damp-falls-66437.herokuapp.com/create-payment-intent', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({ price })
      })
          .then(res => res.json())
          .then(data => setClientSecret(data.clientSecret));
  }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null) {
            return;
        }

        setProcessing(true);
        const {error, paymentMethod} = await  stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error) {
            setError(error.message);
            setSuccess('');
        }
        else{
            setError('');
            console.log(paymentMethod);
        }

        // payment intent
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: patientName,
                email: user.email
              },
            },
          },
        );
        if(intentError){
          setError(intentError.message);
          setSuccess('');
        }
        else{
          setError('');
          setSuccess('your paymant processed successfully');
          setProcessing(false);
          console.log(paymentIntent);
          //save to database 
          const payment = {
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            last4: paymentMethod.card.last4,
            transaction:  paymentIntent.client_secret.slice('_secret')[0]
          }
          const url = `https://damp-falls-66437.herokuapp.com/appointments${_id}`;
          fetch(url, {
            method: 'PUT',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(payment)
          })
          .then(res => res.json())
          .then(data => console.log(data));
        }
        
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#8356FA',
              '::placeholder': {
                color: 'green',
              },
            },
            invalid: {
              color: 'red',
            },
          },
        }}
      />
      { processing ? <CircularProgress></CircularProgress> : <button style={{backgroundColor: 'fuchsia', border: 'none', padding: "3px 10px", color: 'yellow'}} type="submit" disabled={!stripe}>
        Pay ${price}
      </button>}
    </form>
    {
        error && <p style={{color: 'red'}}>{error}</p>
    }
    {
        success && <p style={{color: 'green'}}>{success}</p>
    }
        </div>
    );
};

export default ChackoutFrom;