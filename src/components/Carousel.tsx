import { FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { ReactComponent as ChevroletRightIcon } from '../assets/icons/chevron_foward.svg';
import { cn } from '../lib/utils';
import { Button } from './Button';
import '../styles/embla.css';

interface Props {
  slides: any[];
  options?: any;
}

const Carousel: FC<Props> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });

  const nextHandler = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  return (
    <section className="embla flex h-auto  desktop:w-[445px] desktop:px-6 desktop:py-8 w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide mr-[24px] mobile:aspect-[60/93] w-[60px]"
              key={index}
            >
              <div className="embla__slide__number flex justify-center items-center">
                <div>
                  <img
                    src={slide.image}
                    alt="Your alt text"
                    className="rounded-full size-[50px] desktop:size-20"
                  />
                  <div className="flex flex-col items-center">
                    <h5
                      className={cn(
                        'whitespace-nowrap mt-4 text-xs desktop:text-sm ',
                        index === 0 ? 'font-bold ' : 'font-normal',
                      )}
                    >
                      {slide.name}
                    </h5>
                    <p
                      className={cn(
                        'mobile:text-[12px] mobile:leading-[14.52px] text-[#718EBF] leading-[18.15px] font-sans font-[400]',
                        index === 0 ? 'font-bold' : 'font-normal',
                      )}
                    >
                      {slide.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls ml-[50px]">
        <div className="embla__buttons">
          <Button
            className="rounded-full bg-card w-[50px] h-[50px]"
            onClick={nextHandler}
          >
            <ChevroletRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
