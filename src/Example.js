import React, { useEffect, useState } from 'react'
import Axios from "axios"


function Example() {
    const [name, setName] = useState()
    const [predictedAge, setPredictedAge] = useState(null)
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setPredictedAge(res.data)
        })
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center  mt-5'>
                <input placeholder='Ex. Reso...' onChange={(event) => {
                    setName(event.target.value)
                }} />
            </div>

            <div className='d-flex justify-content-center align-items-center mt-5'>
                <button className='btn btn-primary' onClick={fetchData}>Predict Age</button>
            </div>
            <h1 className='d-flex justify-content-center align-items-center mt-5'>Name :{predictedAge?.name}</h1>
            <h2 className='d-flex justify-content-center align-items-center mt-5'>Predicted Age:{predictedAge?.age}</h2>
            <h2 className='d-flex justify-content-center align-items-center mt-5'>Count :{predictedAge?.count}</h2>
        </div>
    )
}

export default Example