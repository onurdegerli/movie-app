import React from 'react';
import { Link } from "react-router-dom";

export const Header = props => {
    return (
        <header>
            <div className="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                        <strong>MMMDB(My Movie Database)</strong>
                    </a>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link className="p-2 text-white" to="/search">Search</Link>
                        <Link className="p-2 text-white" to="/wishList">Whishlist</Link>
                        <Link className="p-2 text-white" to="/watchedList">Watched</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;