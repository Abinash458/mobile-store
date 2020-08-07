import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

class ContactPage extends Component {
    render() {
        return (
            <div className="container text-white py-4">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 text-white">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            126, Some Road, Some Street<br />
                            Near Somewhere, Some Place<br />
                            Some Country<br />
                            <i className="fa fa-phone"></i>: +000 1234 5678<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:something@gmail.com">mailto:something@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    {/* <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default ContactPage;