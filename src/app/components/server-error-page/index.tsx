import Link from 'next/link';
import classNames from 'classnames';
import { Image } from '@/shared/components/Image';
import { ROUTES } from '@/shared/routes';
import { animator } from '@/shared/utils/animator';

export function ServerError({ onTryAgain = () => {} }: { onTryAgain: GVoidFunction }) {
  return (
    <div className='w-full flex items-center justify-center flex-col select-none'>
      <Link href={ROUTES.HOME}>
        <Image
          alt='404'
          width={200}
          height={200}
          src='./images/server-error.png'
          className={classNames(
            'dark:invert mt-10 mb-4',
            animator({ name: 'jackInTheBox' })
          )}
        />
      </Link>
      <h3
        className={classNames('text-3xl font-bold mb-3', animator({ name: 'fadeInUp' }))}
      >
        فعلا اوضاع رو به راه نیست!
      </h3>
      <p
        className={classNames(
          'text-sm mb-5 text-slate-500',
          animator({ name: 'fadeInUp', delay: '1s' })
        )}
      >
        درحال حاضر دچار اختلال شدیم، به زودی بر میگردیم ...
      </p>
      <button className='text-sm cursor-pointer' onClick={onTryAgain}>
        دوباره امتحان کنید
      </button>
      <br />
      <br />
    </div>
  );
}
