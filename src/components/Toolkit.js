import React, {useState} from "react";
import Slider from "react-slick";
import Reactico from "../assets/images/React_Icon.svg"
import Jsico from "../assets/images/JS_Icon.svg"
import Htmlico from "../assets/images/HTML_Icon.svg"
import Cssico from "../assets/images/CSS_Icon.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Toolkit.css"

export default function Toolkit () {
    const Icons = [
        {name: "React icon", img: Reactico},
        {name: "Js icon", img: Jsico},
        {name: "Html icon", img: Htmlico},
        {name: "Css icon", img: Cssico}]

    const settings = {
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
      };

    return (
        <>
            <div className="toolkit-container">
                <h2 className="toolkit-title">DEVELOPER TOOLKIT</h2>
                <div className="toolkit-slider">
                    <Slider {...settings}>
                        {Icons.map((d, index) => (
                        <div className="icons" key={d.name}>
                            <img
                                src={d.img}
                                alt={d.name}
                                style={{
                                    marginRight: index === Icons.length - 1 ? 0 : 10,
                                }}
                            />
                        </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
};