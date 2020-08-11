import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from "react-router-dom";
import styled from "styled-components";
import cx from 'classnames';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // firstName: '',
            // lastName: '',
            // telNum: '',
            // email: '',
            // agree: false,
            // contactType: 'Tel.',
            // message: '',
            // touched: {
            //     firstName: false,
            //     lastName: false,
            //     telNum: false,
            //     email: false,
            // }
        }
    }

    // handleChange = (e) => {
    //     const target = e.target;
    //     const value = target.type === "checkbox" ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    handleSubmit = (values) => {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values))
    }

    // handleBlur = (field) => (e) => {
    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true }
    //     });
    // }

    // validate = (firstName, lastName, telNum, email) => {
    //     const errors = {
    //         firstName: '',
    //         lastName: '',
    //         telNum: '',
    //         email: '',
    //     }

    //     // first name validation
    //     if (this.state.touched.firstName && firstName.length < 3)
    //         errors.firstName = "First name should be greater than 3 character"
    //     else if (this.state.touched.firstName && firstName.length > 10)
    //         errors.firstName = "First name should be less than 10 character"

    //     // last name validation
    //     if (this.state.touched.lastName && lastName.length < 3)
    //         errors.lastName = "Last name should be greater than 3 character"
    //     else if (this.state.touched.lastName && lastName.length > 10)
    //         errors.lastName = "Last name should be less than 10 character"

    //     // tel num validation
    //     const reg = /^\d+$/;
    //     if (this.state.touched.telNum && !reg.test(telNum))
    //         errors.telNum = "Tel. Number should contain only number";

    //     // email validation
    //     if (this.state.touched.email && email.split('').filter(x => x === "@").length !== 1)
    //         errors.email = "InValid email";

    //     return errors;
    // }

    render() {
        // const errors = this.validate(this.state.firstName, this.state.lastName, this.state.telNum, this.state.email);
        return (
            <ContactPageWrapper>
                <div className="container py-5">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Contact Us
                         </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <h1>Connect with us</h1>
                    <p>We would love to respond to your queries. Feel free to get in touch with us.</p>
                    <div className="contact-box">
                        <div className="contact-left">
                            <h3>Sent Your Request</h3>
                            <LocalForm onSubmit={(valus) => this.handleSubmit(valus)}>
                                <div className="input-row">
                                    <div className="input-group">
                                        <Label>
                                            First name
                                        </Label>
                                        <Control.text
                                            className={cx("input", "form-control")}
                                            model=".firstName"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="First Name"
                                        />

                                    </div>
                                    <div className="input-group">
                                        <Label>
                                            Last name
                                        </Label>
                                        <Control.text
                                            className={cx("input", "form-control")}
                                            model=".lastName"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Last Name"
                                        />

                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-group">
                                        <Label>
                                            Tel. Number
                                        </Label>
                                        <Control.text
                                            className={cx("input", "form-control")}
                                            model=".telNum"
                                            id="telNum"
                                            name="telNum"
                                            placeholder="Tel. Number"
                                        />

                                    </div>
                                    <div className="input-group">
                                        <Label>
                                            Email
                                        </Label>
                                        <Control.text
                                            className={cx("input", "form-control")}
                                            model=".email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                        />

                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                className="form-check-input"
                                                type="checkbox"
                                                name="agree"
                                            /> {' '} <Label>May we contact you?</Label>
                                        </Label>
                                    </div>
                                    <div className="input-group">
                                        <Control.select
                                            model=".contactType"
                                            type="select"
                                            className={cx("select", "form-control")}
                                            name="contactType"
                                        >
                                            <option>
                                                Tel.
                                            </option>
                                            <option>
                                                Email
                                            </option>
                                        </Control.select>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <Label htmlFor="message">
                                        Your Feedback
                                 </Label>
                                    <Control.textarea
                                        model=".message"
                                        className={cx("textarea", "form-control")}
                                        type="textarea"
                                        id="message"
                                        name="message"
                                        rows="3"
                                    />
                                </div>
                                <button type="submit">
                                    Send Feedback
                                </button>
                            </LocalForm>
                        </div>
                        <div className="contact-right">
                            <h3>Reach Us</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <i className="fa fa-envelope"></i>
                                        </td>
                                        <td>
                                            mailto:something@gmail.com
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-phone"></i>
                                        </td>
                                        <td>
                                            +000 1234 5678
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fa fa-address-card" aria-hidden="true"></i>
                                        </td>
                                        <td>
                                            126, Some Road, Some Street<br />
                                            Near Somewhere, Some Place<br />
                                            Some Country
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </ContactPageWrapper>
        )
    }
}

export default ContactPage;


const ContactPageWrapper = styled.div`
    color: var(--mainWhite);
    font-family: 'Poppins', sans-serif;
    .contact-box {
        background-color: var(--headerFooterBackground);
        display: flex;
    }
    .contact-left {
        flex-basis: 60%;
        padding: 40px 60px;
    }
    .contact-right {
        flex-basis: 40%;
        padding: 40px;
        background-color: var(--secondaryBackground);
    }
    h1 {
        margin-bottom: 10px;
        font-weight: bold;
    }
    .container p {
        margin-bottom: 40px;
    }
    .input-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .input-group {
        flex-basis: 45%;
    }
    .input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #ccc;
        padding: 0;
        padding-bottom: 5px;
        background-color: transparent;
        color: var(--mainWhite);
    }
    .checkbox-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .checkbox-row .checkbox-text {
        flex-basis: 90%;
    }
    .checkbox-row .checkbox-input {
        flex-basis: 10%;
    }
    .select {
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        padding-bottom: 5px;
        background-color: transparent;
        color: var(--mainWhite);
    }
    .form-check {
        position: relative;
        display: flex;
        align-items: center
    }
    .textarea {
        width: 100%;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        padding-bottom: 5px;
        background-color: transparent;
        box-sizing: border-box;
        resize: none;
        color: var(--mainWhite);
    }
    Label {
        margin-bottom: 6px;
        display: block;
    }
    button {
        background-color: var(--secondaryBackground);
        border: none;
        outline: none;
        color: var(--mainWhite);
        padding: 10px;
        /* border-radius: 30px; */
        margin-top: 20px;
    }
    .contact-left h3, .contact-right h3 {
        font-weight: 600;
        margin-bottom: 30px;
    }
    tr td:first-child {
        padding-right: 20px;
    }
    tr td {
        padding-top: 20px;
    }
`