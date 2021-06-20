import styles from '../styles/Home.module.css'
import { BsCheckCircle, BsChevronRight } from "react-icons/bs";
import Image from 'next/image'
import gardener from '../public/gardener.png'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  function handleGetStartedClick(e) {
    e.preventDefault()
    router.push('soiltype')
    
  }
  return (
    <div className="columns">
      <div className="column is-flex is-align-items-center">
        <div>
          <h1 className="title is-size-1">Irrigation Mitigation</h1>
          <p className="has-text-weight-medium block">Let Mother Nature help you to reduce the
            <br /> amount of water needed to keep your
            <br /> garden healthy by:</p>
          <div className="block">
            <ul>
              <li className="is-flex is-align-items-center mb-2"><BsCheckCircle className="mr-3" /> Determining the soil type.</li>
              <li className="is-flex is-align-items-center mb-2"><BsCheckCircle className="mr-3" /> Logging the recorded measurements.</li>
              <li className="is-flex is-align-items-center mb-2"><BsCheckCircle className="mr-3" /> Coordinating with the weather to keep your plants hydrated!</li>
            </ul>
          </div>
          <div className="mt-6">
            <button onClick={handleGetStartedClick} className="mt-6 is-fullwidth button is-large is-link is-outlined is-rounded">Get Started <BsChevronRight className="ml-4" /></button>
          </div>
        </div>
      </div>
      <div className="column">
        <Image src={gardener} placeholder="blur" alt="Picture of woman gardening" />
      </div>
    </div>
  )
}
