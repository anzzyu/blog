'use client';

import { BlogLinks } from '@/components/blog-links';
import { Container } from '@/components/container';
import { Greeting } from '@/components/greeting';
import { Intro } from '@/components/intro';
import { LatestPosts } from '@/components/latest-posts';
import { ProfileCard } from '@/components/profile-card';
import { Twemoji } from '@/components/twemoji';
import { TypedBios } from '@/components/typed-bios';
import { getAllBlogs } from '@/lib/action';
import { Blog } from '@/lib/type';
import { useEffect, useState } from 'react';

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getAllBlogs();
      setBlogs(blogs);
    };
    fetchBlogs();
  }, []);
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <Greeting />
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
            <Intro />
            <TypedBios />
            <div className="mb-6 mt-4 md:mb-8">
              <p>
                I started learning to code in 2015 and have been hooked ever
                since.
              </p>
              <p>I landed my first job as a Web developer in 2020.</p>
              <p>I have a passion for JS/TS, web dev.</p>
              <p>
                I started this blog to document and share my knowledge &
                experience.
              </p>
            </div>
            <BlogLinks />
            <p className="my-6 flex md:my-8">
              <span className="mr-2">Happy reading</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p>
          </div>
        </div>
        <div className="hidden pl-4 pt-8 xl:block">
          <ProfileCard />
        </div>
      </div>
      <LatestPosts posts={blogs} snippets={blogs} />
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  );
}
