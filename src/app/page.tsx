'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

const HomePage = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className='p-12 text-black'>
      <h1 className='text-5xl font-bold'>Обычный заголовок</h1>
      <p className='max-w-screen-md py-4'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ab a aspernatur quas,
        distinctio, est saepe doloremque nesciunt voluptatum veniam vel! Ipsum rerum accusamus
        magnam eum ea in vitae sit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci corporis reiciendis unde hic ea provident nobis assumenda, magnam eum dolorem qui
        est veniam doloribus dolore? Iusto sapiente sequi dolore eum.
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
