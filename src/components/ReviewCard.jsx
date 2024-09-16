import React from 'react'

// TODO: Add star rating above image
export default function ReviewCard (props) {
  const {name, pfp, username, review} = props
  return (
    <article key={username} className='testimonial-name-text review-card rounded row'>
      <div className='row'>
        <div className='testimonial-reviewer row'>
          <img src={pfp} alt='Reviewers avatar' className='reviewer-pfp'/>
          <div className='row testimonial-name-content'>
            <h5 className=''>{name}</h5>
            <h5 className='testimonial-username-text'>{username}</h5>
          </div>
        </div>
      </div>
      <p className='testimonial-description-text testimonial-review-content'>"{review}"</p>
    </article>
  )
}