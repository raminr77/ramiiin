import Link from 'next/link';

export function NotFoundPage() {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col select-none'>
      <h3 className='text-3xl font-bold mb-3'>404 - Not Found</h3>
      <Link className='text-sm' href='/'>
        [ Home Page ]
      </Link>
    </div>
  );
}
