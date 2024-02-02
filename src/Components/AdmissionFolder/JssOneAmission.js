import React, { useState } from "react";
import PaystackButton from 'react-paystack';

// const JssAdmission = () => {
//     const publicKey = ""
//     const amount = "5000"
//     const [email, setEmail] = useState("")
//     const [name, setName] = useState("")
//     const [phone, setPhone] = useState("")

//     const componentProps = {
//         email,
//         amount,
//         metadata: {
//             name,
//             phone,
//         },
//         publicKey,
//         text: "Pay Now",
//         onSuccess: () =>
//             alert("Thanks for paaying"),

//         onClose: () => alert("You cancelled payment")

//     }
//     p

//     return (
//         <div>
//             <h1>Paystack Payment</h1>
//             <label>
//                 Name:
//                 <input type="type" value={name} onChange={(e) => setName(e.target.value)} />
//             </label> <br />
//             <label>
//                 Email:
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//             <br />
//             <label>
//                 Phone:
//                 <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
//             </label>
//             <br />
//             <button >Pay</button>
//         </div>
//     )
// }
// export default JssAdmission