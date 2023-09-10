import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {


    return (
        <div>

            <div>
                {/* breadcrumb-section */}
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>Organic Information</p>
                                    <h1>News Article</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* latest news */}
                <div className="latest-news mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <Link to="/Single_News">
                                        <div className="latest-news-bg news-bg-1" />
                                    </Link>
                                    <div className="news-text-box">
                                        <h3><Link to="/Single_News">You will vainly look for fruit on it in autumn.</Link></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                                            laborum autem, dolores inventore, beatae nam.</p>
                                        <Link to="/Single_News" className="read-more-btn">read more <i className="fas fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <Link to="/Single_News">
                                        <div className="latest-news-bg news-bg-2" />
                                    </Link>
                                    <div className="news-text-box">
                                        <h3><Link to="/Single_News">A man's worth has its season, like tomato.</Link></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                                            laborum autem, dolores inventore, beatae nam.</p>
                                        <Link to="/Single_News" className="read-more-btn">read more <i className="fas fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <Link to="/Single_News">
                                        <div className="latest-news-bg news-bg-3" />
                                    </Link>
                                    <div className="news-text-box">
                                        <h3><Link to="/Single_News">Good thoughts bear good fresh juicy fruit.</Link></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                                            laborum autem, dolores inventore, beatae nam.</p>
                                        <Link to="/Single_News" className="read-more-btn">read more <i className="fas fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <Link to="/Single_News">
                                        <div className="latest-news-bg news-bg-4" />
                                    </Link>
                                    <div className="news-text-box">
                                        <h3><Link to="/Single_News">Fall in love with the fresh orange</Link></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                                            laborum autem, dolores inventore, beatae nam.</p>
                                        <Link to="/Single_News" className="read-more-btn">read more <i className="fas fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <Link to="/Single_News">
                                        <div className="latest-news-bg news-bg-5" />
                                    </Link>
                                    <div className="news-text-box">
                                        <h3><Link to="/Single_News">Why the berries always look delecious</Link></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                                            laborum autem, dolores inventore, beatae nam.</p>
                                        <Link to="/Single_News" className="read-more-btn">read more <i className="fas fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <Link to="/Single_News">
                                        <div className="latest-news-bg news-bg-6" />
                                    </Link>
                                    <div className="news-text-box">
                                        <h3><Link to="/Single_News">Love for fruits are genuine of John Doe</Link></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2018</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                                            laborum autem, dolores inventore, beatae nam.</p>
                                        <Link to="/Single_News" className="read-more-btn">read more <i className="fas fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <div className="pagination-wrap">
                                            <ul>
                                                <li><Link>Prev</Link></li>
                                                <li><Link>1</Link></li>
                                                <li><Link className="active">2</Link></li>
                                                <li><Link>3</Link></li>
                                                <li><Link>Next</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end latest news */}
                {/* logo carousel */}
                <div className="logo-carousel-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo-carousel-inner logo-icon">
                                    <div className="single-logo-item">
                                        <img src="assets/img/company-logos/1.png" alt />
                                    </div>
                                    <div className="single-logo-item">
                                        <img src="assets/img/company-logos/2.png" alt />
                                    </div>
                                    <div className="single-logo-item">
                                        <img src="assets/img/company-logos/3.png" alt />
                                    </div>
                                    <div className="single-logo-item">
                                        <img src="assets/img/company-logos/4.png" alt />
                                    </div>
                                    <div className="single-logo-item">
                                        <img src="assets/img/company-logos/5.png" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end logo carousel */}
            </div>


        </div>
    );
}

export default News;
