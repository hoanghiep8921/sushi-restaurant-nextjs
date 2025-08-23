// utility
import { addComma } from '@/utility/utility';

const placeholderMenu = {
  mainDishes: [
    { title: 'Sushi Platter', price: '2500' },
    { title: 'Sashimi Deluxe', price: '3500' },
    { title: 'Unagi Don', price: '2200' },
    { title: 'Tempura Set', price: '1800' },
    { title: 'Ramen', price: '1500' },
  ],
  drinks: [
    { title: 'Sake (bottle)', price: '1200' },
    { title: 'Asahi Beer', price: '600' },
    { title: 'Green Tea', price: '300' },
    { title: 'Oolong Tea', price: '300' },
    { title: 'Water', price: '200' },
  ],
};

const MenuItems = ({
  dataId,
  itemCount,
}: {
  dataId: string;
  itemCount: number;
}) => {
  const items =
    dataId === 'mainDishes'
      ? placeholderMenu.mainDishes
      : placeholderMenu.drinks;

  return (
    <div className="relative flex flex-col gap-[20px] rounded-[32px] border-[1px]  border-borderGray bg-black/40 p-[32px]">
      {items.slice(0, itemCount).map((item, i) => (
        <div key={i} className="flex items-center justify-between">
          <p className="flex-shrink-0">{item.title}</p>
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
