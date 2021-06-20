import React from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

export default function StepperComp({ activeStep }) {
    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel style={{backgroundColor: 'transparent'}}>
                <Step>
                    <StepLabel>
                        Soil type
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Log data
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Recommendations
                    </StepLabel>
                </Step>
            </Stepper>
        </div>
    )
}
