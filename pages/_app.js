import '../styles/global.css'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
// import Link from 'next/link';

import { Nav, RouteGuard } from '../components';
export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
  <>
            <Head>
                <title>Next.js 11 - Basic HTTP Authentication Example</title>

                {/* eslint-disable-next-line @next/next/no-css-tags */}
                {/* <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" /> */}
            </Head>

            <div className="app-container bg-light">
                <Nav />
                <div className="container pt-4 pb-4">
                    <RouteGuard>
                        <Component {...pageProps} />
                    </RouteGuard>
                </div>
            </div>
        </>
  );
}

