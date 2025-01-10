'use client';

import { BookOpen, Link, Tag } from 'lucide-react';
import * as React from 'react';

import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar';
import { NavMain } from './nav-main';

// This is sample data.
const data = {
  // user: {
  //   name: 'shadcn',
  //   email: 'm@example.com',
  //   avatar: '/avatars/shadcn.jpg',
  // },
  // teams: [
  //   {
  //     name: 'Acme Inc',
  //     logo: GalleryVerticalEnd,
  //     plan: 'Enterprise',
  //   },
  //   {
  //     name: 'Acme Corp.',
  //     logo: AudioWaveform,
  //     plan: 'Startup',
  //   },
  //   {
  //     name: 'Evil Corp.',
  //     logo: Command,
  //     plan: 'Free',
  //   },
  // ],
  navMain: [
    {
      title: '快捷链接',
      url: '#',
      icon: Link,
      isActive: true,
      items: [
        {
          title: '首页',
          url: '/',
        },
      ],
    },
    {
      title: '文章管理',
      url: '#',
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: '列表',
          url: '/admin/blog',
        },
        {
          title: '新建',
          url: '/admin/blog/create',
        },
      ],
    },
    {
      title: '标签管理',
      url: '#',
      icon: Tag,
      isActive: true,
      items: [
        {
          title: '列表',
          url: '/admin/tag',
        },
        {
          title: '新建',
          url: '/admin/tag/create',
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: 'Design Engineering',
  //     url: '#',
  //     icon: Frame,
  //   },
  //   {
  //     name: 'Sales & Marketing',
  //     url: '#',
  //     icon: PieChart,
  //   },
  //   {
  //     name: 'Travel',
  //     url: '#',
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent className="mt-4">
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
