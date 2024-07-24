import React from 'react';
import Image from 'next/image';
import PaymentPage from '../components/PaymentPage';

const username = ({ params }) => {
  return (
    <PaymentPage username={params.username} />
  )
}

export default username;
