import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';
import Image from 'next/image';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className='bg-wh-900 py-3 px-5 my-8 text-wh-50 text-xs font-bold text-center'>
        Subscribe and Follow
      </h4>
      <div className='m-5'>
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className=' my-8'>
        <Image
        className='hidden md:block my-8 w-full'
          src={require('../../public/assets/ad-2.png')}
          alt='advert-2'
          style={{ objectFit: 'cover', width:'100%',height: '250px' }}
        />
      </div>
      <h4 className='bg-wh-900 py-3 px-5  text-wh-50 text-xs font-bold text-center'>
        About the Blog
      </h4>
      <div className=' my-8'>
        <Image
          src={require('../../public/assets/about-profile.jpg')}
          alt='profile-pic'
          style={{ objectFit: 'cover', width:'100%',height: '250px' }}
        />
      </div>
      <h4 className=' py-3 px-5  text-wh-500  font-bold text-center'>Geoffey Epstein</h4>
      <p className='text-wh-500 text-center text-sm'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, qui.
      </p>
    </section>
  );
};

export default Sidebar;
