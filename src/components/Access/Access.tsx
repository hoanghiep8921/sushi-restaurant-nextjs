// next
import Image from 'next/image';

// components
import AccessInformation from './AccessInformation';
import Reveal from '@/components/common/Reveal';

const Access = () => {
  return (
    <section
      id="access"
      className="relative flex items-center justify-center py-[64px] md:py-[128px]"
    >
      <h2 className="sr-only">Access</h2>
      <Image
        src="/images/background_footer.png"
        alt="Background"
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-80"
      />
      <div className="relative mx-auto flex w-[1296px] max-w-[95%] flex-col items-center justify-evenly gap-x-[16px] gap-y-[32px] text-[clamp(18px,4px_+_1vw,20px)] md:gap-y-[48px] lg:flex-row lg:items-stretch">
        <Reveal effect="fadeRTL" className="flex max-w-full">
          <AccessInformation />
        </Reveal>
        <Reveal effect="fadeLTR">
          <Image
            src="/images/access/map.jpg"
            alt="Map"
            width="500"
            height="400"
            aria-hidden="true"
            sizes="500px"
            className="rounded-[32px] border-[1px] border-borderGray opacity-90"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Access;
