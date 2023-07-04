import { useTheme } from 'next-themes';
import classNames from 'classnames';
import styles from './slider.module.scss';

export function Slider() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div
      className={classNames(
        'w-full relative bg-slate-200 dark:bg-slate-700 pt-20 flex items-center justify-center',
        styles.Slider
      )}
    >
      Slider
      <svg
        style={{ bottom: '-260px' }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='absolute left-0 right-0'
      >
        <path
          fill={currentTheme === 'dark' ? '#334155' : '#e2e8f0'}
          fill-opacity='1'
          d='M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,149.3C672,139,768,85,864,64C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg>
    </div>
  );
}
