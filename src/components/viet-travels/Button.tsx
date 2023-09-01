import React from 'react';

const Button = ({ label }: { label: string }) => {
  return <button className='button-linear px-6 py-2'>{label}</button>;
};

export default Button;
