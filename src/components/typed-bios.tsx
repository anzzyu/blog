'use client';

import { clsx } from 'clsx';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Twemoji } from './twemoji';

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
        <li>
          I&apos;m aliased as <span className="font-medium">Xiaoke</span> at
          work.
        </li>
        <li>I&apos;m a learner, builder, and freedom seeker.</li>
        <li>
          I live in <b className="font-medium">Peiping, China</b>.
        </li>
        <li>
          I was born in the beautiful <b className="font-medium">Mount Tai</b>.
        </li>
        <li>
          My first programming language I learned was{' '}
          <b className="font-medium">Javascript</b>.
        </li>
        <li>I love web development.</li>
        <li>I work mostly with JS/TS technologies.</li>
        <li>I&apos;m Chou&apos;s husband.</li>
        <li>
          I&apos;m a cat-person. <Twemoji emoji="cat" />
        </li>
        <li>
          I&apos;m a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="man-swimming" />,
            <Twemoji emoji="ping-pong" />,
            <Twemoji emoji="volleyball" />
          </span>
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
}