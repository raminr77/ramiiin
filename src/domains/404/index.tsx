import Link from 'next/link';
import classNames from 'classnames';
import { Image } from '@/shared/components/Image';
import { ROUTES } from '@/shared/routes';
import { animator } from '@/shared/utils/animator';

export function NotFoundPage() {
  return (
    <div className='w-full flex items-center justify-center flex-col select-none'>
      <Link href={ROUTES.HOME}>
        <Image
          alt='404'
          width={200}
          height={200}
          src='./images/error-404.png'
          className={classNames(
            'dark:invert mt-10 mb-4',
            animator({ name: 'jackInTheBox' })
          )}
        />
      </Link>
      <h3
        className={classNames('text-3xl font-bold mb-3', animator({ name: 'fadeInUp' }))}
      >
        گشتم نبود، نگرد نیست!
      </h3>
      <p
        className={classNames(
          'text-sm mb-5 text-slate-500',
          animator({ name: 'fadeInUp', delay: '1s' })
        )}
      >
        صفحه یا آدرسی که به دنبال آن هستید، وجود ندارد.
      </p>
      <Link className='text-xs mt-3 hover:text-sky-500 duration-300' href={ROUTES.HOME}>
        برو به صفحه اصلی
      </Link>
      <br />
      <br />
    </div>
  );
}
