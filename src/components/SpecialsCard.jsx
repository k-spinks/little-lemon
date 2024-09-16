import React from 'react'
import delivery from '../assets/images/delivery.png'

export default function SpecialsCard(props) {
  const {foodImg, name, price, description} = props
  return (
    <article className='specials-card row'>
      <img className='specials-img' src={foodImg} alt={name} />
      <div className='specials-content-container row col'>
        <div className='specials-content row col'>
          <div className='specials-heading row col'>
            <h3 className='specials-name-text'>{name}</h3>
            <h4 className='specials-price highlight-text'>{price}</h4>
          </div>
          <p className='paragraph-text'>{description}</p>
          <div className='specials-order row col'>
            <p className='specials-order-text'>Order for delivery</p>
            <img className='specials-card-icon' src={delivery} alt="delivery" />
          </div>
        </div>
      </div>
    </article>
  )
}