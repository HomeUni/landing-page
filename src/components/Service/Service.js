import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const Service = () => {
    return(
        <React.Fragment>
            <section className="seo_service_area sec_pad">
                <div className="container">
                    <SeoTitle Title='How does it work?' TitleP='HomeUni is designed for simplicity and effectiveness.'/>
                    <div className="row seo_service_info">
                        <Fade bottom duration={500}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon1.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Sign up for free</h4>
                                    </a>
                                    <p>Unlock access to courses by creating a free account.</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon2.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Choose your course</h4>
                                    </a>
                                    <p>We offer a wide selection of courses across various fields. </p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon5.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Start Learning!</h4>
                                    </a>
                                    <p>As you already know, Knowledge is power. </p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>

                        
                        <div className="col-lg-12 text-center mt_40">
                            <a  href="https://docs.google.com/forms/d/e/1FAIpQLSfzGkXXuyBDH1wJ3kEO-nu-lc9nKEE_MUuEUC9SEaBuvCKEMg/viewform"
                  target="_blank"
                  rel="noreferrer" className="seo_btn seo_btn_one btn_hover">Join Waitlist</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="seo_features_img">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img width={600} src={require('../../img/seo/features_img.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2>Explore Our Features</h2>
                                    {/* <p>Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p> */}
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Analytics Dashboard: </h3>
                                            <p>Gain insights into your learning journey with detailed analytics and progress reports to track your improvement.</p>
                                        </div>
                                    </div>
                                     <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Interactive Lessons: </h3>
                                            <p>Engage with dynamic content and real-world applications.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon two"><img src={require('../../img/seo/icon3.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Personalized Learning Paths</h3>
                                            <p>Tailor your learning experience with personalized recommendations and content paths based on your interests, skills, and goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="seo_features_img seo_features_img_two">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img width={600} src={require('../../img/seo/features_img_two.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2 className="wow fadeInUp">Ready to Start Learning?</h2>
                                    <h6 className="wow fadeInUp">Join HomeUni Today!</h6>
                                    <p className="wow fadeInUp"> It's time to take your learning to the next level. Sign up for free and experience the future of education.</p>
                                    <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfzGkXXuyBDH1wJ3kEO-nu-lc9nKEE_MUuEUC9SEaBuvCKEMg/viewform"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="seo_btn seo_btn_one btn_hover wow fadeInUp"
                                    >
                                    Join Waitlist
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Service;
