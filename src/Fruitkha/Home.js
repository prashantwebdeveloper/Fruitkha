import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Home = () => {

  // (Timer) From Cart Banner Section
    const targetTime = new Date("2024-01-01").getTime();

    const [currentTime, setCurrentTime] = useState(Date.now());

    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);



  // Product-Icon Like & Unlike 
    const [like, setlike] = useState(false);

    const Like = () =>{
        if(!like){
            setlike(true)
        }
        else{
            setlike(false)
        }
    } 



  // GetProduct Table
    const [GetProductAdmin, setGetProductAdmin] = useState([]);

  // (Rule) FireStore Database-Admin
    const ProductCollection= collection(FirestoreDatabase,"AddProduct-Admin");

  // Get Admin AddProduct FireStore Database
    useEffect(() => {
        GetProduct();
    }, []);

    const GetProduct = async () =>{
        const getadmin= await getDocs(ProductCollection);

        console.log("GetProduct-Admin++", getadmin.docs);

        const a= [];

        getadmin.forEach((i)=>{
            a.push({
                ProductId : i.id,
                ProductImage : i.data().productimage,
                ProductName : i.data().productname,
                ProductPrice : i.data().productprice
            })
        });

        setGetProductAdmin(a);
    }



  // (Rule) FireStore Database-User
    const AddtoCartCollection= collection(FirestoreDatabase,"AddtoCart-User"); 

  // Add User AddtoCart FireStore Database
    const AddtoCart = async (cart) =>{
        const addtocartuser= await addDoc(AddtoCartCollection, {
            addtocartimage : cart.ProductImage,
            addtocartname : cart.ProductName,
            addtocartprice : cart.ProductPrice,
            addtocartquantity : 1
        });

        console.log("AddtoCart-User++", addtocartuser);

        // alert("Product Added to Cart SuccessFully");

        toast.success("Product Added to Cart SuccessFully", {
            position: "top-center",
            autoClose: 3000
        });
    }



  // (Rule) FireStore Database-User
    const WishListCollection= collection(FirestoreDatabase,"WishList-User"); 

  // Add User WishList FireStore Database
    const WishList = async (like) =>{
        const wishlistuser= await addDoc(WishListCollection, {
            wishlistimage : like.ProductImage,
            wishlistname : like.ProductName,
            wishlistprice : like.ProductPrice
        });

        console.log("WishList-User++", wishlistuser);

        // alert("Product Liked SuccessFully");

        toast.success("Product Liked SuccessFully", {
            position: "top-center",
            autoClose: 3000,
        });
    }



    
    return (
        <div>
         
            <div>
                {/* hero area */}
                <div className="hero-area hero-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 offset-lg-2 text-center">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Fresh &amp; Organic</p>
                                        <h1>Delicious Seasonal Fruits</h1>
                                        <div className="hero-btns">
                                            <Link to="/Shop" className="boxed-btn">Fruit Collection</Link>
                                            <Link to="/Contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end hero area */}
                {/* features list section */}
                <div className="list-section pt-80 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="list-box d-flex align-items-center">
                                    <div className="list-icon">
                                        <i className="fas fa-shipping-fast" />
                                    </div>
                                    <div className="content">
                                        <h3>Free Shipping</h3>
                                        <p>When order over $75</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="list-box d-flex align-items-center">
                                    <div className="list-icon">
                                        <i className="fas fa-phone-volume" />
                                    </div>
                                    <div className="content">
                                        <h3>24/7 Support</h3>
                                        <p>Get support all day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="list-box d-flex justify-content-start align-items-center">
                                    <div className="list-icon">
                                        <i className="fas fa-sync" />
                                    </div>
                                    <div className="content">
                                        <h3>Refund</h3>
                                        <p>Get refund within 3 days!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end features list section */}
                {/* product section */}
                <div className="product-section mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="section-title">
                                    <h3><span className="orange-text">Our</span> Products</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet
                                        beatae optio.</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="row">
                            {
                                GetProductAdmin.length === 0 ? (
                                    <div className="col-lg-12 col-md-6 text-center">
                                        <div className="single-product-item snp">
                                            <h3><span className='fs1'>No Product</span> <br /> <span className='fs2'>in Available.</span></h3>
                                        </div>
                                    </div>
                                ) : (
                                    GetProductAdmin.filter((i, index)=> (index < 3)).map((i)=>{
                                        return (
                                            <div className="col-lg-4 col-md-6 text-center" key={i.ProductId}>
                                                <div className="single-product-item">
                                                    {like ? (
                                                        <IoIosHeart className='like text-danger' size={26} />
                                                    ) : (
                                                        <IoIosHeartEmpty className='like' size={26} onClick={()=> WishList(i)} />
                                                    )}
                                                    <div className="product-image">
                                                        <Link to="/Single_Product"><img src={i.ProductImage} alt /></Link>
                                                    </div>
                                                    <h3>{i.ProductName}</h3>
                                                    <p className="product-price"><span>Per Kg</span> {i.ProductPrice}$ </p>
                                                    <Link className="cart-btn" onClick={()=> AddtoCart(i)}><i className="fas fa-shopping-cart" /> Add to Cart</Link>
                                                    <ToastContainer />
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            }
                        </div>

                        
                    </div>
                </div>
                {/* end product section */}
                {/* cart banner section */}
                <section className="cart-banner pt-100 pb-100">
                    <div className="container">
                        <div className="row clearfix">
                            {/*Image Column*/}
                            <div className="image-column col-lg-6">
                                <div className="image">
                                    <div className="price-box">
                                        <div className="inner-price">
                                            <span className="price">
                                                <strong>30%</strong> <br /> off per kg
                                            </span>
                                        </div>
                                    </div>
                                    <img src="assets/img/a.jpg" alt />
                                </div>
                            </div>
                            {/*Content Column*/}
                            <div className="content-column col-lg-6">
                                <h3><span className="orange-text">Deal</span> of the month</h3>
                                <h4>Hikan Strwaberry</h4>
                                <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique!
                                    Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit
                                    voluptatem accusant</div>
                                {/*Countdown Timer*/}
                                <div className="time-counter">
                                    <div className="time-countdown clearfix">
                                        <div className="counter-column">
                                            <div className="inner"><span className="count">{days}</span>Days</div>
                                        </div>
                                        <div className="counter-column">
                                            <div className="inner"><span className="count">{hours}</span>Hours</div>
                                        </div>
                                        <div className="counter-column">
                                            <div className="inner"><span className="count">{minutes}</span>Mins</div>
                                        </div>
                                        <div className="counter-column">
                                            <div className="inner"><span className="count">{seconds}</span>Secs</div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/Shop" className="cart-btn mt-3"><i className="fas fa-shopping-cart" /> Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end cart banner section */}
                {/* testimonail-section */}
                <div className="testimonail-section mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-center">
                                <div className="testimonial-sliders">
                                    <div className="single-testimonial-slider">
                                        <div className="client-avater">
                                            <img src="assets/img/avaters/avatar2.png" alt />
                                        </div>
                                        <div className="client-meta">
                                            <h3>David Niph <span>Local shop owner</span></h3>
                                            <p className="testimonial-body">
                                                " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto
                                                beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem accusantium "
                                            </p>
                                            <div className="last-icon">
                                                <i className="fas fa-quote-right" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end testimonail-section */}
                {/* advertisement section */}
                <div className="abt-section mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="abt-bg">
                                    <Link to="https://www.youtube.com/watch?v=hC4lemk_YqE" className="video-play-btn popup-youtube"><i className="fas fa-play" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="abt-text">
                                    <p className="top-sub">Since Year 1999</p>
                                    <h2>We are <span className="orange-text">Fruitkha</span></h2>
                                    <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac
                                        vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet
                                        sapien sed, interdum velit. Nam eu molestie lorem.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat
                                        veritatis minus, et labore minima mollitia qui ducimus.</p>
                                    <Link to="/About" className="boxed-btn mt-4">know more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end advertisement section */}
                {/* shop banner */}
                <section className="shop-banner">
                    <div className="container">
                        <h3>December sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
                        <div className="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
                        <Link to="/Shop" className="cart-btn btn-lg">Shop Now</Link>
                    </div>
                </section>
                {/* end shop banner */}
                {/* latest news */}
                <div className="latest-news pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="section-title">
                                    <h3><span className="orange-text">Our</span> News</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet
                                        beatae optio.</p>
                                </div>
                            </div>
                        </div>
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
                                        <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi.
                                            Praesent vitae mattis nunc, egestas viverra eros.</p>
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
                                        <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi.
                                            Praesent vitae mattis nunc, egestas viverra eros.</p>
                                        <Link to="/Single_News" className="read-more-btn">read more <i className="fas fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
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
                                        <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi.
                                            Praesent vitae mattis nunc, egestas viverra eros.</p>
                                        <Link to="/Single_News" className="read-more-btn">read more <i className="fas fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <Link to="/News" className="boxed-btn">More News</Link>
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

export default Home;
