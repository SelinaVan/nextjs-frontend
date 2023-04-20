
import React from 'react'
import Card from 'app/(shared)/Card';
import { Post } from '@prisma/client';

type Props = {
   posts: Array<Post>
}

const Tech = ({posts}: Props) => {
  return (
    <section>
      <hr className='border-1' />
      {/* header */}
      <div className='flex items-center gap-3 my-8'>
        <h4 className='bg-accent-green py-2 px-5 text-wh-900 text-small font-bold'>HOT</h4>
        <p className='font-bold text-2xl'>Latest News in Technology</p>
      </div>

      {/* flex */}
      {/* <div className='flex justify-between items-center gap-5'>
        <div className='bg-wh-500 h-96 basis-1/2'></div>
        <div className='flex flex-col gap-3  h-96 basis-1/2'>
          <div className='bg-wh-500 basis-1/3'></div>
          <div className='bg-wh-500 basis-1/3'></div>
          <div className='bg-wh-500 basis-1/3'></div>
        </div>
      </div> */}
      {/* grid */}
      <div className='sm:grid grid-cols-2 grid-rows-3 gap-8 my-5'>
        {/* large card */}
        <Card
          className=' col-span-1 row-span-3'
          imageHeight='h-96'
          isLongForm
          post={posts[0]}
        />
        {/* small card */}
        <Card
          className=' col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3'
          imageHeight='h-48'
          isSmallCard
          post={posts[1]}

        />
        <Card
          className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3'
          imageHeight='h-48'
          isSmallCard
          post={posts[2]}

        />
        <Card
          className=' col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3'
          imageHeight='h-48'
          isSmallCard
          post={posts[3]}

        />
      </div>
    </section>
  );
}

export default Tech