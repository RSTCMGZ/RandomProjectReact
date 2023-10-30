import React, { useEffect, useState } from 'react'
import Axios from "axios"


function App() {
    const [catFact, setCatFact] = useState("")

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        })
    }

    useEffect(() => {
        fetchCatFact()
    }, [])


    return (
        <div className=''>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <button className='btn btn-primary' onClick={fetchCatFact}>Generate Cat Fact</button>
            </div>

            <div className='d-flex justify-content-center align-items-center mt-5 fw-bold'>

                <p>{catFact} </p>
            </div>
        </div>
    )
}

export default App