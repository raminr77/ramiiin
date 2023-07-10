import { useTheme } from 'next-themes';
import Link from 'next/link';
import classNames from 'classnames';
import { Image } from '@/shared/components/Image';
import { ToggleThemeBtn } from '@/shared/components/toggle-theme-btn';
import { MENU_DATA } from '@/shared/data/menu';
import { usePageName } from '@/shared/hooks/use-page-name';
import { ROUTES } from '@/shared/routes';
import { animator } from '@/shared/utils/animator';

export function Header() {
  const { id: currentPageId } = usePageName();
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header
      className={classNames(
        'top-0 h-16 fixed backdrop-blur-sm w-full border-b border-solid shadow-md border-slate-200 dark:border-slate-700 px-4 z-50 flex items-center',
        animator({ name: 'fadeInDown' })
      )}
      style={{
        backgroundColor:
          currentTheme === 'dark' ? 'rgba( 0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className='w-11/12 mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href={ROUTES.HOME} className='ml-4 block'>
            <Image
              width={28}
              height={28}
              src='./icons/logo.png'
              className={classNames(
                'invert dark:invert-0',
                animator({ name: 'jackInTheBox' })
              )}
            />
          </Link>
          <ul className='flex items-center'>
            <li className='max-sm:block hidden text-xs px-3 py-6'>دستـ خطـ رامـینـــ</li>
            {MENU_DATA.map(({ id, title, url }) => (
              <li key={id} className='max-sm:hidden'>
                <Link
                  className={classNames(
                    'text-xs px-3 py-6 hover:text-sky-600 hover:border-sky-400 dark:hover:text-sky-300 block border-b-2 border-solid border-transparent',
                    {
                      'pointer-events-none text-sky-600 dark:border-sky-400 dark:text-sky-300 border-sky-600':
                        currentPageId === id
                    }
                  )}
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
