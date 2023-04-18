import React from 'react';
import Image from 'next/image';
import Twitter from 'public/assets/social_twitter.png';
import Discord from 'public/assets/social_discord.png';
import Facebook from 'public/assets/social_facebook.png';
import Google from 'public/assets/social_google.png';
import Instagram from 'public/assets/social_instagram.png';
import Pinterest from 'public/assets/social_pinterest.png';

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
      <a href='https://twitter.com' target='_blank' rel='noreference'>
        <Image
          src={Twitter}
          alt='twitter'
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          width={20}
          height={20}
        />
          </a>
          <a href='https://discord.com' target='_blank' rel='noreference'>
        <Image
          src={Discord}
          alt='discord'
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          width={20}
          height={20}
        />
          </a>
          <a href='https://facebook.com' target='_blank' rel='noreference'>
        <Image
          src={Facebook}
          alt='facebook'
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          width={20}
          height={20}
        />
          </a>
          <a href='https://google.com' target='_blank' rel='noreference'>
        <Image
          src={Google}
          alt='google'
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          width={20}
          height={20}
        />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreference'>
        <Image
          src={Instagram}
          alt='instagram'
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          width={20}
          height={20}
        />
      </a>
      <a href='https://pinterest.com' target='_blank' rel='noreference'>
        <Image
          src={Pinterest}
          alt='pinterest'
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks