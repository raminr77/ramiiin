import classNames from 'classnames';
import { Footer } from '@/app/components/footer';
import { Header } from '@/app/components/header';
import { Nanvigator } from '@/app/components/nanvigator';

interface Props extends GCommonCompnentPropertiesWithChildren {
  containerClassName?: string;
}

export function BaseContainer({ children, className, containerClassName }: Props) {
  return (
    <div
      className={classNames(
        'min-h-screen overflow-x-hidden select-none relative flex flex-col items-center relative',
        className
      )}
    >
      <Header />
      <div
        className={classNames(
          'w-full max-w-screen-xl mt-20 min-h-with-menu px-5',
          containerClassName
        )}
      >
        {children}
      </div>
      <Footer />
      <Nanvigator />
    </div>
  );
}
