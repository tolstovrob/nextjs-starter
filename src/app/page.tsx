'use client';

import { Button } from '@/shared/ui/button';
import { fetchHealthChecker } from '@/features/api/healthChecker';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const HomePage = () => {
  const [counter, setCounter] = useState<number>(0);

  const successFetchExample = useQuery({
    queryKey: ['healthchecker', 'success'],
    queryFn: () => fetchHealthChecker(true),
    staleTime: 5000,
  });

  const errorFetchExample = useQuery({
    queryKey: ['healthchecker', 'error'],
    queryFn: () => fetchHealthChecker(false),
    staleTime: 5000,
  });

  return (
    <div className='p-12 text-black'>
      <h1 className='text-5xl font-bold'>Обычный заголовок</h1>
      <p className='max-w-screen-md py-4'>
        {successFetchExample.isLoading
          ? 'Содержимое загружается...'
          : successFetchExample.error
            ? JSON.stringify(successFetchExample.error, null, 2)
            : JSON.stringify(successFetchExample.data, null, 2)}
      </p>
      <p className='max-w-screen-md py-4'>
        {errorFetchExample.isLoading
          ? 'Содержимое загружается...'
          : errorFetchExample.error
            ? JSON.stringify(errorFetchExample.error, null, 2)
            : JSON.stringify(errorFetchExample.data, null, 2)}
      </p>
      <pre className='my-2 max-w-screen-md rounded-xl border-slate-900 bg-slate-300 p-4'>
        {`const Component = () => {
  return (
    <div>
      {/* JetBrains Mono с лигатурами для кода */}
    </div>
  )
}
`}
      </pre>

      <Button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        Счётчик: {counter}
      </Button>
    </div>
  );
};

export default HomePage;
