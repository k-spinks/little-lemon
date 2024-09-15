import React from 'react'

export default function ReviewCard (props) {
  const {name, pfp, username, review} = props
  return (
    <div>
      <div>
        <img src={pfp} alt='Reviewers avatar' />
        <div>
          <h5>{name}</h5>
          <h5>{username}</h5>
        </div>
      </div>
      <p>{review}</p>
    </div>
  )
}