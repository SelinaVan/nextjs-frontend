import Trending from 'app/(home)/Trending';
import Tech from 'app/(home)/Tech';
import Travel from 'app/(home)/Travel';
import Other from '@/app/(shared)/Other';
import Subscribe from '@/app/(shared)/Subscribe';
import Sidebar from '@/app/(shared)/Sidebar';
import { prisma } from './api/client';
import { Post } from '@prisma/client';

export const revalidate = 60;

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  // change static import image to use placeholder blur
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`)
      return {
        ...post,
        image: imageModule.default
      }
    })
  )
  return  formattedPosts

}

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post)
      }if (post?.category === 'Tech') {
        techPosts.push(post)
      }else if (post?.category === 'Travel') {
        travelPosts.push(post);
      } else if (post?.category === 'Interior Design') {
        otherPosts.push(post);
      }
    })
    return [trendingPosts, travelPosts, otherPosts, techPosts]
    
  }
  const [trendingPosts, travelPosts, otherPosts, techPosts] = formatPosts()
  
  return (
    <main className='px-10 leading-7'>
      <Trending posts={trendingPosts } />
      <div className='md:flex gap-10 mb-5'>
        <div className='basis-3/4'>
         <Tech posts={techPosts }/>
          <Travel posts={travelPosts }/>
          <Other posts={otherPosts }/>  
          <div className='hidden md:block'>
              <Subscribe />
          </div>
        </div>
        <div className='basis-1/4'>
          <Sidebar/>
        </div>
      </div>
    </main>
  );
}
