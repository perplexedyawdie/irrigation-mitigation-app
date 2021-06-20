import React, { useState, useContext } from 'react'
import axios from 'axios';
import AppContext from '../context/AppContext';
export default function recommendations() {
    const { data } = useContext(AppContext);
    const [resp, setresp] = useState(null)
    return (
        <div>
            <p className="title"></p>
        </div>
    )
}

recommendations.activeStep = 3;
