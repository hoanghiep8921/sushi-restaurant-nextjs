'use client';

// next
import Image from 'next/image';

// i18n
import { useTranslation } from 'react-i18next';

const MenuHeader = ({
  dataId,
  headerImage,
}: {
  dataId: string;
  headerImage: string;
}) => {
  const { t } = useTranslation();
  const title = dataId === 'mainDishes' ? t('menu.mainDishes') : t('menu.drinks');
  return (
    <div className="relative flex h-[150px] items-center justify-center overflow-hidden rounded-[32px] text-[clamp(54px,40px_+_3vw,80px)] md:h-[240px]">
      <Image
        src={headerImage}
        alt={title}
        fill
        sizes="(max-width: 480px) 100vw,(max-width: 768px) 50vw, 20vw"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a1008]/40" />
      <h3 className="relative">{title}</h3>
    </div>
  );
};

export default MenuHeader;
