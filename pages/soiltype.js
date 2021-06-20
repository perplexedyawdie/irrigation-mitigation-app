import React from 'react'
import Image from 'next/image'
import style from '../styles/soiltype.module.css'
import marker from '../public/marker.png'
import h48 from '../public/48h.png'
import detergent from '../public/detergent.png'
import jar from '../public/jar.png'
import ruler from '../public/ruler.png'
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from 'next/router'

export default function soiltype() {
    const router = useRouter()
    
    function handleWhatsNextClick(e) {
        e.preventDefault()
        router.push('log')
    }
    return (
        <>
            <div className="mt-6 is-flex is-justify-content-center">
                <h1 className="title">What do I need?</h1>
            </div>
            <div className="mt-6 is-flex is-justify-content-space-between is-align-items-center">
                <div className="box">
                    <Image src={marker} width={150} height={150} placeholder="blur" />
                    <h3 className="subtitle has-text-centered">Marker</h3>
                </div>
                <div className="box">
                    <Image src={h48} width={150} height={150} placeholder="blur" />
                    <h3 className="subtitle has-text-centered">48 hrs</h3>
                </div>
                <div className="box">
                    <Image src={detergent} width={150} height={150} placeholder="blur" />
                    <h3 className="subtitle has-text-centered">Detergent</h3>
                </div>
                <div className="box">
                    <Image src={jar} width={150} height={150} placeholder="blur" />
                    <h3 className="subtitle has-text-centered">Jar</h3>
                </div>
                <div className="box mb-5">
                    <Image src={ruler} width={150} height={150} placeholder="blur" />
                    <h3 className="subtitle has-text-centered">Ruler</h3>
                </div>
            </div>
            <div className="mt-6 is-flex is-justify-content-center">
                <h1 className="title" >What do I do with these things?</h1>
            </div>
            <div className="mt-6 is-flex is-justify-content-center">
                <ol>
                    <li className="block">
                        Get enough soil from your garden to fill 1/3 of the jar. <br />Be sure to yeet anything that isn't soil, stones/sticks/leaves, that bug etc
                    </li>
                    <li className="block">
                        Add water to the jar until almost full.
                    </li>
                    <li className="block">
                        Add 1tsp of water softener or dishwasher detergent powder.
                    </li>
                    <li className="block">
                        Shake <em>vigorously</em> for 10mins.
                    </li>
                    <li className="block">
                        Let it chill out undisturbed in a corner for 2 days.
                    </li>
                    <li className="block">
                        Measure the total height of the three layers then the heights of the <br />individual layers. The lowermost layer is sand, followed by silt then it's <br />topped off with clay. Write these 4 values down somewhere, we'll need <br />them in a bit.
                    </li>
                </ol>
            </div>
            <div className="is-flex is-justify-content-center is-align-items-center mt-6">
                <button onClick={handleWhatsNextClick} className="button is-outlined is-link is-large is-rounded" style={{ width: '40%' }}>What's next? <BsChevronRight className="ml-4" /></button>
            </div>
        </>
    )
}

soiltype.activeStep = 0;
