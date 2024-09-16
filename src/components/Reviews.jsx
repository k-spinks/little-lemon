import React from 'react'
import ReviewCard from './ReviewCard'

export default function Reviews () {
  const reviewsList = [
    {
      name: 'Abbie Goodwin',
      pfp: 'https://placehold.co/400',
      // pfp: require('../assets/images/pfp4.jpg'),
      username: '@goodwin_abbie',
      review: 'The lamb kebabs were perfectly seasoned, and the hummus was the best I\'ve ever had. The atmosphere felt like a cozy home away from home!',
    },
    {
      name: 'Eli Newman',
      pfp: 'https://placehold.co/400',
      // pfp: require('../assets/images/pfp2.jpg'),
      username: '@eli.new',
      review: 'A hidden gem! The falafel was crispy on the outside and soft on the inside, and the baklava was a perfect finish to the meal. Definitely coming back!',
    },
    {
      name: 'Madi Johnson',
      pfp: 'https://placehold.co/400',
      // pfp: require('../assets/images/pfp1.jpg'),
      username: '@madij',
      review: 'The warm pita and dips were so fresh and delicious. I loved the family feel of the restaurant—it\'s like eating at a relative\'s house.',
    },
    {
      name: 'Jeremy Howard',
      pfp: 'https://placehold.co/400',
      // pfp: require('../assets/images/pfp3.jpg'),
      username: '@Jeremyh',
      review: 'The moussaka was out of this world, and the service was warm and welcoming. You can tell the recipes have been passed down through generations. A must-visit!',
    }
  ]

  const reviews = reviewsList.map(item =>
    <ReviewCard
    key={item.username}
    name={item.name}
    pfp={item.pfp}
    username={item.username}
    review={item.review}
    />
  )
  return (
    <div className='reviews-container row'>
      {reviews}
    </div>
  )
}