import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHeart } from "react-icons/io";

const Header = () => {


    return (
        <div>

            <div>
                {/*PreLoader*/}
                <div className="loader">
                    <div className="loader-inner">
                        <div className="circle" />
                    </div>
                </div>
                {/*PreLoader Ends*/}
                {/* header */}
                <div className="top-header-area" id="sticker">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 text-center">
                                <div className="main-menu-wrap">
                                    {/* logo */}
                                    <div className="site-logo">
                                        <Link to="/">
                                            <img src="assets/img/logo.png" alt />
                                        </Link>
                                    </div>
                                    {/* logo */}
                                    {/* menu start */}
                                    <nav className="main-menu">
                                        <ul>
                                            <li className="current-list-item"><Link to="/">Home</Link></li>

                                            <li><Link to="/About">About</Link></li>

                                            <li><Link to="/Shop">Shop</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/Shop">Shop</Link></li>
                                                    <li><Link to="/Single_Product">Single Product</Link></li>
                                                    <li><Link to="/WishList">WishList</Link></li>
                                                    <li><Link to="/Cart">Cart</Link></li>
                                                    <li><Link to="/CheckOut">Check Out</Link></li>
                                                </ul>
                                            </li>

                                            <li><Link to="/News">News</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/News">News</Link></li>
                                                    <li><Link to="/Single_News">Single News</Link></li>
                                                </ul>
                                            </li>
                                            
                                            <li><Link to="/Contact">Contact</Link></li>
                                            
                                            <li>
                                                <div className="header-icons">
                                                    <Link to="/WishList"><IoIosHeart size={18} /></Link> {/** className='like' **/}
                                                    <Link className="shopping-cart" to="/Cart"><i className="fas fa-shopping-cart" /></Link>
                                                    {/**<Link className="mobile-hide search-bar-icon" to="#"><i className="fas fa-search" /></Link>**/}
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                    {/**<Link className="mobile-show search-bar-icon" to="#"><i className="fas fa-search" /></Link>**/}
                                    <Link className="mobile-show search-bar-icon shopping-cart" to="/Cart"><i className="fas fa-shopping-cart" /></Link>
                                    <div className="mobile-menu" />
                                    {/* menu end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end header */}
                {/* search area */}
                <div className="search-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="close-btn"><i className="fas fa-window-close" /></span>
                                <div className="search-bar">
                                    <div className="search-bar-tablecell">
                                        <h3>Search For:</h3>
                                        <input type="text" placeholder="Keywords" />
                                        <button type="submit">Search <i className="fas fa-search" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end search area */}
            </div>


        </div>
    );
}

export default Header;
