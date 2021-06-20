import '../sass/styles.scss'
import { useState } from 'react'
import Head from 'next/head'
import Stepper from '../components/Stepper'
import AppContext from '../context/AppContext'
function MyApp({ Component, pageProps }) {
  const [texture, setTexture] = useState(null)
  return (<>
    <Head>
      <title>Irrigation Mitigation</title>
      <meta name="description" content="Save water with mother Nature's help while keeping your plants hydrated!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className="hero is-fullheight" style={{ backgroundColor: '#FFAF3F' }}>
      <AppContext.Provider value={{data: {texture, setTexture}}}>
      {
        Component.hasOwnProperty("activeStep") ?
          <div className="hero-body is-align-items-flex-start">
            <div className="container">
              <Stepper activeStep={Component.activeStep} />
              <Component {...pageProps} />
            </div>
          </div>
          :
          <div className="hero-body">
            <div className="container">
              <Component {...pageProps} />
            </div>
          </div>

      }
      </AppContext.Provider>

      <div className="hero-foot is-flex is-justify-content-center">
        <a href="/about" className="subtitle is-link mb-4">Attributions</a>
      </div>
    </section>
  </>)
}

export default MyApp
