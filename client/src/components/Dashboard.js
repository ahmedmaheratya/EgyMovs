import React from 'react'
import { Link } from 'react-router-dom'
import Owl from './layouts/OwlConfig'

import DareDevil from '../assets/daredevil.jpg'
import LukeCage from '../assets/luke.png'
import TheHaunting from '../assets/the-haunting.png'
import Elite from '../assets/elite.png'
import Orange from '../assets/orange.png'

const Dashboard = () => (
    <React.Fragment>
        <div className="hero">
            <div className="hero-slider">
                <div className="hero-headers">
                    <h1>EgyMovs</h1>
                    <p>ابحث عن فيلمك او المسلسل المفضل لك</p>
                    <div className="hero-search">
                        <div className="search-input">
                            <button>بحث</button>
                            <input type="text" placeholder="Est: Daredevil, Orange is the new black" />
                        </div>
                    </div>
                </div>
            </div>
            <Owl />
        </div>
        <div className="body-content">
            <div className="sidebar">
                <div className="side-block">
                    <h1>Genres</h1>
                    <ul>
                        <li>
                            <Link to="/action">
                                <i className="fas fa-chevron-right"></i>
                                Action
                            </Link>
                        </li>
                        <li>
                            <Link to="/action">
                                <i className="fas fa-chevron-right"></i>
                                Adventure
                            </Link>
                        </li>
                        <li>
                            <Link to="/action">
                                <i className="fas fa-chevron-right"></i>
                                Animations
                            </Link>
                        </li>
                        <li>
                            <Link to="/action">
                                <i className="fas fa-chevron-right"></i>
                                Crime
                            </Link>
                        </li>
                        <li>
                            <Link to="/action">
                                <i className="fas fa-chevron-right"></i>
                                Horror
                            </Link>
                        </li>
                        <li>
                            <Link to="/action">
                                <i className="fas fa-chevron-right"></i>
                                Documentary
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="side-block follow">
                    <h1>Follow EgyMovs</h1>
                    <ul>
                        <li><Link to="/action"> <i className="fab fa-facebook"></i> EgyMovs on Facebook</Link></li>
                        <li><Link to="/action"> <i className="fab fa-twitter-square"></i> EgyMovs on Twitter</Link></li>
                        <li><Link to="/action"> <i className="fab fa-instagram"></i> EgyMovs on Instagram</Link></li>
                    </ul>
                </div>
            </div>
            <div className="content-grid">
                <div className="display-block">
                    <div className="block-header">
                        <Link to="/movies">المزيد</Link>
                        <h1>اخر الأفلام</h1>
                    </div>
                    <div className="display-latest">
                        <div className="latest">
                            <img src={DareDevil} />
                            <h1><Link to="/movie">Welcome Home</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={LukeCage} />
                            <h1><Link to="/movie">RedBad</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Elite} />
                            <h1><Link to="/movie">Grey's Anatomy</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={TheHaunting} />
                            <h1><Link to="/movie">Psycho In-Law</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Orange} />
                            <h1><Link to="/movie">Down a Dark Hall</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="display-block">
                    <div className="block-header">
                        <Link to="/movies">المزيد</Link>
                        <h1>اخر المسلسلات</h1>
                    </div>
                    <div className="display-latest">
                        <div className="latest">
                            <img src={DareDevil} />
                            <h1><Link to="/movie">Welcome Home</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={LukeCage} />
                            <h1><Link to="/movie">RedBad</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Elite} />
                            <h1><Link to="/movie">Grey's Anatomy</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={TheHaunting} />
                            <h1><Link to="/movie">Psycho In-Law</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Orange} />
                            <h1><Link to="/movie">Down a Dark Hall</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="display-block">
                    <div className="block-header">
                        <Link to="/movies">المزيد</Link>
                        <h1>الأعلي تقييماً</h1>
                    </div>
                    <div className="display-latest">
                        <div className="latest">
                            <img src={DareDevil} />
                            <h1><Link to="/movie">Welcome Home</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={LukeCage} />
                            <h1><Link to="/movie">RedBad</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Elite} />
                            <h1><Link to="/movie">Grey's Anatomy</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={TheHaunting} />
                            <h1><Link to="/movie">Psycho In-Law</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Orange} />
                            <h1><Link to="/movie">Down a Dark Hall</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={DareDevil} />
                            <h1><Link to="/movie">Welcome Home</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={LukeCage} />
                            <h1><Link to="/movie">RedBad</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Elite} />
                            <h1><Link to="/movie">Grey's Anatomy</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={TheHaunting} />
                            <h1><Link to="/movie">Psycho In-Law</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Orange} />
                            <h1><Link to="/movie">Down a Dark Hall</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="display-block">
                    <div className="block-header">
                        <Link to="/movies">المزيد</Link>
                        <h1>أفلام عربيه</h1>
                    </div>
                    <div className="display-latest">
                        <div className="latest">
                            <img src={DareDevil} />
                            <h1><Link to="/movie">Welcome Home</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={LukeCage} />
                            <h1><Link to="/movie">RedBad</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Elite} />
                            <h1><Link to="/movie">Grey's Anatomy</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={TheHaunting} />
                            <h1><Link to="/movie">Psycho In-Law</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                        <div className="latest">
                            <img src={Orange} />
                            <h1><Link to="/movie">Down a Dark Hall</Link></h1>
                            <Link to="/">2017</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default Dashboard;