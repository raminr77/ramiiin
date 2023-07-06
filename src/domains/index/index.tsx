import { Carousel } from '@/shared/components/carousel';

export function IndexPage() {
  return (
    <main className='flex items-center w-full h-screen flex-col'>
      <Carousel title='نوشته ها' description='نوشته های جدید' className='my-8' />
      <Carousel title='خاطرات' description='خاطره های جدید' />
    </main>
  );
}
