import React from 'react';
import ContextProvider from '../context/index';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}

export default MyApp;
