import Image from 'next/image';
import { Inter } from 'next/font/google';
import TrendingBlogs from '@/components/blog/TrendingBlogs';
import { formatBlog } from '@/lib/utils';
import axios from 'axios';

export async function getServerSideProps() {
  try {

    let res = await axios.get(`http://127.0.0.1:1337/api/trending-blog`, {
			params: {  
        'populate[blog_posts][populate][authors]': '*',
				'populate[blog_posts][populate][blog_category]': '*',
				'populate[blog_posts][populate][cover_image]': '*',
				}
		})
    
		const trendingBlogs = res?.data?.data?.attributes?.blog_posts?.data?.map(formatBlog) ?? []
	
    return {
      props: {
        trendingBlogs: trendingBlogs ?? [],
      }
    };
  } catch (err) {
		console.error(err)

    return {
      props: {
        trendingBlogs: [],
      }
    };
  }
}

export default function Home({ trendingBlogs }) {

  return (
    <main>
      <section className="h-max absolute top-0 flex flex-col justify-center w-full">
        <div className="my-5">
          <h1 className="hero-heading w-max3 font-bold text-4xl md:text-5xl px-6">
            Computer Science
          </h1>
          <h1 className="hero-heading w-max3 font-bold text-4xl md:text-5xl px-6">
            & Engineering
          </h1>
          <h1 className="hero-heading w-max3 font-bold text-4xl md:text-5xl px-6">
            Association
          </h1>
        </div>

        <div className="hero-img-container relative h-[380px]">
          <img src="/images/circles.jpg" alt="" className="hero-img" />
        </div>

        <TrendingBlogs trendingBlogs={trendingBlogs} />

      </section>
    </main>
  );
}
