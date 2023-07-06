import Link from 'next/link';
import { Image } from '@/shared/components/Image';
import { ToggleThemeBtn } from '@/shared/components/toggle-theme-btn';
import { MENU_DATA } from '@/shared/data/menu';
import { ROUTES } from '@/shared/routes';

export function Header() {
  return (
    <header className='top-0 fixed backdrop-blur-sm w-full border-b border-solid shadow-md border-slate-200 dark:border-slate-700 px-4 z-50'>
      <div className='w-11/12 mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href={ROUTES.HOME} className='ml-4 block'>
            <Image
              width={28}
              height={28}
              src='./icons/logo.png'
              className='invert dark:invert-0'
            />
          </Link>
          <ul className='flex items-center'>
            {MENU_DATA.map(({ id, title, url }) => (
              <li key={id}>
                <Link
                  className='text-xs px-3 py-6 hover:text-sky-600 dark:hover:text-sky-300 block'
                  href={url}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ToggleThemeBtn />
      </div>
    </header>
  );
}
