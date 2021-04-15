import React from "react";
import "./contact.css";
import ContactPicture from "../../assets/9814-removebg-preview 1.png";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import emailjs from 'emailjs-com';
import { REACT_APP_EMAILJS_USERID, REACT_APP_EMAILJS_TEMPLATEID, REACT_APP_EMAILJS_RECEIVER, REACT_APP_EMAILJS_SERVICE_ID } from "../../util/secrets";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/all";

const contact = () => {
    return (
        <div className="contact">
            <h1 className="contact-header">Contact Me</h1>
            <div className="contact-card">
                <div className="abstract-design">
                    <div className="long-div"></div>
                    <div className="div1"></div>
                    <div className="div2"></div>
                    <div className="div3"></div>
                    <div className="div4"></div>
                    <div className="div5"></div>
                    <div className="div6"></div>
                    <div className="div7"></div>
                    <div className="bottom-design">
                        <div className="bottom-long-div"></div>
                        <div className="div8"></div>
                        <div className="div9"></div>
                        <div className="div10"></div>
                    </div>
                </div>
                <img src={ContactPicture} alt="Contact-Picture" className="contact-picture"/>

                <div className="form-fields">
                    <Formik
                        initialValues={{name: '', email: '', message: ''}}
                        validate={values => {
                            const errors: any = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={
                            async (values, { resetForm }) => {
                                const templateParameters = {
                                    "from_name": values.name,
                                    "message": `Email: ${values.email}` + "\n" +
                                        `Message: ${values.message}`
                                }
                                await emailjs.send(`${REACT_APP_EMAILJS_SERVICE_ID}`, `${REACT_APP_EMAILJS_TEMPLATEID}`, templateParameters, `${REACT_APP_EMAILJS_USERID}`)
                                    .then((result) => {
                                        console.log(result.text);
                                    }, (error) => {
                                        console.log(error.text);
                                    });
                                resetForm();
                                return;
                            }
                        }
                    >
                        {(formikProps) => (
                            <Form onSubmit={formikProps.handleSubmit}
                                  onReset={formikProps.handleReset}>
                                <Field className="input-fields input-name" type="text" name="name"
                                       placeholder="Your Name" required={true}/>
                                <ErrorMessage name="Name" component="div"/>
                                <Field type="email" className="input-fields input-email" name="email"
                                       placeholder="Your Email" required={true}/>
                                <ErrorMessage name="Email" component="div"/>
                                <Field type="text" className="input-fields input-message" name="message"
                                       placeholder="Your Message" required={true}/>
                                <ErrorMessage name="Message" component="div"/>
                                <button type="submit" className="submit-button" disabled={formikProps.isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                    {/*<form action="">*/}
                    {/*    <input className="input-fields input-name" name="Name" placeholder="Your Name" required={true}></input>*/}
                    {/*    <input className="input-fields input-email" name="Email" placeholder="Your Email" required={true}></input>*/}
                    {/*    <input className="input-fields input-message" name="Message" placeholder="Your Message"></input>*/}
                    {/*</form>*/}
                </div>
            </div>
            <div className="footer-contact">
                <div className="social-icons">
                    <a href="">
                        <FaTwitter className="social-icon twitter" size="3%"/>
                    </a>
                    <a href="https://www.linkedin.com/in/agrawalharsh90">
                        <FaLinkedin className="social-icon linkedin" size="3%"/>
                    </a>
                    <a href="https://github.com/agrawalharsh90">
                        <FaGithub className="social-icon github" size="3%"/>
                    </a>
                    <a href="">
                        <FaInstagram className="social-icon instagram" size="3%"/>
                    </a>
                    <a href="">
                        <FaFacebook className="social-icon facebook" size="3%"/>
                    </a>
                </div>
                <div>
                    <h5>Copyright &copy; Harsh</h5>
                </div>
            </div>
        </div>
    );
}

export default contact;