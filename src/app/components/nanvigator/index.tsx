import { useTheme } from 'next-themes';
import Link from 'next/link';
import classNames from 'classnames';
import { Image } from '@/shared/components/Image';
import { MENU_DATA } from '@/shared/data/menu';
import { usePageName } from '@/shared/hooks/use-page-name';
import { animator } from '@/shared/utils/animator';

export function Nanvigator() {
  const { id: currentPageId } = usePageName();
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav className='max-sm:flex hidden w-full mx-auto px-5 fixed bottom-3 items-center justify-center'>
      <ul
        className={classNames(
          'px-10 w-fit border border-solid border-slate-200 dark:border-slate-700 rounded-full backdrop-blur-sm shadow-lg flex items-center justify-center',
          animator({ name: 'fadeInUp' })
        )}
        style={{
          backgroundColor:
            currentTheme === 'dark' ? 'rgba( 0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'
        }}
      >
        {MENU_DATA.map(({ id, title, url, icon }) => (
          <li key={id} className='h-16 flex items-center justify-center'>
            <Link
              href={url}
              className={classNames(
                'mx-2 flex flex-col items-center justify-center duration-150',
                {
                  '-translate-y-6 pointer-events-none': currentPageId === id
                }
              )}
            >
              <div
                className={classNames(
                  'duration-200 p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800',
                  {
                    'shadow-lg pointer-events-none bg-slate-100 dark:bg-slate-800 p-4':
                      currentPageId === id
                  }
                )}
              >
                <Image
                  width={24}
                  height={24}
                  src={icon}
                  alt={title}
                  className={classNames('dark:invert', {
                    [animator({ name: 'jackInTheBox' })]: currentPageId === id
                  })}
                />
              </div>
              {currentPageId === id && (
                <p
                  className={classNames(
                    'mt-2 whitespace-pre',
                    animator({ name: 'fadeIn' })
                  )}
                  style={{ fontSize: 11 }}
                >
                  {title}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
