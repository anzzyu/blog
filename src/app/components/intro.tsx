import { Twemoji } from './twemoji';

export function Intro() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I&apos;m <span className="font-medium">QingYu</span> - a passionate Guitar
      player in
      <span className="font-medium"> Peking, China </span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-china" />
      </span>
    </h1>
  );
}
