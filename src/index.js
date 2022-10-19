import React from 'react';
import ReactDOM from 'react-dom/client';
import "./reset.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.min.css'

import { AuthProvider } from './contexts/AuthContext';
import { BasketProvider } from './contexts/BasketContext';

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <AuthProvider>
        <BasketProvider>
          <App />
        </BasketProvider>
      </AuthProvider>
    </ChakraProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

reportWebVitals();
