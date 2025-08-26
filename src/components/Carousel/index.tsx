"use client";

import { Carousel as MantineCarousel } from "@mantine/carousel";
import { BackgroundImage } from "@mantine/core";
import classes from "./Carousel.module.css";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const Carousel: React.FC = () => {
	const autoplay = useRef(Autoplay({ delay: 3000 }));
	return (
		<MantineCarousel
			classNames={{
				indicators: classes.indicators,
				indicator: classes.indicator,
			}}
			withIndicators
			withControls={false}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={() => autoplay.current.play()}
		>
			<MantineCarousel.Slide>
				<BackgroundImage
					src="/assets/carousel/bg_1.png"
					w="100%"
					h={{ base: 350, xl: 500, xxl: 640 }}
					bgsz="cover"
					bgp="center"
				>
					abc
				</BackgroundImage>
			</MantineCarousel.Slide>
			<MantineCarousel.Slide>
				<BackgroundImage
					src="/assets/carousel/bg_1.png"
					w="100%"
					h={{ base: 350, xl: 500, xxl: 640 }}
					bgsz="cover"
					bgp="center"
				>
					abc
				</BackgroundImage>
			</MantineCarousel.Slide>
			<MantineCarousel.Slide>
				<BackgroundImage
					src="/assets/carousel/bg_1.png"
					w="100%"
					h={{ base: 350, xl: 500, xxl: 640 }}
					bgsz="cover"
					bgp="center"
				>
					abc
				</BackgroundImage>
			</MantineCarousel.Slide>
		</MantineCarousel>
	);
};
