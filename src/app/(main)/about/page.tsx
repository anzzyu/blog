import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { ProfileCard } from '@/components/profile-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于',
};

export default function AboutPage() {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="关于我"
        description="你想知道我GG Bond的故事吗？"
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:grid md:grid-cols-3">
        <div className="pr-4">
          <ProfileCard />
        </div>
        <div className="md:col-span-2 md:pl-12 xl:pl-16">
          <div className="blog-content prose prose-lg dark:prose-invert">
            <h2>GG Bond</h2>
            <p>
              大家好，我是GG
              Bond，也被称为猪猪侠。我是一只勇敢、聪明的小猪，总是乐于帮助别人，解决各种难题。
            </p>
            <p>
              我喜欢冒险，喜欢结交新朋友。我的梦想是成为一名伟大的英雄，保护我的家人和朋友们。
            </p>
            <p>
              在我的冒险旅程中，我遇到了很多挑战，但我从不放弃，因为我相信只要努力，就一定能成功。
            </p>
            <p>
              除了冒险，我还喜欢学习新知识，特别是科学和技术。我相信知识可以改变世界，让我们的生活变得更美好。
            </p>
            <p>
              在空闲时间，我喜欢和朋友们一起玩耍，分享我们的故事和经验。友谊是我生命中最重要的财富之一。
            </p>
            <p>
              我也喜欢运动，特别是跑步和游泳。运动让我保持健康和充满活力，能够更好地面对各种挑战。
            </p>
            <p>
              我还喜欢音乐，特别是弹钢琴和唱歌。音乐让我感到放松和快乐，是我表达情感的一种方式。
            </p>
            <p>
              我相信每个人都有自己的独特之处，只要坚持自己的梦想，就一定能实现。希望大家也能找到自己的梦想，并为之努力奋斗！
            </p>
            <p>
              此外，我还喜欢旅行，探索不同的文化和风景。旅行让我增长见识，体验不同的生活方式。
            </p>
            <p>
              我也喜欢烹饪，尝试制作各种美食。烹饪不仅是一种乐趣，也是一种分享爱和快乐的方式。
            </p>
            <p>
              最后，我希望通过我的故事，能够激励更多的人勇敢追求自己的梦想，永不放弃。
            </p>
            <p>
              我还喜欢摄影，用镜头记录下生活中的美好瞬间。摄影让我发现生活中的细节和美丽。
            </p>
            <p>
              我相信，只要心中有爱，生活就会充满阳光和希望。希望大家都能找到自己的幸福和快乐。
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
