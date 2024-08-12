import React from 'react'

export default function Highlights() {
  return (
    <section className='highlights-section'>
        <div>
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className='card-group'>
          <div className='highlight-cards'>
            <img src="#" alt="Food" />
            <div>
              <h4>Greek Salad</h4>
              <p>$12.99</p>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
            <div>
              <p>Order for delivery</p>
              <img src="#" alt="Bike" />
            </div>
          </div>

          <div className='highlight-cards'>
            <img src="#" alt="Food" />
            <div>
              <h4>Bruschetta</h4>
              <p>$5.99</p>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
            <div>
              <p>Order for delivery</p>
              <img src="#" alt="Bike" />
            </div>
          </div>

          <div className='highlight-cards'>
            <img src="#" alt="Food" />
            <div>
              <h4>Lemon Dessert</h4>
              <p>$5.00</p>
            </div>
            <p>This comes straight from grandma's recipe book every last ingredient has been sourced and is an authentic as can be imagined</p>
            <div>
              <p>Order for delivery</p>
              <img src="#" alt="Bike" />
            </div>
          </div>
        </div>
    </section>
  )
}