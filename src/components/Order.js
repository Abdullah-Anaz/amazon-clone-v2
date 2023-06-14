import React from 'react'
import './Order.css'
import moment from 'moment/moment'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(({ id, title, image, price, rating }, index) => (
        <CheckoutProduct
          key={index}
          id={id}
          title={title}
          image={image}
          price={price}
          rating={rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className='order__total'>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order