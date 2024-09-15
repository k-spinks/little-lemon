import React from 'react'
import delivery from '../assets/images/delivery.png'

export default function SpecialsCard(props) {
  const {foodImg, name, price, description} = props
  return (
    <div className=''>
      <img className='' src={foodImg} alt={name} />
      <div className="">
        <div className=''>
          <h3 className=''>{name}</h3>
          <h4 className=''>{price}</h4>
        </div>
        <p className=''>{description}</p>
        <div className=''>
          <p className=''>Order for delivery</p>
          <img className='' src={delivery} alt="delivery" />
        </div>
      </div>
    </div>
  )
}