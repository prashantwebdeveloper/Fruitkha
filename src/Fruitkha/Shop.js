import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Shop = () => {

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
                                    <p>Fresh and Organic</p>
                                    <h1>Shop</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* products */}
                <div className="product-section mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-filters">
                                    <ul>
                                        <li className="active" data-filter="*">All</li>
                                        <li data-filter=".strawberry">Strawberry</li>
                                        <li data-filter=".berry">Berry</li>
                                        <li data-filter=".lemon">Lemon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="row product-lists">
                            {
                                GetProductAdmin.length === 0 ? (
                                    <div className="col-lg-12 col-md-6 text-center">
                                        <div className="single-product-item snp">
                                            <h3><span className='fs1'>No Product</span> <br /> <span className='fs2'>in Shop.</span></h3>
                                        </div>
                                    </div>
                                ) : (
                                    GetProductAdmin.map((i)=>{
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
                {/* end products */}
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

export default Shop;
