import React, { useState } from 'react'
import Axios from "axios"


// function App() {
//     const [catFact, setCatFact] = useState("")

//     const fetchCatFact = () => {
//         Axios.get("https://catfact.ninja/fact").then((res) => {
//             setCatFact(res.data.fact);
//         })
//     }

//     useEffect(() => {
//         fetchCatFact()
//     }, [])


//     return (
//         <div className=''>
//             <div className='d-flex justify-content-center align-items-center mt-5'>
//                 <button className='btn btn-primary' onClick={fetchCatFact}>Generate Cat Fact</button>
//             </div>

//             <div className='d-flex justify-content-center align-items-center mt-5 fw-bold'>

//                 <p>{catFact} </p>
//             </div>
//         </div>
//     )
// }
function App() {
    const [generatedExcuse, setGeneratedExcuse] = useState("")
    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
            setGeneratedExcuse(res.data[0].excuse)
        })
    }

    return (
        <div className='App'>
            <h1>Generate An Excuse</h1>
            <button onClick={() => fetchExcuse("party")}>Party</button>
            <button onClick={() => fetchExcuse("family")}>Family</button>
            <button onClick={() => fetchExcuse("office")}>Office</button>
            <p>{generatedExcuse}</p>
        </div>
    )
}
export default App