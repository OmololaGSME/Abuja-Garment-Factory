import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Test = () => {
    const [response, setResponse] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const getResponse = async () => {
            try {
                const res = await axios.get('/api/');
                console.log(res.data);
                setResponse(res.data);
            } catch (error) {
                console.error('Error fetching response:', error);
            }
        };

        getResponse();
    }, []);

    const handleNavigateAboutPage = () => {
        navigate('/about')
    }

    return (
        <div className='flex justify-center items-center min-h-screen text-center'>
            <div>
                <h5 className='font-bold'>Test</h5>
                <p>{response}</p>
                <button onClick={handleNavigateAboutPage}>About page</button>
            </div>
        </div>
    )
}

export default Test