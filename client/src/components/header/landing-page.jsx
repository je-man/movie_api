import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom';
import './landing-page.scss';
import LandingPic from './landing-pic.jpg'
import WorkOne from './work-1.png'
import WorkTwo from './work-2.png'
import WorkThree from './work-3.png';
import History from './history.png';
import Drama from './drama.png';
import Thriller from './thriller.png';
import Romance from './romance.png';
import Mystery from './mystery.png';
import Biography from './biography.png';
import War from './war.png';
import Adevnture from './adventure.png';


export class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <div class="home">
                    <div class="landing-text">
                        <h2>Collection of Movies</h2>
                        <p>
                            <Badge variant="primary" className="text-center">Browse</Badge>
                        </p>
                    </div>
                </div>
                <div class="padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <img src={LandingPic}/>
                            </div>
                            <div class="col-sm-6 text-center">
                                <h3>Using Movie Escape</h3>
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p class="lead">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed">
  
                </div>
                {/* <div className="container-three">
                    <div className="top-container">
                        <div className="title-three text-center">
                            <h4>How Movie Escape Works</h4>
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="img-border">
                                        <img src={Col1Pic} className="img-circle"/>
                                        <h5>Easy Navigation</h5>
                                        <p className="deal">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="img-border">
                                        <img src={Col2Pic} className="img-circle"/>
                                        <h5>Column Number 2</h5>
                                        <p className="deal">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="img-border">
                                        <img src={Col3Pic} className="img-circle"/>
                                        <h5>Minimal Design</h5>
                                        <p className="deal">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups typesetter in the 15th century who is thought to have scrambled..</p>
                                    </div>
                                </div>
                            </div>
                            <Badge variant="primary" className="text-center">Browse</Badge>
                        </div>
                    </div>
                </div> */}

                <div className="categories">
                    <h3 className="pb-4">Explore by Category</h3>
                    <div className="row">
                        <div className="col">
                                <img src={Drama} />
                                <p>Drama</p>
                        </div>
                        <div className="col">
                            <img src={Thriller} />
                            <p>Thriller</p>
                        </div>
                        <div className="col">
                            <img src={History} />
                            <p>History</p>
                        </div>
                        <div className="col">
                            <img src={Romance} />
                            <p>Romance</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={Mystery} />
                            <p>Mystery</p>
                        </div>
                        <div className="col">
                            <img src={Biography} />
                            <p>Biography</p>
                        </div>
                        <div className="col">
                            <img src={War} />
                            <p>War</p>
                        </div>
                        <div className="col">
                            <img src={Adevnture} />
                            <p>Adventure</p>
                        </div>
                    </div>
                </div>

                <div className="how-works text-center">
                    <h3 className="text-center">How Movie Escape Works</h3>
                    {/* <p className="text-center">Lorem Ipsum is simply dummy text of the printing.</p> */}
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-works-one">
                            <h5>1</h5>
                            <img src={WorkThree} />
                            <h6>SUBMIT A PROJECT</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-works-two">
                            <h5>2</h5>
                            <img src={WorkTwo} />
                            <h6>SUBMIT A PROJECT</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-works-three">
                            <h5>3</h5>
                            <img src={WorkOne} />
                            <h6>SUBMIT A PROJECT</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <Badge variant="primary">Browse</Badge>
                </div>


                <div className="landing-last text-center">
                    <div className="landing-center">
                        <h3 className="mx-auto">Get An Account Today</h3>
                        <p className="mx-auto">Access free content on all of your devices anywhere.</p>
                        <Link to={`/register`}>
                            <Button variant="link">Register</Button>
                        </Link>
                    </div>
                </div>
                {/* <Jumbotron>
                    <h2>Collections of Movies</h2>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Browse</Button>
                    </p>
                </Jumbotron>
                <div className="text-center">
                    <h1>Get An Account Today</h1>
                    <p>Access free content on all of your devices anywhere.</p>
                    <Link to={`/register`}>
                        <Button variant="link">Register</Button>
                    </Link>
                </div> */}
            </div>
        )
    }
}

