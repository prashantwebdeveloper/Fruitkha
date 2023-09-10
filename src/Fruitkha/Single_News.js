import React from 'react';
import { Link } from 'react-router-dom';

const Single_News = () => {


    return (
        <div>

            <div>
                {/* breadcrumb-section */}
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>Read the Details</p>
                                    <h1>Single Article</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* single article section */}
                <div className="mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="single-article-section">
                                    <div className="single-article-text">
                                        <div className="single-artcile-bg" />
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <h2>Pomegranate can prevent heart disease</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem
                                            fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error
                                            fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum
                                            perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate
                                            dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae
                                            laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, praesentium, dicta. Dolorum
                                            inventore molestias velit possimus, dolore labore aliquam aperiam architecto quo
                                            reprehenderit excepturi ipsum ipsam accusantium nobis ducimus laudantium.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum est aperiam voluptatum id
                                            cupiditate quae corporis ex. Molestias modi mollitia neque magni voluptatum, omnis
                                            repudiandae aliquam quae veniam error! Eligendi distinctio, ab eius iure atque ducimus
                                            id deleniti, vel alias sint similique perspiciatis saepe necessitatibus non eveniet, quo
                                            nisi soluta.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt beatae nemo quaerat,
                                            doloribus obcaecati odio!</p>
                                    </div>
                                    <div className="comments-list-wrap">
                                        <h3 className="comment-count-title">3 Comments</h3>
                                        <div className="comment-list">
                                            <div className="single-comment-body">
                                                <div className="comment-user-avater">
                                                    <img src="assets/img/avaters/avatar1.png" alt />
                                                </div>
                                                <div className="comment-text-body">
                                                    <h4>Jenny Joe <span className="comment-date">Aprl 26, 2020</span> <Link>reply</Link></h4>
                                                    <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna,
                                                        maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros
                                                        porttitor, in interdum ante faucibus Suspendisse lacinia velit a eros
                                                        porttitor, in interdum ante faucibus.</p>
                                                </div>
                                                <div className="single-comment-body child">
                                                    <div className="comment-user-avater">
                                                        <img src="assets/img/avaters/avatar3.png" alt />
                                                    </div>
                                                    <div className="comment-text-body">
                                                        <h4>Simon Soe <span className="comment-date">Aprl 27, 2020</span> <Link>reply</Link></h4>
                                                        <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem
                                                            magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia
                                                            velit a eros porttitor, in interdum ante faucibus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-comment-body">
                                                <div className="comment-user-avater">
                                                    <img src="assets/img/avaters/avatar2.png" alt />
                                                </div>
                                                <div className="comment-text-body">
                                                    <h4>Addy Aoe <span className="comment-date">May 12, 2020</span> <Link>reply</Link></h4>
                                                    <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna,
                                                        maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros
                                                        porttitor, in interdum ante faucibus Suspendisse lacinia velit a eros
                                                        porttitor, in interdum ante faucibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-template">
                                        <h4>Leave a comment</h4>
                                        <p>If you have a comment dont feel hesitate to send us your opinion.</p>
                                        <form action="/">
                                            <p>
                                                <input type="text" placeholder="Your Name" />
                                                <input type="email" placeholder="Your Email" />
                                            </p>
                                            <p><textarea type="message" cols={30} rows={10} placeholder="Your Message"/></p>
                                            <p><input type="submit" defaultValue="Submit" /></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar-section">
                                    <div className="recent-posts">
                                        <h4>Recent Posts</h4>
                                        <ul>
                                            <li><Link to="/Single_News">You will vainly look for fruit on it in autumn.</Link></li>
                                            <li><Link to="/Single_News">A man's worth has its season, like tomato.</Link></li>
                                            <li><Link to="/Single_News">Good thoughts bear good fresh juicy fruit.</Link></li>
                                            <li><Link to="/Single_News">Fall in love with the fresh orange</Link></li>
                                            <li><Link to="/Single_News">Why the berries always look delecious</Link></li>
                                        </ul>
                                    </div>
                                    <div className="archive-posts">
                                        <h4>Archive Posts</h4>
                                        <ul>
                                            <li><Link to="/Single_News">JAN 2019 (5)</Link></li>
                                            <li><Link to="/Single_News">FEB 2019 (3)</Link></li>
                                            <li><Link to="/Single_News">MAY 2019 (4)</Link></li>
                                            <li><Link to="/Single_News">SEP 2019 (4)</Link></li>
                                            <li><Link to="/Single_News">DEC 2019 (3)</Link></li>
                                        </ul>
                                    </div>
                                    <div className="tag-section">
                                        <h4>Tags</h4>
                                        <ul>
                                            <li><Link to="/Single_News">Apple</Link></li>
                                            <li><Link to="/Single_News">Strawberry</Link></li>
                                            <li><Link to="/Single_News">BErry</Link></li>
                                            <li><Link to="/Single_News">Orange</Link></li>
                                            <li><Link to="/Single_News">Lemon</Link></li>
                                            <li><Link to="/Single_News">Banana</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end single article section */}
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

export default Single_News;
