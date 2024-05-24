import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookSection from './BookSection';

const Books = () => {
    const [Data , setData ] = useState();
    useEffect(()=>{
        const fetch = async () => {
            await axios.get(`${window.location.origin}/book/getBook`).then((res)=>{
                setData(res.data.books)
            })
        }
        fetch() ; 
    },[])
    return (
        <div style={{ minHeight: '91.5vh' }} className='bg-dark'>
            <div className='text-white d-flex justify-content-center align-items-center py-3'>
                <h3 className='text-white'>Books Section</h3>
            </div>
            <div>
                {Data ? (
                    <div className='text-white'>
                        <BookSection data={Data}/>
                    </div>) : 
                    (<div className='text-white'>Loading </div> )     
                }
            </div>
  
        </div>
    )
}

export default Books