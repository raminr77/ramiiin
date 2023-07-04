import classNames from 'classnames';
import { Footer } from '@/app/components/footer';
import { Header } from '@/app/components/header';

interface Props extends GCommonCompnentPropertiesWithChildren {
  containerClassName?: string;
}

export function BaseContainer({ children, className, containerClassName }: Props) {
  return (
    <div
      className={classNames(
        'min-h-screen overflow-x-hidden select-none relative',
        className
      )}
    >
      <Header />
      <div className={classNames('w-full max-w-screen-xl', containerClassName)}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
