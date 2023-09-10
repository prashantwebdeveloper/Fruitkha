import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Single_Product = () => {

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
            autoClose: 3000
        });
    }




    return (
        <div>

            <div>
                {/* breadcrumb-section */}
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>See more Details</p>
                                    <h1>Single Product</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* single product */}
                <div className="single-product mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="single-product-img">
                                    <img src="assets/img/products/product-img-5.jpg" alt />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="single-product-content">
                                    <h3>Green apples have polyphenols</h3>
                                    <p className="single-product-pricing"><span>Per Kg</span> $50</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi
                                        cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi
                                        perferendis eos eum modi! Tempora, earum.</p>
                                    <div className="single-product-form">
                                        <form action="/">
                                            <input type="number" placeholder={0} />
                                        </form>
                                        <Link to="/Cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
                                        <p><strong>Categories: </strong>Fruits, Organic</p>
                                    </div>
                                    <h4>Share:</h4>
                                    <ul className="product-share">
                                        <li><Link><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link><i className="fab fa-twitter" /></Link></li>
                                        <li><Link><i className="fab fa-google-plus-g" /></Link></li>
                                        <li><Link><i className="fab fa-linkedin" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end single product */}
                {/* more products */}
                <div className="more-products mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="section-title">
                                    <h3><span className="orange-text">Related</span> Products</h3>
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
                {/* end more products */}
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

export default Single_Product;
