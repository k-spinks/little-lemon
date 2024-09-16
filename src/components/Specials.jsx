import React from 'react'
import SpecialsCard from './SpecialsCard'

export default function Specials () {
  const specialsList = [
    {
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image : require('../assets/images/greek salad.jpg'),
    },
    {
      name: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: require('../assets/images/bruchetta.jpg'),
    },
    {
      name: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image : require('../assets/images/lemon dessert.jpg'),
    }
  ]

  const specials = specialsList.map(item =>
    <SpecialsCard
    key={item.name}
    foodImg={item.image}
    name={item.name}
    price={item.price}
    description={item.description}/>
  );

  return (
    <div className='specials-container row'>
    {specials}
    </div>
  )
}