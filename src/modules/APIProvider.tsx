'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const APIProvider = (props: Props) => {
  const [client] = useState<QueryClient>(new QueryClient());

  return <QueryClientProvider client={client}>{props.children}</QueryClientProvider>;
};

export default APIProvider;
