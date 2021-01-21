import React, { useState, useRef, useEffect } from "react";
import "./SliderHome.scss";
import SlideHomeData from "./SlideHomeData";
import Button from "../../../components/Button/Button";

function SliderHome() {
	const [current, setcurrent] = useState(0);
	const slides = SlideHomeData[current];
	const length = SlideHomeData.length;
	const timeout = useRef(null);

	const onSlide = (e) => {
		setcurrent(parseInt(e.target.id));

		if (timeout.current) {
			clearTimeout(timeout.current);
		}
	};

	useEffect(() => {
		const onSlide = () => {
			setcurrent((current) => (current === length - 1 ? 0 : current + 1));
		};

		timeout.current = setTimeout(onSlide, 3000);

		return () => {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
		};
	}, [current, length]);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className="slider">
			<div className="container" key={slides.id}>
				<div className="slider_image">
					<picture>
						<source srcSet={`${slides.imgMob}`} media="(max-width: 800px)" />
						<source srcSet={`${slides.imgTab}`} media="(max-width: 1180px)" />
						<source srcSet={`${slides.img}`} media="(min-width: 1181px)" />
						<img src={slides.img} alt="Paramor" />
					</picture>
				</div>
				<div className="slider_content">
					<h2>{slides.title}</h2>
					<p>{slides.text}</p>
					<Button to="/portfolio">See Our Portfolio</Button>
				</div>
			</div>

			<div className="slider_numbers">
				<div className="slider_number" id="0" onClick={onSlide}>
					01
				</div>
				<div className="slider_number" id="1" onClick={onSlide}>
					02
				</div>
				<div className="slider_number" id="2" onClick={onSlide}>
					03
				</div>
				<div className="slider_number" id="3" onClick={onSlide}>
					04
				</div>
			</div>
		</div>
	);
}

export default SliderHome;
