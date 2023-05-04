export function ServerError({ onTryAgain = () => {} }: { onTryAgain: GVoidFunction }) {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col select-none'>
      <h3 className='text-3xl font-bold mb-3'>500 - Server Error</h3>
      <button className='text-sm cursor-pointer' onClick={onTryAgain}>
        [ Try Again ]
      </button>
    </div>
  );
}
