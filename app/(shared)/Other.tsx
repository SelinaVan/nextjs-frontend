import React from 'react';
import Card from 'app/(shared)/Card';
import { Post } from '@prisma/client';

type Props = {
   posts: Array<Post>
}

const Other = ({posts}: Props) => {
  return (
    <section className='pt-4 mb-16'>
      <hr className='border-1' />
      {/* header */}
      <p className='font-bold text-2xl'>Other Trending Posts</p>
      <div className='sm:grid grid-cols-2 gap-16'>
        <Card className='mt-5 sm:mt-0 ' imageHeight='h-80' post={posts[0]} />
        <Card className='mt-5 sm:mt-0 ' imageHeight='h-80' post={posts[1]} />
        <Card className='mt-5 sm:mt-0 ' imageHeight='h-80' post={posts[2]} />
        <Card className='mt-5 sm:mt-0 ' imageHeight='h-80' post={posts[3]} />
      </div>
    </section>
  );
};

export default Other;
