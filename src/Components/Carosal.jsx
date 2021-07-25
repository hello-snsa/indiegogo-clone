import React from "react"
import { Carousel } from 'react-bootstrap'
import "./Carosal.css"

const Carosal = () => {

    return (
        <>
        <Carousel className="carousel">
            <Carousel.Item interval={2000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="./carousel1.jpg"
                    alt="First slide"
                />
                <div className="cCaption">
                <Carousel.Caption className="carousel-caption">
                    <h5 href="#">Featured</h5>
                    <h6>Understanding the Latest Tech in PCB Manufacturing</h6>
                    <p>Printed circuit boards are getting smaller and more flexible, opening up new possibilities for tech product innovation. Get up to speed on the latest PCB advancements in this article from Arrow Electronics.</p>
                    <h7>LEARN MORE </h7>
                </Carousel.Caption>
                </div>

            </Carousel.Item>
            <Carousel.Item interval={2000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="./carousel2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5 href="#">Featured</h5>
                    <h6>Understanding the Latest Tech in PCB Manufacturing</h6>
                    <p>Printed circuit boards are getting smaller and more flexible, opening up new possibilities for tech product innovation. Get up to speed on the latest PCB advancements in this article from Arrow Electronics.</p>
                    <h7>LEARN MORE </h7>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item interval={2000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="./carousel3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5 href="#">Featured</h5>
                    <h6>Understanding the Latest Tech in PCB Manufacturing</h6>
                    <p>Printed circuit boards are getting smaller and more flexible, opening up new possibilities for tech product innovation. Get up to speed on the latest PCB advancements in this article from Arrow Electronics.</p>
                    <h7>LEARN MORE </h7>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="./carousel4.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5 href="#">Featured</h5>
                    <h6>Understanding the Latest Tech in PCB Manufacturing</h6>
                    <p>Printed circuit boards are getting smaller and more flexible, opening up new possibilities for tech product innovation. Get up to speed on the latest PCB advancements in this article from Arrow Electronics.</p>
                    <h7>LEARN MORE </h7>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="carousel-item" pause={false}>
                <img
                    className="d-block w-100"
                    src="./carousel5.jpg"
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
                Find it first on Indiegogo.
                </h1>
                <span>
                Indiegogo is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.
                </span>
                <br />
                <button className="gettheguides">
                SIGN UP NOW
                </button>
            </div>
            </>
    )

}


export default  Carosal; 