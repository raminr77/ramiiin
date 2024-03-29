import { useCallback, useRef } from 'react';
import classNames from 'classnames';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowWidth } from '@/shared/hooks/use-window-width';
import { Image } from '../Image';
import { CarouselItem } from './carousel-item';

interface Props extends GCommonCompnentProperties {
  items: [];
  title?: string;
  description?: string;
}
export function Carousel({ title, description, className, items = [] }: Props) {
  const sliderRef = useRef<any>(null);
  const { isDesktop } = useWindowWidth();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={classNames('w-full max-lg:px-5', className)}>
      {title && <h3 className='text-sm mb-1'>{title}</h3>}
      {description && <p className='text-xs mb-4 text-slate-500'>{description}</p>}

      <div className='w-full relative'>
        <Swiper
          ref={sliderRef}
          spaceBetween={10}
          modules={[Navigation]}
          slidesPerView={isDesktop ? 4 : 2}
        >
          {items?.map((item) => (
            <SwiperSlide key={item}>
              <CarouselItem />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ARROWS */}
        <button
          onClick={handlePrev}
          className='prev-arrow absolute top-1/2 -right-8 z-10 max-lg:hidden'
        >
          <Image
            width={16}
            height={16}
            src='./images/arrow.png'
            className='dark:invert'
          />
        </button>
        <button
          onClick={handleNext}
          className='next-arrow absolute top-1/2 -left-8 z-10 max-lg:hidden'
        >
          <Image
            width={16}
            height={16}
            src='./images/arrow.png'
            className='dark:invert rotate-180'
          />
        </button>
      </div>
    </div>
  );
}
