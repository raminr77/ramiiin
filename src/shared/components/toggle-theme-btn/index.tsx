import { useTheme } from 'next-themes';
import { Image } from '@/shared/components/Image';

export const ToggleThemeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggle = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggle}
      className='p-2 rounded-full bg-slate-100 dark:bg-slate-600 outline-none'
    >
      <Image
        width={16}
        height={16}
        className='invert'
        src={`./images/${currentTheme === 'dark' ? 'sun' : 'moon'}.svg`}
      />
    </button>
  );
};
