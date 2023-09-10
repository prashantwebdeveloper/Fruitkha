import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const WishList = () => {

  // GetWishList Table
    const [GetWishListUser, setGetWishListUser] = useState([]);

  // (Rule) FireStore Database-User
    const WishListCollection= collection(FirestoreDatabase,"WishList-User"); 

  // Get User WishList FireStore Database
    useEffect(() => {
        GetWishList();
    }, []);

    const GetWishList = async () =>{
        const getwishlistuser= await getDocs(WishListCollection);

        console.log("GetWishList-User++", getwishlistuser.docs);

        const a= [];

        getwishlistuser.forEach((i)=>{
            a.push({
                WishListId : i.id,
                WishListImage : i.data().wishlistimage,
                WishListName : i.data().wishlistname,
                WishListPrice : i.data().wishlistprice
            })
        });

        setGetWishListUser(a);
    }

  // Delete User WishList FireStore Database
    const DeleteWishList = async (id) =>{
        const deletewishlistuser= doc(FirestoreDatabase,"WishList-User", id);

        await deleteDoc(deletewishlistuser);

        // alert("Product Unliked SuccessFully");

        toast.success("Product Unliked SuccessFully", {
            position: "top-center",
            autoClose: 3000
        });

        GetWishList();
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
                                    <h1>WishList</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* cart */}
                <div className="cart-section mt-150 mb-150">


                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="cart-table-wrap">
                                    <table className="cart-table">
                                        <tbody>
                                            {
                                                GetWishListUser.length === 0 ? (
                                                    <tr className="table-body-row">
                                                        <td className="product-name">
                                                            <h3><span className='fs3'>No Product Likes</span> <br /> <span className='fs4'>in Wishlist.</span></h3>
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    GetWishListUser.map((i)=>{
                                                        return (
                                                            <tr className="table-body-row" key={i.WishListId}>
                                                                <td className="product-remove"><Link onClick={()=> DeleteWishList(i.WishListId)}><i className="far fa-window-close" /></Link></td>
                                                                <td className="product-image"><img src={i.WishListImage} alt /></td>
                                                                <td className="product-name">{i.WishListName}</td>
                                                                <td className="product-price">${i.WishListPrice}</td>
                                                                <ToastContainer />
                                                            </tr>
                                                        )
                                                    })
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* end cart */}
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

export default WishList;
