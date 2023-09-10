import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirestoreDatabase } from '../FirebaseConfig';
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';

const Cart = () => {

  // GetAddtoCart Table
    const [GetAddtoCartUser, setGetAddtoCartUser] = useState([]);

  // (Rule) FireStore Database-User
    const AddtoCartCollection= collection(FirestoreDatabase,"AddtoCart-User"); 

  // Get User AddtoCart FireStore Database
    useEffect(() => {
        GetAddtoCart();
    }, []);

    const GetAddtoCart = async () =>{
        const getaddtocartuser= await getDocs(AddtoCartCollection);

        console.log("GetAddtoCart-User++", getaddtocartuser.docs);

        const a= [];

        getaddtocartuser.forEach((i)=>{
            a.push({
                AddtoCartId : i.id,
                AddtoCartImage : i.data().addtocartimage,
                AddtoCartName : i.data().addtocartname,
                AddtoCartPrice : i.data().addtocartprice,
                AddtoCartQuantity : i.data().addtocartquantity
            })
        });

        setGetAddtoCartUser(a);
        setProductTotal(a);
    }

  // Delete User AddtoCart FireStore Database
    const DeleteAddtoCart = async (id) =>{
        const deleteaddtocartuser= doc(FirestoreDatabase,"AddtoCart-User", id);

        await deleteDoc(deleteaddtocartuser);

        // alert("Product in Shopping Cart Deleted SuccessFully");
                    
        toast.success("Product in Shopping Cart Deleted SuccessFully", {
            position: "top-center",
            autoClose: 3000
        });

        GetAddtoCart();
    }



  // Product Total Cart
    const [ProductTotal, setProductTotal] = useState();

    const TotalProduct= ProductTotal?.reduce((acc,curr)=>{
        return acc + curr.AddtoCartPrice * curr.AddtoCartQuantity
    },0)

    const Total= ProductTotal?.reduce((acc,curr)=>{
        return acc + curr.AddtoCartPrice * curr.AddtoCartQuantity
    },45)

    
    
  // Update User AddtoCart FireStore Database
    const UpdateAddtoCart = async (id, Quantity) =>{
        console.log("ProductId++", id);
              
        const UpdateQuantity = GetAddtoCartUser.map((i) =>
            i.AddtoCartId === id ? { ...i, AddtoCartQuantity: Quantity } : i
        );

        setGetAddtoCartUser(UpdateQuantity);
        setProductTotal(UpdateQuantity);

        const Image= GetAddtoCartUser.map((i)=> i.AddtoCartId === id && (i.AddtoCartImage));
        const Name= GetAddtoCartUser.map((i)=> i.AddtoCartId === id && (i.AddtoCartName));
        const Price= GetAddtoCartUser.map((i)=> i.AddtoCartId === id && (i.AddtoCartPrice));
        console.log(Image);
        console.log(Name);
        console.log(Price);
        
        const updateaddtocartuser= doc(FirestoreDatabase,"AddtoCart-User", id);

        await setDoc(updateaddtocartuser, {
            addtocartimage : Image[0],
            addtocartname : Name[0],
            addtocartprice : Price[0],
            addtocartquantity : Quantity
        });

        // alert("Product in Shopping Cart Updated SuccessFully");
                  
        toast.success("Product in Shopping Cart Updated SuccessFully", {
            position: "top-center",
            autoClose: 3000
        });

        GetAddtoCart();
    }



  // (Rule) FireStore Database-User
    const CheckOutCollection= collection(FirestoreDatabase,"CheckOut-User");

  // Add User CheckOut FireStore Database
    const CheckOut = async (check) =>{
        const checkoutuser= await addDoc(CheckOutCollection, {
            checkoutimage : check.AddtoCartImage,
            checkoutname : check.AddtoCartName,
            checkoutprice : check.AddtoCartPrice,
            checkoutquantity : check.AddtoCartQuantity
        });

        console.log("CheckOut-User++", checkoutuser);

        alert("Your Product Added to CheckOut SuccessFully");

        toast.success("Your Product Added to CheckOut SuccessFully", {
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
                                    <h1>Cart</h1>
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

                            <div className="col-lg-8 col-md-12">
                                <div className="cart-table-wrap">
                                    {
                                        GetAddtoCartUser.length === 0 ? (
                                            <table className="cart-table">
                                                <tbody>
                                                    <tr className="table-body-row snp2">
                                                        <td className="product-name">
                                                            <h3><span className='fs3'>No Product</span> <br /> <span className='fs4'>in Shopping Card.</span></h3>

                                                            <Link to="/Shop" className="cart-btn mt-3"><i className="fas fa-shopping-cart" /> Shop Now</Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>                                                                                                                         
                                        ) : (
                                            <table className="cart-table">
                                                <thead className="cart-table-head">
                                                    <tr className="table-head-row">
                                                        <th className="product-remove" />
                                                        <th className="product-image">Product Image</th>
                                                        <th className="product-name">Name</th>
                                                        <th className="product-price">Price</th>
                                                        <th className="product-quantity">Quantity</th>
                                                        <th className="product-total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        GetAddtoCartUser.map((i, index)=>{
                                                            return (
                                                                <tr className="table-body-row" key={i.AddtoCartId}>
                                                                    <td className="product-remove">
                                                                        <Link onClick={()=> DeleteAddtoCart(i.AddtoCartId)}><i className="far fa-window-close" /></Link>
                                                                    </td>
                                                                    <td className="product-image">
                                                                        <img src={i.AddtoCartImage} alt />
                                                                    </td>
                                                                    <td className="product-name">{i.AddtoCartName}</td>
                                                                    <td className="product-price">${i.AddtoCartPrice}</td>
                                                                    <td className="product-quantity">
                                                                        <input type="number" placeholder={0} defaultValue={i.AddtoCartQuantity} onChange={(e) => UpdateAddtoCart(i.AddtoCartId, parseInt(e.target.value))} />
                                                                    </td>
                                                                    <td className="product-total">{i.AddtoCartPrice * i.AddtoCartQuantity}</td>
                                                                    <ToastContainer />
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        )
                                    }
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="total-section">
                                    <table className="total-table">
                                        <thead className="total-table-head">
                                            <tr className="table-total-row">
                                                <th>Total</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="total-data">
                                                <td><strong>Subtotal: </strong></td>
                                                <td>${TotalProduct}</td>
                                            </tr>
                                            <tr className="total-data">
                                                <td><strong>Shipping: </strong></td>
                                                <td>$45</td>
                                            </tr>
                                            <tr className="total-data">
                                                <td><strong>Total: </strong></td>
                                                <td>${Total}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart-buttons">
                                        <Link to="/Shop" class="boxed-btn">Shop Now</Link>
                                        <Link className="boxed-btn black" onClick={CheckOut}>Check Out</Link>
                                    </div>
                                </div>
                                <div className="coupon-section">
                                    <h3>Apply Coupon</h3>
                                    <div className="coupon-form-wrap">
                                        <div className='form'>
                                            <p><input type="text" placeholder="Coupon" /></p>
                                            <p><input type="submit" value="Apply" /></p>
                                        </div>
                                    </div>
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

export default Cart;
