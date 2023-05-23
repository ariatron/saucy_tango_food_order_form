import React, { useState } from "react";

function FoodOrderForm() {
  const [stateName, setStateName] = useState('');
  const [statePhone, setStatePhone] = useState('');
  const [stateAddress, setStateAddress] = useState('');
  const [stateOrder, setStateOrder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission

    alert(`Order Successful! Your order was ${stateOrder}. Please show your confirmation number during pickup.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        id="name" 
        value={stateName || ''}
        onChange={(e) => setStateName(e.target.value)}
        name="name"
        type="text"
      />
      <label htmlFor="phone">Phone:</label>
      <input 
        id="phone" 
        value={statePhone || ''}
        onChange={(e) => setStatePhone(e.target.value)}
        name="phone"
        type="text"
      />
      <label htmlFor="address">Address:</label>
      <input 
        id="address" 
        value={stateAddress || ''}
        onChange={(e) => setStateAddress(e.target.value)}
        name="address"
        type="text"
      />
      <label htmlFor="order">Order:</label>
      <input 
        id="order" 
        value={stateOrder || ''}
        onChange={(e) => setStateOrder(e.target.value)}
        name="order"
        type="text"
      />
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default FoodOrderForm;
