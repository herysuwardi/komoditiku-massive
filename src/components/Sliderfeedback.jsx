import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles/sliderfeedback.css";

const Sliderfeedback = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
  return (
   <div>
        <section className="wrapper__feedback">
            <Container>
            <div className="text-feedback">
                <h1><b>Feedback</b> Kursus</h1>
            </div> 
            <Slider href={slider => (this.slider = slider)} {...settings}>
            <div className="row">
                <div className="col">
                    <div className="card-feedback container">
                        <div className="row mb-3 container">
                            <div className="col-2">
                                <img src="/assets/profil-feedback-kursus1.png" alt="..." />  
                            </div>
                            <div className="col-5 mt-2">
                                <h5>Johana Jane</h5>
                                <p>UI-UX Designer</p>
                            </div>
                            <div className="col-5">
                                <img src="/assets/icon-quote.png" className="icon-quote" />  
                            </div>
                        </div>
                        <div className="deskripsi-feedback container">
                        <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac 
                            habitasse platea dictumst. Praesent nulla massa, feugiat auctor felis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur impedit recusandae.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card-feedback container">
                        <div className="row mb-3 container">
                            <div className="col-2">
                                <img src="/assets/profil-feedback-kursus2.png" alt="..." />  
                            </div>
                            <div className="col-5 mt-2">
                                <h5>Ajax Petropolus</h5>
                                <p>Developer</p>
                            </div>
                            <div className="col-5">
                                <img src="/assets/icon-quote.png" className="icon-quote" />  
                            </div>
                        </div>
                        <div className="deskripsi-feedback container">
                        <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac 
                            habitasse platea dictumst. Praesent nulla massa, feugiat auctor felis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur impedit recusandae.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card-feedback container">
                        <div className="row mb-3 container">
                            <div className="col-2">
                                <img src="/assets/profil-feedback-kursus3.png" alt="..." />  
                            </div>
                            <div className="col-5 mt-2">
                                <h5>Eugene Otinger</h5>
                                <p>Project Manajemen</p>
                            </div>
                            <div className="col-5">
                                <img src="/assets/icon-quote.png" className="icon-quote" />  
                            </div>
                        </div>
                        <div className="deskripsi-feedback container">
                        <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac 
                            habitasse platea dictumst. Praesent nulla massa, feugiat auctor felis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur impedit recusandae.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card-feedback container">
                        <div className="row mb-3 container">
                            <div className="col-2">
                                <img src="/assets/profil-feedback-kursus4.png" alt="..." />  
                            </div>
                            <div className="col-5 mt-2">
                                <h5>Yoko Tanaka</h5>
                                <p>Manajemen Bisnis</p>
                            </div>
                            <div className="col-5">
                                <img src="/assets/icon-quote.png" className="icon-quote" />  
                            </div>
                        </div>
                        <div className="deskripsi-feedback container">
                        <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac 
                            habitasse platea dictumst. Praesent nulla massa, feugiat auctor felis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur impedit recusandae.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            </Slider>
            </Container>   
        </section>     
   </div>

  );
}

export default Sliderfeedback;