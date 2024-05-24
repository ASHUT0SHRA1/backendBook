import React, { useState } from 'react'
import axios from 'axios';
const Addbook = () => {
    const [Data, setData] = useState(
        {
            bookname: "",
            description: "",
            price: "",
            author: "",
            image: ""
        }
    );
    
    const change = (e) => {
        const { name, value } = e.target;
        setData({...Data , [name] : value})
    }
    const [submitted, setsubmitted] = useState(false);
    console.log(submitted);
    const submit = async(e)=>{
        e.preventDefault() ; 
        await axios.post(`${window.location.origin}/book/add` , Data).then((res)=>{
            console.log(res);
            if(res.status === 200){
                setsubmitted(true);
                console.log(submitted);

            }
    })

    }
    console.log(Data);
    return (
        submitted ? <div style={{ minHeight: '91.5vh' }} className='bg-dark d-flex justify-content-center align-item-center'>
            <h1 className='text-white'>Book Submitted Successfully</h1>
        </div> : 
        <div style={{ minHeight: '91.5vh' }} className='bg-dark d-flex justify-content-center align-item-center'>
            <div className='container p-4'>

                <div className="mb-3">
                    <label for="Bookname" className="form-label text-white">Book Name</label>
                    <input type="text" className="form-control" name='bookname' id="Bookname" placeholder='Enter book name' onChange={change} value={Data.bookname} />
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label text-white">Enter Description </label>
                    <input type="text" className="form-control" name='description' id="description" placeholder='Enter Description' onChange={change} value={Data.description}/>
                </div>
                <div className="mb-3">
                    <label for="author" className="form-label text-white">Enter Author Name </label>
                    <input type="text" className="form-control" id="author" name='author' placeholder='Enter Author name ' onChange={change} value={Data.author}/>
                </div>
                <div className="mb-3">
                    <label for="imageURL" className="form-label text-white">Enter image URL </label>
                    <input type="text" className="form-control" id="imageURL" name='image' placeholder='Enter imageURL' onChange={change} value={Data.image}/>
                </div>
                <div className="mb-3">
                    <label for="price" className="form-label text-white">Enter Price </label>
                    <input type="text" className="form-control" id="price" name='price' placeholder='Enter price' onChange={change} value={Data.price}/>
                </div>
                <div>
                    <button className='btn btn-primary btn-sucess' onClick={submit}>SUBMIT</button>
                </div>
            </div>

        </div>
    )
}

export default Addbook