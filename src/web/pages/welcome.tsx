import React from 'react'

const Welcome = (props: {message: string}) => {
  return (
    <div className='container'>
      <p>{props?.message}</p>
    </div>
  )
}

export default Welcome