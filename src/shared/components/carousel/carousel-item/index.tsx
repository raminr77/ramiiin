import Link from 'next/link';
import classNames from 'classnames';
import { Image } from '../../Image';
import styles from './carousel-item.module.scss';

export function CarouselItem() {
  return (
    <Link href={'/'}>
      <div
        className={classNames(
          'border border-solid dark:border-slate-700 border-slate-200 overflow-hidden duration-100 hover:border-slate-400 dark:hover:border-slate-500',
          styles.CarouselItem
        )}
      >
        <div className='w-full flex items-center justify-center min bg-slate-200 dark:bg-slate-700'>
          <Image
            alt='title'
            className='aspect-video grayscale duration-500'
            src='https://daadban.com/wp-content/uploads/2016/05/2777234.jpg'
          />
        </div>

        <div className='p-4'>
          <h3 className='text-sm leading-7 mb-2'>پرواز به سمت رویا یا فرار از ایران ؟</h3>
          <p className='text-xs text-justify leading-5 text-slate-400'>
            وقتی صحبت از مهاجرت میشه همیشه به خودم میگم: یعنی نمیشه یکم بیشتر بمونم ؟
          </p>
        </div>
      </div>
    </Link>
  );
}
