'use client';
import { Button } from '@ui/button';
import { fetchHealthChecker } from '@api/healthChecker';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const HomePage = () => {
  const [counter, setCounter] = useState<number>(0);
  const { data, isLoading, error } = useQuery({
    queryKey: ['healthchecker'],
    queryFn: () => fetchHealthChecker(),
    staleTime: 5000,
  });

  return (
    <div className='p-12 text-black'>
      <h1 className='text-5xl font-bold'>Обычный заголовок</h1>
      <p className='max-w-screen-md py-4'>
        {isLoading
          ? 'Содержимое загружается...'
          : error
            ? JSON.stringify(error, null, 2)
            : JSON.stringify(data, null, 2)}
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
