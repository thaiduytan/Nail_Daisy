// "use client";

// import { Carousel } from "@mantine/carousel";
// import { Image } from "@mantine/core";
// import { motion } from "framer-motion";
// import classes from "./Gallery.module.css";
// import { useRef } from "react";
// import Autoplay from "embla-carousel-autoplay";
// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     x: -60,
//     y: 30,
//     scale: 0.8,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 12,
//       duration: 0.6,
//     },
//   },
// };

// // const images = [
// //   { src: "/assets/galley/Manicure.png", alt: "Manicure", span: 3, mt: 0 },
// //   { src: "/assets/galley/Pedicure.png", alt: "Pedicure", span: 3, mt: 50 },
// //   { src: "/assets/galley/EyeLashes.png", alt: "EyeLashes", span: 3, mt: 0 },
// //   {
// //     src: "/assets/galley/Nail_Enhancements.png",
// //     alt: "Nail_Enhancements",
// //     span: 3,
// //     mt: 50,
// //   },
// //   {
// //     src: "/assets/galley/Facial_Services.png",
// //     alt: "Facial_Services",
// //     span: 3,
// //     mt: -50,
// //   },
// //   { src: "/assets/galley/Waxing.png", alt: "Waxing", span: 3, mt: 0 },
// //   {
// //     src: "/assets/galley/Dipping_Powder.png",
// //     alt: "Dipping_Powder",
// //     span: 3,
// //     mt: -50,
// //   },
// //   { src: "/assets/galley/Rectangle.png", alt: "Rectangle", span: 3, mt: 0 },
// // ];
// type GalleryItem = {
//   src: string;
//   alt: string;
//   span: number;
//   mt?: number;
//   videoUrl?: string;
// };

// const items: GalleryItem[] = [
//   {
//     src: "/assets/galley/img1.jpg",
//     alt: "Manicure",
//     span: 3,
//     mt: 0,
//     videoUrl: "/assets/galley/video1.mp4",
//   },
//   {
//     src: "/assets/galley/img2.jpg",
//     alt: "Pedicure",
//     span: 3,
//     mt: 0,
//     videoUrl: "/assets/galley/video2.mp4",
//   },
//   {
//     src: "/assets/galley/img3.jpg",
//     alt: "EyeLashes",
//     span: 3,
//     mt: 0,
//     videoUrl: "/assets/galley/video3.mp4",
//   },
//   {
//     src: "/assets/galley/img4.jpg",
//     alt: "Nail_Enhancements",
//     span: 3,
//     mt: 0,
//     videoUrl: "/assets/galley/video4.mp4",
//   },
// ];
// export const GalleyCarousel: React.FC = () => {
//   const autoplay = useRef(Autoplay({ delay: 3000 }));

//   return (
//     <Carousel
//       hiddenFrom="xs"
//       classNames={{
//         viewport: classes.viewport,
//         controls: classes.controls,
//         control: classes.control,
//       }}
//       // withControls={false}
//       plugins={[autoplay.current]}
//       onMouseEnter={autoplay.current.stop}
//       onMouseLeave={() => autoplay.current.play()}
//     >
//       {items.map((image) => (
//         <Carousel.Slide key={image.alt}>
//           <motion.div variants={itemVariants}>
//             <Image
//               renderRoot={(props) => (
//                 <motion.img
//                   variants={{
//                     hover: {
//                       scale: 0.95,
//                       transition: {
//                         type: "spring",
//                         stiffness: 400,
//                         damping: 25,
//                       },
//                     },
//                   }}
//                   whileHover="hover"
//                   {...props}
//                 />
//               )}
//               src={image.src}
//               alt={image.alt}
//               w="100%"
//               h="auto"
//               fit="contain"
//               style={{
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                 transition: "box-shadow 0.3s ease",
//               }}
//               styles={{
//                 root: {
//                   "&:hover": {
//                     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//                   },
//                 },
//               }}
//             />
//           </motion.div>
//         </Carousel.Slide>
//       ))}
//       {items.map((image) => (
//         <Carousel.Slide key={image.alt}>
//           <motion.div variants={itemVariants}>
//             <Image
//               renderRoot={(props) => (
//                 <motion.img
//                   variants={{
//                     hover: {
//                       scale: 0.95,
//                       transition: {
//                         type: "spring",
//                         stiffness: 400,
//                         damping: 25,
//                       },
//                     },
//                   }}
//                   whileHover="hover"
//                   {...props}
//                 />
//               )}
//               src={image.src}
//               alt={image.alt}
//               w="100%"
//               h="auto"
//               fit="contain"
//               style={{
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                 transition: "box-shadow 0.3s ease",
//               }}
//               styles={{
//                 root: {
//                   "&:hover": {
//                     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//                   },
//                 },
//               }}
//             />
//           </motion.div>
//         </Carousel.Slide>
//       ))}
//     </Carousel>
//   );
// };
"use client";

import React from "react";
import { Image } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

type GalleryItem = {
  src: string;
  alt: string;
  span: number;
  mt?: number;

  videoUrl?: string;
};

const items: GalleryItem[] = [
  {
    src: "/assets/galley/img1.jpg",
    alt: "Manicure",
    span: 3,
    mt: 0,
    videoUrl: "/assets/galley/video1.mp4",
  },
  {
    src: "/assets/galley/img2.jpg",
    alt: "Pedicure",
    span: 3,
    mt: 0,
    videoUrl: "/assets/galley/video2.mp4",
  },
  {
    src: "/assets/galley/img3.jpg",
    alt: "EyeLashes",
    span: 3,
    mt: 0,
    videoUrl: "/assets/galley/video3.mp4",
  },
  {
    src: "/assets/galley/img4.jpg",
    alt: "Nail_Enhancements",
    span: 3,
    mt: 0,
    videoUrl: "/assets/galley/video4.mp4",
  },
];

export const GalleryCarousel: React.FC = () => {
  return (
<>
      {/* Dòng 1: Ảnh */}
      <Carousel hiddenFrom="sm">
        {items.map((item) => (
          <Carousel.Slide key={item.alt} mt={item.mt} h={420}>
            <motion.div variants={itemVariants}>
              <ImageCard item={item} />
            </motion.div>
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* Dòng 2: Video tự phát */}
      <Carousel hiddenFrom="sm">
        {items.map((item) => (
          <Carousel.Slide key={item.alt + "_video"} mt={item.mt}>
            <motion.div variants={itemVariants}>
              <AutoPlayVideoCard item={item} />
            </motion.div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

// ---- Component hiển thị ảnh ----
const ImageCard: React.FC<{ item: GalleryItem }> = ({ item }) => (
  <motion.div
    whileHover={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      padding: "0px",
      margin: "0px",
    }}
  >
    <Image src={item.src} alt={item.alt} fit="cover" w="100%" h="396px" />
  </motion.div>
);

// ---- Component video auto-play khi vào viewport ----
const AutoPlayVideoCard: React.FC<{ item: GalleryItem }> = ({ item }) => {
  const ref = React.useRef<HTMLVideoElement | null>(null);
  const inView = useInView(ref, { amount: 0.5 });

  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView]);

  return (
    <motion.div
      style={{
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.video
        ref={ref}
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 8,
          display: "block",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <source src={item.videoUrl} type="video/mp4" />
      </motion.video>
    </motion.div>
  );
};
