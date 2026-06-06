// react
import { useEffect, useState } from 'react';

// framer-motion
import { AnimatePresence } from 'framer-motion';

// hamburger-react
import Hamburger from 'hamburger-react';

// components
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import ReservationButton from './ReservationButton';
import LanguageSwitcher from '../../common/LanguageSwitcher';

const NavMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.scrollTo({ top: 0 });
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);
  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
      </AnimatePresence>
      <div className="absolute top-0 flex min-h-[42px] w-full items-center justify-between bg-[#1a1008]/40 px-4 text-[clamp(1rem,2vw,1.5rem)] text-white md:min-h-[64px] md:px-8 2xl:px-12">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <div className="z-10 md:hidden">
            <Hamburger
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              toggled={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              label="Menu"
            />
          </div>
          <LanguageSwitcher />
        </div>

        {/* Right side */}
        <div className="flex items-center">
          <ReservationButton className="md:hidden" />
          <DesktopMenu />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
