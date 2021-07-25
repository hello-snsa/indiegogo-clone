import React from "react"
import { Carousel } from 'react-bootstrap'
import "../css/carousel.css"

const CarouselContainer = () => {

    return (
        <>
        <Carousel className="carousel">
            <Carousel.Item interval={4000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/07/2021-July-Easyship-IGG-Collect-IGGCreative-Homepage-Hero.png"
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5 href="#">Featured</h5>
                    <h6>Understanding the Latest Tech in PCB Manufacturing</h6>
                    <p>Printed circuit boards are getting smaller and more flexible, opening up new possibilities for tech product innovation. Get up to speed on the latest PCB advancements in this article from Arrow Electronics.</p>
                    <h7>LEARN MORE </h7>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/07/Arrow-PCB-Article_Carousel-1.png"
                    alt="Second slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5 href="#">Featured</h5>
                    <h6>Understanding the Latest Tech in PCB Manufacturing</h6>
                    <p>Printed circuit boards are getting smaller and more flexible, opening up new possibilities for tech product innovation. Get up to speed on the latest PCB advancements in this article from Arrow Electronics.</p>
                    <h7>LEARN MORE </h7>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item interval={4000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/06/Amazon-LP-Q2-Carousel-Image_Entrepreneur-homepage_DG.png"
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5 href="#">Featured</h5>
                    <h6>Understanding the Latest Tech in PCB Manufacturing</h6>
                    <p>Printed circuit boards are getting smaller and more flexible, opening up new possibilities for tech product innovation. Get up to speed on the latest PCB advancements in this article from Arrow Electronics.</p>
                    <h7>LEARN MORE </h7>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2020/09/shutterstock_526147684_-scaled.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5 href="#">Featured</h5>
                    <h6>Understanding the Latest Tech in PCB Manufacturing</h6>
                    <p>Printed circuit boards are getting smaller and more flexible, opening up new possibilities for tech product innovation. Get up to speed on the latest PCB advancements in this article from Arrow Electronics.</p>
                    <h7>LEARN MORE </h7>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/06/Amazon-LP-Q2-Carousel-Image_Entrepreneur-homepage_DG.png"
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5 href="#">Featured</h5>
                    <h6>Understanding the Latest Tech in PCB Manufacturing</h6>
                    <p>Printed circuit boards are getting smaller and more flexible, opening up new possibilities for tech product innovation. Get up to speed on the latest PCB advancements in this article from Arrow Electronics.</p>
                    <h7>LEARN MORE </h7>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel >
            <div className="absolute">
                <h1>
                Raise more with Premium Crowdfunding Guides
                </h1>
                <span>
                We built our Premium Crowdfunding Guides to address the most common challenges that campaign owners face. Let our guides walk you through a successful project, every step of the way.
                </span>
                <br />
                <button className="gettheguides">
                GET THE GUIDES
                </button>
            </div>
            </>
    )

}


export { CarouselContainer }