import React, { useState } from 'react'
import Axios from "axios"


function App() {
    const [catFact, setCatFact] = useState("")
    Axios.get("https://catfact.ninja/fact").then((res) => {
        console.log(res.data);
    })
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <button className='btn btn-primary'>Generate Cat Fact</button>
            <p> </p>
        </div>
    )
}

export default App