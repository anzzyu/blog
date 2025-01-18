'use client';

import { clsx } from 'clsx';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  });
}

export function TypedBios() {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy();
      typed.current = createTypedInstance(el.current);
    }
  }, []);

  return (
    <div
      className={clsx([
        'flex min-h-8 items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          '[&_.typed-cursor]:h-5.5',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        <li>我的性格是勇敢，好奇，有时候有点骄傲。</li>
        <li>我的身高是120cm。</li>
        <li>我的体重是30kg。</li>
        <li>我深爱喜欢的小猪是菲菲。</li>
        <li>我的绝技是降龙十巴掌。</li>
        <li>我最喜欢的食物是巧克力糖，肉包子。</li>
        <li>我最讨厌的是一本正经。</li>
        <li>我的年龄大约3岁（当时夺取希望之光，被封印了至少3年）。</li>
        <li>我的使命是保护地球环境。</li>
        <li>我最常说的一句话是我就是猪猪侠。</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
}
