import React from 'react'
import OwlCarousel from 'react-owl-carousel'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import DareDevil from '../../assets/daredevil.jpg'
import LukeCage from '../../assets/luke.png'
import TheHaunting from '../../assets/the-haunting.png'
import Elite from '../../assets/elite.png'
import Orange from '../../assets/orange.png'

const OwlConfig = () => (
    <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        items={5}
        dots={false}
        margin={5}
        stagePadding={50}
    >
        <div className="item"><img src={DareDevil} /></div>
        <div className="item"><img src={LukeCage} /></div>
        <div className="item"><img src={Elite} /></div>
        <div className="item"><img src={TheHaunting} /></div>
        <div className="item"><img src={Orange} /></div>
        <div className="item"><img src={DareDevil} /></div>
        <div className="item"><img src={DareDevil} /></div>
        <div className="item"><img src={DareDevil} /></div>
        <div className="item"><img src={DareDevil} /></div>
        <div className="item"><img src={DareDevil} /></div>
    </OwlCarousel>
)

export default OwlConfig;

