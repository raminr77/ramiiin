import classNames from 'classnames';

export function BaseContainer({
  children,
  className
}: GCommonCompnentPropertiesWithChildren) {
  return (
    <div className={classNames('min-h-screen select-none', className)}>{children}</div>
  );
}
