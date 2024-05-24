import React  , {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BookSection.css';
import axios from 'axios';
const BookSection = ({ data }) => {
    const [mdata, setmdata] = useState(data);
    const navigate = useNavigate();
    const  deletee=(bookid)=> {
        console.log(bookid);
        axios.delete(`${window.location.origin}/book/deleteBook/`+bookid).then((res)=>{
            let filterData = mdata.filter((data)=>data._id !== bookid )
            console.log(filterData);
            setmdata([...filterData])
        })
    }
    // console.log("HSH");
    // console.log(mdata);
    return (
        <div className='book-section bg-dark'>
            {mdata && mdata.map((item, index) => (
                <div className='card-container' key={index}>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={item.image} alt="image of the respective books" />
                        </div>
                        <div className='card-content'>
                            <h3 className='book-title'>{item.bookname}</h3>
                            <p className='book-author'>{item.author}</p>
                            <p className='book-description'>{item.description.slice(0, 30)}...</p>
                            <p className='book-price'>&#8377;  {item.price}</p>
                            <div className='d-flex justify-content-around align-item-center'>
                            <button className='btn btn-primary' onClick={() => navigate('/update', {state : item})}>
                                {/* <Link to='/update'  state={{item}} className='text-white' style={{textDecoration:"none"}}> */}
                                Update 
                                {/* </Link> */}
                                </button>
                            <button className='btn btn-danger' onClick={()=>deletee(item._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookSection;
