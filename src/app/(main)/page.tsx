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
              <p>我喜欢探索未知的世界，每一次冒险都让我充满了期待和兴奋。</p>
              <p>我的梦想是成为最强的英雄，保护弱小，伸张正义。</p>
              <p>我拥有强大的魔法力量，可以操控元素，治愈伤痛。</p>
              <p>我总是乐于帮助别人，无论是朋友还是陌生人。</p>
              <p>我的朋友们都很信任我，因为我从不背叛他们的信任。</p>
              <p>我喜欢学习新知识，不断提升自己，迎接新的挑战。</p>
              <p>我相信团结就是力量，只有合作才能战胜一切困难。</p>
              <p>我从不轻易放弃，无论遇到多大的挫折，我都会坚持到底。</p>
              <p>我的目标是保护地球，让每一个生物都能在和平中生活。</p>
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
