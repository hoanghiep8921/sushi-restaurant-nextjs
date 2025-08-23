// next
import Image from 'next/image';

//components
import Slider from './Slider';
import Title from './Title';
import NavMenu from './NavMenu/NavMenu';
import ScrollDown from './ScrollDown';

const Header = () => {
  return (
    <header id="home" className="relative">
      <Slider />
      <Image
        src="/images/logo.png"
        alt="Sushi Restaurant Logo"
        width="240"
        height="240"
        className="pointer-events-none absolute bottom-6 right-6 z-[1] aspect-square w-[100px] select-none invert md:bottom-8 md:right-8 md:w-[300px]"
      />
      <Title />
      <ScrollDown />
      <NavMenu />
    </header>
  );
};

export default Header;
