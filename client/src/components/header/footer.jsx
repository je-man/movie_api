import React, { Component } from 'react';
import './footer.scss';


// font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="float left">
                                <h5 className="text-center p-2">Movie Escape</h5>
                                <div className="footer-social text-center">
                                    <a href="https://www.youtube.com" clLinkssNLinkme="youtube social">
                                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                                    </a>
                                    <a href="https://www.facebook.com" className="facebook social">
                                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                                    </a>
                                    <a href="https://www.twitter.com" className="twitter social">
                                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                                    </a>
                                    <a href="https://www.instagram.com" className="instagram social">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                </div>
                                <hr className='hr-color' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col">
                            <h6>Column 1</h6>
                            <ul className="list-unstyled">
                                <li>list 1</li>
                                <li>list 2</li>
                                <li>list 3</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col">
                            <h6>Column 1</h6>
                            <ul className="list-unstyled">
                                <li>list 1</li>
                                <li>list 2</li>
                                <li>list 3</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col">
                            <h6>Column 1</h6>
                            <ul className="list-unstyled">
                                <li>list 1</li>
                                <li>list 2</li>
                                <li>list 3</li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col">
                            <h6>Follow Us</h6>
                            <ul className="list-unstyled">
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                    </div> 
                    <div className="row">
                        <p className="col-sm">&copy;{new Date().getFullYear()} Movies Escape | All rights reserved | Terms of Service | Privacy</p>
                    </div>  
                </div>
            </div>
        )
    }
}

