import { BriefcaseBusiness, Mail, MapPin } from 'lucide-react';
import { Fragment } from 'react';
import JuejinIcon from '../icons/juejin.svg';
import { Twemoji } from './twemoji';

function getAccountHandle(url = '') {
  const lastPart = url.split('/').pop();
  if (lastPart) {
    return lastPart;
  }
  return url;
}

const SOCIALS = [
  {
    platform: 'juejin',
    handle: getAccountHandle('https://www.juejin.cn/'),
    href: 'https://www.juejin.cn/',
    Icon: () => <JuejinIcon className="h-5 w-5" />,
    umamiEvent: 'profile-card-x',
  },
];

export function ProfileCardInfo() {
  return (
    <div className="hidden py-4 md:block md:px-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        QingYu
      </h3>
      <h4 className="py-2 text-gray-500 dark:text-gray-400">
        Learner | Builder
      </h4>
      <div className="mb-2 mt-4 space-y-4">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <BriefcaseBusiness strokeWidth={1.5} size={20} />
          <p className="flex items-center px-2">
            Front-End Engineer
            {/* @{' '}
            <a
              target="_blank"
              href={AUTHOR_INFO.work.website || '/'}
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {AUTHOR_INFO.work.company}
            </a> */}
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <MapPin strokeWidth={1.5} size={20} />
          <p className="px-2">
            Peking, China
            <span className="absolute ml-1 inline-flex pt-px">
              <Twemoji emoji="flag-china" />
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <Mail strokeWidth={1.5} size={20} />
          <a className="px-2" href={`mailto:zzyu.anan@gmail.com`}>
            zzyu.anan@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
          {SOCIALS.map(({ platform, handle, href, Icon, umamiEvent }, idx) => (
            <Fragment key={platform}>
              <a
                target="_blank"
                href={href}
                rel="noreferrer"
                className="flex items-center underline-offset-4 hover:underline"
                data-umami-event={umamiEvent}
              >
                <Icon />
                <span className="ml-px text-gray-500">/</span>
                <span className="ml-0.5">{handle}</span>
              </a>
              {idx !== SOCIALS.length - 1 && (
                <span className="text-gray-400 dark:text-gray-500">|</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
