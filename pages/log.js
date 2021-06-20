import React, { useState, useContext } from 'react'
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from 'next/router'
import AppContext from '../context/AppContext';

export default function log() {
    const router = useRouter()
    const [total, setTotal] = useState(0)
    const [clay, setClay] = useState(0)
    const [sand, setSand] = useState(0)
    const [silt, setSilt] = useState(0)
    const { data } = useContext(AppContext);


    function handleLetsGoClick(e) {
        e.preventDefault()
        if ((parseInt(clay) + parseInt(sand) + parseInt(silt)) == parseInt(total)) {
            router.push('recommendations')
            data.setTexture({
                "clay": clay/total * 100,
                "sand": sand/total * 100,
                "silt": silt/total * 100
            })
        } else {
            console.log(parseInt(clay), parseInt(sand), parseInt(silt), parseInt(total))
            console.log(parseInt(clay) + parseInt(sand) + parseInt(silt))
            alert('Values should add up to total!')
        }
    }
    return (
        <div className="">
            <div className="mt-6">
                <h1 className="title has-text-centered">Log that data!</h1>
            </div>

            <div className="field is-horizontal mt-6">
                <div className="field-label is-normal">
                    <label className="label">Total Sediment Height</label>
                </div>
                <div className="field-body">
                    <div className="field is-flex is-flex-direction-column is-justify-content-center">
                        <p className="control is-expanded has-icons-left">
                            <input value={total} onChange={e => setTotal(e.target.value)} className="input" type="number" style={{ width: '30%' }} />
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Height of Clay</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input value={clay} onChange={e => setClay(e.target.value)} className="input" type="number" style={{ width: '30%' }} />  {total > 0 ? `/${total}` : null}
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Height of Sand</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input value={sand} onChange={e => setSand(e.target.value)} className="input" type="number" style={{ width: '30%' }} />  {total > 0 ? `/${total}` : null}
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Height of Silt</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input value={silt} onChange={e => setSilt(e.target.value)} className="input" type="number" style={{ width: '30%' }} />  {total > 0 ? `/${total}` : null}
                        </p>
                    </div>
                </div>
            </div>
            <div className="is-flex is-justify-content-center is-align-items-center mt-6">
                <button onClick={handleLetsGoClick} className="button is-outlined is-link is-large is-rounded" style={{ width: '40%' }}>Let's gooo! <BsChevronRight className="ml-4" /></button>
            </div>
        </div>
    )
}

log.activeStep = 1;
