import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Updatebook.css';
function Updatebook(){

    const location = useLocation();
    const itemObj = location.state;
    
    // Check if state is defined before destructuring
    const { bookname, author, image, price, description } = itemObj ;
    console.log("bookname  :" + itemObj);
    const [Data, setData] = useState(
        {
            bookname: bookname,
            description: description,
            price: price,
            author: author,
            image: image
        }
    );
    const change = (e) => {
        const { name, value } = e.target;
        setData({...Data , [name] : value})
    }
    // const submit = async(e)=>{
    //     e.preventDefault() ; 
    //     await axios.post("http://localhost:1000/book/add" , Data).then((res)=>{
    //         console.log(res);
    //         if(res.status === 200){
    //             setsubmitted(true);
    //             console.log(submitted);

    //         }
    // })
    const id = itemObj._id; 
    console.log(id);
    const [submitted, setsubmitted] = useState(false);
    const submitt = async(e) => {
        e.preventDefault() ; 
        await axios.put(`${window.location.origin}/book/updateBook/`+id).then((res)=>{
            console.log(res);
            console.log("Submitted Successfuly");
            setsubmitted(true);
        })
    }
    console.log(Data);

    return (
        submitted ? <div className='bg-dark d-flex justify-content-center align-item-center' style={{minHeight: "91.5vh"}}>
            <h1 className='text-white my-3'>Updated Successfully</h1>
        </div> : 
        <div className="book-form-container my-4">
        <h1>Update Book</h1>
            <div className="form-group">
                <label htmlFor="bookname">Book Name</label>
                <input
                    type="text"
                    id="bookname"
                    name="bookname"
                    value={Data.bookname}
                    onChange={change}
                />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={Data.author}
                    onChange={change}
                />
            </div>
            <div className="form-group">
                <label htmlFor="imageurl">Image URL</label>
                <input
                    type="text"
                    id="imageurl"
                    name="image"
                    value={Data.image}
                    onChange={change}

                />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={Data.price}
                    onChange={change}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={Data.description}
                    onChange={change}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitt}>Submit</button>
    </div>

    );
};

export default Updatebook;
