'use client';

// i18n
import { useTranslation } from 'react-i18next';

// utility
import { addComma } from '@/utility/utility';

const placeholderMenu = {
  mainDishes: [
    { titleKey: 'menuItems.sushiPlatter', price: '2500' },
    { titleKey: 'menuItems.sashimiDeluxe', price: '3500' },
    { titleKey: 'menuItems.unagiDon', price: '2200' },
    { titleKey: 'menuItems.tempuraSet', price: '1800' },
    { titleKey: 'menuItems.ramen', price: '1500' },
  ],
  drinks: [
    { titleKey: 'menuItems.sake', price: '1200' },
    { titleKey: 'menuItems.asahiBeer', price: '600' },
    { titleKey: 'menuItems.greenTea', price: '300' },
    { titleKey: 'menuItems.oolongTea', price: '300' },
    { titleKey: 'menuItems.water', price: '200' },
  ],
};

const MenuItems = ({
  dataId,
  itemCount,
}: {
  dataId: string;
  itemCount: number;
}) => {
  const { t } = useTranslation();

  const items =
    dataId === 'mainDishes'
      ? placeholderMenu.mainDishes
      : placeholderMenu.drinks;

  return (
    <div className="relative flex flex-col gap-[20px] rounded-[32px] border-[1px]  border-borderGray bg-[#1a1008]/40 p-[32px]">
      {items.slice(0, itemCount).map((item, i) => (
        <div key={i} className="flex items-center justify-between">
          <p className="flex-shrink-0">{t(item.titleKey)}</p>
          <div className="mx-4 mt-[2px] h-[1px] w-full bg-white"></div>
          <p>
            ¥{addComma(item.price)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
