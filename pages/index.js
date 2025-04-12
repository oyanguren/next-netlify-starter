import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chat Bot UA</title>
        <link rel="icon" href="/favicon.ico" />    
      </Head>

      <main>
        <Header title="UA FAQ 1" />
        <p className="description">
          Vamos a Comenzar <code>pages/index.js</code>
    <a href="chat.html">Ir a Otra Página</a>
        </p>




    
      </main>

      <Footer />
    </div>
  )
}
