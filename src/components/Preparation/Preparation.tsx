// next
import Image from 'next/image';

// components
import Reveal from '../common/Reveal';

const Preparation = () => {
  return (
    <section className="relative flex h-[240px] w-full items-center justify-center overflow-hidden sm:h-[360px] md:h-screen">
      <h2 className="sr-only">Preparation</h2>
      <Image
        src="/images/preparation/bg.jpg"
        alt="Background"
        aria-hidden="true"
        width="10"
        height="10"
        sizes="115vw"
        className="absolute right-0 top-0 w-auto min-w-[115vw] max-w-none md:min-h-full"
      />
      <div className="relative h-full w-[1296px] max-w-[95%]">
        <Reveal className="absolute right-0 top-1/2 max-w-[46%] -translate-y-1/2 rounded-[32px] bg-black/10 p-2 md:right-[5%] md:p-[48px] lg:right-0">
          <p className="text-center text-[clamp(18px,4px_+_3vw,50px)] drop-shadow-md">
            We take pride in our meticulous preparation. Every dish is crafted
            with the freshest ingredients and the utmost care.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Preparation;
