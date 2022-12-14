import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Coding Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />

        <Feed />

        <Widgets />
      </main>

      
    </div>
  )
}

export default Home
