import Layout from 'components/layout/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Omnis-tec Test</title>
        <meta name="description" content="Omnis-tec Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout />
      </main>
    </div>
  )
}

export default Home;
