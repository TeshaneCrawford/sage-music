import React, {FC} from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '.././app/store/store'

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <Component {...pageProps} />
  )
};

export default wrapper.withRedux(WrappedApp);
