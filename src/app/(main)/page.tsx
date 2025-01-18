import { Container } from '@/components/container';
import { Greeting } from '@/components/greeting';
import { Intro } from '@/components/intro';
import { LatestPosts } from '@/components/latest-posts';
import { ProfileCard } from '@/components/profile-card';
import { TypedBios } from '@/components/typed-bios';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '首页',
};

export default function Home() {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <Greeting />
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
            <Intro />
            <TypedBios />
            <div className="mb-6 mt-4 md:mb-8">
              <p>我的武器是猪猪开天宝剑、猪猪蟠龙战袍。</p>
              <p>我的理想是夺回魔法智慧球，打败王小二，恢复地球环境。</p>
              <p>
                我的身份是魔法智慧球的发明者、望子成龙小学三年级学生、实习神仙、拼装学院的班长、希望铠甲和希望号飞艇的主人、变身战队成员、五灵卫、星际特工、小虎队防御手兼主攻手等。
              </p>
            </div>
            {/* <BlogLinks /> */}
            {/* <p className="my-6 flex md:my-8">
              <span className="mr-2">玩的开心</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p> */}
          </div>
        </div>
        <div className="hidden pl-4 pt-8 xl:block">
          <ProfileCard />
        </div>
      </div>
      <LatestPosts />
    </Container>
  );
}
