import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import AppContext from '../context/AppContext';
export default function recommendations() {
    const { data } = useContext(AppContext);
    const [resp, setresp] = useState(null)

    useEffect(() => {
        if (data.texture) {
            axios.post('api/hello', data.texture)
                .then((result) => {
                    console.log(result.data)
                    setresp(result.data)
                }).catch((err) => {
                    console.log(err)
                });
        }
    }, [data.texture])
    return (
        <div >
            {
                resp ? resp.map((r, idx) => {
                    return (
                        <div className="mt-6" key={idx} className="box">
                        <p className="title">{r.soilType}</p>
                        <p className="subtitle">{r.msg}</p>
                    </div>)
                }) : <></>
            }

        </div>
    )
}

recommendations.activeStep = 3;
