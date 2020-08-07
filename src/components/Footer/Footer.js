import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            126, Some Road, Some Street<br />
		              Near Somewhere, Some Place<br />
		              Some Country<br />
                            <i className="fa fa-phone fa-lg"></i>: +000 1234 5678<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:something@gmail.com">
                                something@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center my-3">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2020 Product Catalog</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

