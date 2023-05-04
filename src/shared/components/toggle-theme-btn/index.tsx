import { useTheme } from 'next-themes';
import { Image } from '@/shared/components/Image';

export const ToggleThemeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggle = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggle} className='p-2 rounded-full bg-slate-100 dark:bg-slate-600'>
      <Image
        width={24}
        height={24}
        className='invert hover:scale-75 duration-300'
        src={`./images/${currentTheme === 'dark' ? 'sun' : 'moon'}.svg`}
      />
    </button>
  );
};
