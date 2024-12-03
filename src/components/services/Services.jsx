import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services_container container grid">
                {/* AI & Data Science */}
                <div className="services_content">
                    <div>
                        <i className="uil uil-brain services_icon"></i>
                        <h3 className="services_title">
                            AI & Data <br /> Science
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">AI & Data Science</h3>
                            <p className="services_modal-description">
                                Passionate about AI and Data Science with strong analytical skills
                                and practical experience in machine learning.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Machine Learning Models Development
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Data Analysis & Visualization
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Python Data Science Libraries
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Web Development */}
                <div className="services_content">
                    <div>
                        <i className="uil uil-django services_icon"></i>
                        <h3 className="services_title">
                            Web <br /> Development
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Web Development</h3>
                            <p className="services_modal-description">
                                Full-stack development with Django and modern web technologies.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Django Backend Development
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        RESTful API Design
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Frontend with React & Tailwind
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Technical Support */}
                <div className="services_content">
                    <div>
                        <i className="uil uil-desktop services_icon"></i>
                        <h3 className="services_title">
                            Technical <br /> Support
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Technical Support</h3>
                            <p className="services_modal-description">
                                Experienced computer technician providing hardware and software support.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Hardware Troubleshooting
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Software Installation & Setup
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        System Maintenance & Optimization
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;