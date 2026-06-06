'use client';

// next
import Image from 'next/image';

// i18n
import { useTranslation } from 'react-i18next';

// fonts
import { bitter } from '@/ui/fonts';

// components
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="flex items-center justify-center bg-bgDarkGray py-[24px]"
    >
      <div className="flex w-[1296px] max-w-[95%] flex-col items-center justify-between gap-[24px] lg:flex-row">
        <div className="flex flex-shrink-0 items-center justify-center gap-[16px] lg:gap-[20px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            aria-hidden="true"
            width="120"
            height="120"
            sizes="120px"
            className="w-[80px] lg:w-[120px] filter invert"
          />
          <p className="text-[clamp(32px,20px_+_2vw,60px)]">{t('footer.brandName')}</p>
        </div>
        <div
          className={`${bitter.variable} font-bitter w-full text-center text-[clamp(16px,4px_+_2vw,20px)]`}
        >
          {/* <p>
            <span className="inline-block">Copyright © 2025</span>&nbsp;
            <span className="inline-block">Rashid Shamloo</span>
          </p>
          <p>All Rights Reserved</p> */}
        </div>
        <SocialMediaLinks />
      </div>
    </footer>
  );
};

export default Footer;
