import Trending from 'app/(home)/Trending';

export default function Home() {
  return (
    <main className='px-10 leading-7'>
      <Trending />
      <div className='md:flex gap-10 mb-5'>
        <div className='basic-3/4'>
          {/* <Tech />
          <Travel />
          <Other /> */}
           <div className='hidden md:block'>
          {/* <Subscribe /> */}
        </div>
        </div>
        <div className='basic-1/4'>
          {/* <Sidebar/> */}
        </div>
       
      </div>
    </main>
  );
}
