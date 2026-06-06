'use client';

// clsx
import clsx from 'clsx';

// i18n
import { useTranslation } from 'react-i18next';

const Title = () => {
  const { t } = useTranslation();

  return (
    <div className="pointer-events-none absolute left-[5%] top-1/2 z-[1] flex -translate-y-1/2 select-none flex-col gap-1 text-white drop-shadow-md md:left-[10%] md:top-[40%] md:gap-4">
      <h1
        className={clsx(
          'rounded-[32px] bg-[linear-gradient(to_right,rgba(0,0,0,0.5),transparent)] px-6 py-2 leading-[1] first-letter:text-[1.4em] first-letter:text-accent md:px-10 md:py-4',
          'text-[clamp(1.5rem,1rem_+_4vw,5.25rem)]',
        )}
      >
        {t('title.heading')}
      </h1>
      <p
        className={clsx(
          'whitespace-nowrap rounded-[32px] bg-[linear-gradient(to_right,rgba(0,0,0,0.5),transparent)] px-4 py-1 md:px-8 md:py-2',
          'text-[clamp(1rem,0.5rem_+_2vw,3rem)]',
        )}
      >
        {t('title.subtitle')}
      </p>
    </div>
  );
};

export default Title;
