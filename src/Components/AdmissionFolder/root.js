import { useState } from "react"
import StepOne from "./stepOne"
import StepTwo from "./stepTwo"
export const AdmissionRoot = () => {
    const [step, setStep] = useState(1)
const renderFrom =() =>{
    switch (step) {
        case 1: 
        return <StepOne setStep={setStep} />
        case 2: 
        return <StepTwo setStep={setStep} />
        default: 
        return <StepOne />
    }
}
    return (
        <div>
            {
                renderFrom()
            }
        </div>
    )
}