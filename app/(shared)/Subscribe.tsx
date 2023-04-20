
import React from 'react'



const Subscribe = () => {
  return (
      <section className='text-center bg-wh-10 px-5 py-10'>
          <h4 className='font-semibold text-base'>Subscribe to our Newsletter</h4>
          <p className='text-wh-500 my-3w-5/6 mx-auto'>
              Enter email address to get top news and great deals
          </p>
          <input className='text-center w-5/6 min-w-[100px] px-5 py-2 my-2 border-2'
          placeholder='Enter email address'
          />
          <button className='bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px]'>SUBSCRIBE</button>
    </section>
  )
}

export default Subscribe