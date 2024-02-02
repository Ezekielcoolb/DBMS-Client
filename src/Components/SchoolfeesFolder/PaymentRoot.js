import { useState } from "react"
import PayOne from "./payOne"
import PayTwo from "./payTwo"
export const PaymentRoot = () => {

    const [step, setStep] = useState(1)
const renderFrom =() =>{
    switch (step) {
        case 1: 
        return <PayOne setStep={setStep} />
        case 2: 
        return <PayTwo setStep={setStep} />
        default: 
        return <PayOne />
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