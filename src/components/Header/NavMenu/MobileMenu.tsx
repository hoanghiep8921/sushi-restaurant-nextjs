'use client';

// framer-motion
import { m, LazyMotion, domAnimation } from 'framer-motion';

// clsx
import clsx from 'clsx';

// i18n
import { useTranslation } from 'react-i18next';

// hover style
import { navHover } from '@/styles/navHover';

// menu items data
import menu from '@/data/navigation-menu.json';

const MobileMenu = ({
  setIsMobileMenuOpen,
}: {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        id="mobile-menu"
        className="absolute top-0 z-10 flex h-screen w-full items-start justify-center bg-[#1a1008]/80 pt-12 text-[clamp(1.25rem,2vw,1.5rem)] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <nav>
          <ul className="flex flex-col gap-4">
            {menu.map((item, i) => (
              <li
                key={i}
                className="flex flex-col items-center justify-center gap-4"
              >
                <a
                  href={`#${item}`}
                  className={clsx(
                    'relative transition-all duration-300 hover:text-accent',
                    navHover,
                  )}
                >
                  {t(`nav.${item}`)}
                </a>
                <div className="aspect-square w-2 select-none rounded-full bg-accent" />
              </li>
            ))}
            
          </ul>
        </nav>
      </m.div>
    </LazyMotion>
  );
};

export default MobileMenu;
