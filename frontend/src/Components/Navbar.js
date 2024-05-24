import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div style={{borderBottom : '2px solid white'}}>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar scroll</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto  my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item ">
                                <Link className='nav-link text-white active' to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link text-white active' to="/book">
                                Books
                            </Link>
                            </li>

                            <li className="nav-item">
                            <Link className='nav-link text-white active' to="/addBooks">
                                Add Books
                            </Link>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar