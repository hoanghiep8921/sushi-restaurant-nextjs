'use client';

// next
import Image from 'next/image';

// i18n
import { useTranslation } from 'react-i18next';

// components
import Reveal from '@/components/common/Reveal';

// testimonials data
import testimonials from '@/data/testimonials.json';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonialContent: Record<string, { name: string; testimonial: string }> = {
    testimonial1: {
      name: t('testimonials.johnName'),
      testimonial: t('testimonials.johnQuote'),
    },
    testimonial2: {
      name: t('testimonials.janeName'),
      testimonial: t('testimonials.janeQuote'),
    },
    testimonial3: {
      name: t('testimonials.peterName'),
      testimonial: t('testimonials.peterQuote'),
    },
  };

  return (
    <section className="mx-auto flex max-w-[95%] flex-col items-center justify-evenly gap-[48px] py-[48px] md:flex-row md:gap-[16px] xl:justify-center xl:gap-[48px]">
      <h2 className="sr-only">{t('testimonials.heading')}</h2>
      {testimonials.map((testimonial, i) => {
        const content = testimonialContent[testimonial.id as keyof typeof testimonialContent];
        return (
          <Reveal
            key={i}
            effect={i === 0 ? 'fadeRTL' : i === 1 ? 'fadeIn' : 'fadeLTR'}
            delay={i === 1 ? 0 : 0.5}
          >
            <article className="mt-[-76px] flex max-w-full flex-col items-center justify-center md:max-w-[400px]">
              <div className="relative translate-y-1/2 rounded-full border-[1px] border-borderGray">
                <Image
                  src={testimonial.image}
                  alt={content.name}
                  width="150"
                  height="150"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[28px] rounded-[32px] border-[1px] border-borderGray bg-bgDarkGray px-[42px] pb-[54px] pt-[96px]">
                <div className="flex flex-col items-center justify-center gap-[3px]">
                  <h3 className="text-[20px]">{content.name}</h3>
                  <Image
                    src="/images/testimonials/stars.png"
                    width="146"
                    height="25"
                    aria-hidden="true"
                    alt="rating"
                    className="pointer-events-none select-none"
                  />
                </div>
                <p className="text-center text-[clamp(16px,4px_+_2vw,18px)] leading-[1.65]">
                  {content.testimonial}
                </p>
              </div>
            </article>
          </Reveal>
        );
      })}
    </section>
  );
};

export default Testimonials;
