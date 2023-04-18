import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SocialLink from './SocialLinks';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='bg-wh-900 text-wh-50 p-10'>
      <div className='justify-between mx-auto gap-16 sm:flex'>
        {/* first column */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
          <p className='my-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, doloribus.
          </p>
          <p>&copy; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quidem.</p>
        </div>
        {/* second column */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Massa orci senectus</p>
          <p className='my-5'>Some random link</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {/* third column */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
           <p className='my-5'>Some random link</p>
          <p>(+84) 0909489406</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
