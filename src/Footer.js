import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirestoreDatabase } from './FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Footer = () => {

  // Subscribe From input
    const [Subscribe, setSubscribe] = useState("");

  // (Rule) FireStore Database   
    const SubscribeCollection= collection(FirestoreDatabase,"Subscribe-User");

  // Add User Subscribe FireStore Database  
    const subscribe = async () =>{
        if(Subscribe){
            const user= await addDoc(SubscribeCollection, {
                email : Subscribe,
            });

            console.log("Subscribe-User++", user);

            // alert("Your Subscribe Sent SuccessFully");

            toast.success("Your Subscribe Sent SuccessFully", {
                position: "top-center",
                autoClose: 3000
            });

            setSubscribe("");
        }
        else{
            // alert("Please enter the Subscribe Value");

            toast.error("Please enter the Subscribe Value", {
                position: "top-center",
                autoClose: 3000
            });
        }
    }



    
    return (
        <div>

            <div>
                {/* footer */}
                <div className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box about-widget">
                                    <h2 className="widget-title">About us</h2>
                                    <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box get-in-touch">
                                    <h2 className="widget-title">Get in Touch</h2>
                                    <ul>
                                        <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                                        <li>support@fruitkha.com</li>
                                        <li>+00 111 222 3333</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box pages">
                                    <h2 className="widget-title">Pages</h2>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/About">About</Link></li>
                                        <li><Link to="/Shop">Shop</Link></li>
                                        <li><Link to="/News">News</Link></li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box subscribe">
                                    <h2 className="widget-title">Subscribe</h2>
                                    <p>Subscribe to our mailing list to get the latest updates.</p>
                                        <div className='form'>
                                            <input className='mr-1 email' type="email" placeholder="Email" value={Subscribe} onChange={(e)=> setSubscribe(e.target.value)} />
                                            <button type="submit" onClick={subscribe}><i className="fas fa-paper-plane" /></button>
                                            <ToastContainer />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end footer */}
                {/* copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p>Copyrights © 2019 - <Link to="https://imransdesign.com/" target='blank'>Imran Hossain</Link>, All Rights
                                    Reserved.</p>
                            </div>
                            <div className="col-lg-6 text-right col-md-12">
                                <div className="social-icons">
                                    <ul>
                                        <li><Link><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link><i className="fab fa-twitter" /></Link></li>
                                        <li><Link><i className="fab fa-instagram" /></Link></li>
                                        <li><Link><i className="fab fa-linkedin" /></Link></li>
                                        <li><Link><i className="fab fa-dribbble" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end copyright */}
            </div>


        </div>
    );
}

export default Footer;
