import { Image } from '@/shared/components/Image';
import { APP_DATA } from '@/shared/constants/app';

export function SplashScreen() {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col bg-white dark:bg-slate-800 select-none'>
      <Image width={100} src='./icons/logo.png' className='invert dark:invert-0' />

      <div className='fixed bottom-9 flex flex-col items-center dark:text-slate-700 text-slate-200'>
        <div className='text-md'>{APP_DATA.NAME}</div>
        <div className='text-sm'>Version {APP_DATA.VERSION}</div>
      </div>
    </div>
  );
}
