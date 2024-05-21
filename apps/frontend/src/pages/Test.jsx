import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Test = () => {
    const [response, setResponse] = useState('')

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

    return (
        <div className='flex justify-center items-center min-h-screen text-center'>
            <div>
                <h5 className='font-bold'>Test</h5>
                <p>{response}</p>
            </div>
        </div>
    )
}

export default Test