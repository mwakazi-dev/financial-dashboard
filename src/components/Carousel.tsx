import { FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { ReactComponent as ChevroletRightIcon } from '../assets/icons/chevron_foward.svg';
import { cn } from '../lib/utils';
import { Button } from './Button';
import '../styles/embla.css';

interface Props {
  slides: any[];
  options: { loop: true };
}

const Carousel: FC<Props> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const nextHandler = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  return (
    <section className="embla flex">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((slide, index) => (
            <div className="embla__slide mr-[24px]" key={index}>
              <div className="embla__slide__number flex justify-center items-center">
                <div>
                  <img
                    src="https://github.com/shadcn.png"
                    alt="Your alt text"
                    className="rounded-full mr-[34px] aspect-[70/70] w-[70px] h-[70px]"
                  />
                  <div className="flex flex-col items-center ">
                    <h5
                      className={cn(
                        'text-[16px] text-card-foreground font-[500] mt-[10px]',
                        index === 0 ? 'font-bold ' : 'font-normal',
                      )}
                    >
                      Livia Bator
                    </h5>
                    <p
                      className={cn(
                        'text-[15px text-[#718EBF] leading-[18.15px] font-[sans]',
                        index === 0 ? 'font-bold' : 'font-normal',
                      )}
                    >
                      Director
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
