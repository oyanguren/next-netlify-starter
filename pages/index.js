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
        <Header title="UA FAQ" />
        <p className="description">
          Vamos a Comenzar <code>pages/index.js</code>
        </p>

        <script type="text/javascript">
          (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '67f5be23ddeee1e64e3819f4' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production',
                  voice: {
                    url: "https://runtime-api.voiceflow.com"
                  }
                });
              }
              v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
          })(document, 'script');
        </script>




    
      </main>

      <Footer />
    </div>
  )
}
