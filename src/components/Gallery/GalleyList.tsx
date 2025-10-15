// "use client";

// import { Grid, Image } from "@mantine/core";
// import { motion } from "framer-motion";
// import { GalleyCarousel } from "./GalleryCarousel";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

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

// const images = [
//   {
//     src: "/assets/galley/img1.jpg",
//     alt: "Manicure",
//     span: 3,
//     mt: 0,
//     videoUrl: "/assets/galley/video2.mp4",
//   },
//   { src: "/assets/galley/img2.jpg", alt: "Pedicure", span: 3, mt: 80 },
//   { src: "/assets/galley/img3.jpg", alt: "EyeLashes", span: 3, mt: 0 },
//   {
//     src: "/assets/galley/img4.jpg",
//     alt: "Nail_Enhancements",
//     span: 3,
//     mt: 80,
//   },
//   // {
//   //   src: "/assets/galley/Facial_Services.png",
//   //   alt: "Facial_Services",
//   //   span: 3,
//   //   mt: -80,
//   // },
//   // { src: "/assets/galley/Waxing.png", alt: "Waxing", span: 3, mt: 0 },
//   // {
//   //   src: "/assets/galley/Dipping_Powder.png",
//   //   alt: "Dipping_Powder",
//   //   span: 3,
//   //   mt: -80,
//   // },
//   // { src: "/assets/galley/Rectangle.png", alt: "Rectangle", span: 3, mt: 0 },
// ];

// export const GalleyList: React.FC = () => {
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <Grid gutter={20} visibleFrom="sm">
//         {images.map((image) => (
//           <Grid.Col key={image.alt} span={image.span} mt={image.mt}>
//             <motion.div variants={itemVariants}>
//               <Image
//                 renderRoot={(props) => (
//                   <motion.img
//                     variants={{
//                       hover: {
//                         scale: 0.95,
//                         transition: {
//                           type: "spring",
//                           stiffness: 400,
//                           damping: 25,
//                         },
//                       },
//                     }}
//                     whileHover="hover"
//                     {...props}
//                   />
//                 )}
//                 src={image.src}
//                 alt={image.alt}
//                 w="100%"
//                 h="auto"
//                 fit="contain"
//                 style={{
//                   borderRadius: "8px",
//                   boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                   transition: "box-shadow 0.3s ease",
//                 }}
//                 styles={{
//                   root: {
//                     "&:hover": {
//                       boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//                     },
//                   },
//                 }}
//               />
//               <video
//                 muted
//                 loop
//                 preload="metadata"
//                 autoPlay
//               >
//                 <source src={image.videoUrl} type="video/webm" />
//               </video>
//             </motion.div>
//           </Grid.Col>
//         ))}
//       </Grid>
//       <GalleyCarousel />
//     </motion.div>
//   );
// };
"use client";

import React from "react";
import { Grid, Image } from "@mantine/core";
import { motion } from "framer-motion";
import { GalleyCarousel } from "./GalleryCarousel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -60, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 },
  },
};

type GalleryItem = {
  src: string;
  alt: string;
  span: number;
  mt: number;
  videoUrl?: string;
};

const images: GalleryItem[] = [
  {
    src: "/assets/galley/img1.jpg",
    alt: "Manicure",
    span: 3,
    mt: 0,
    videoUrl: "/assets/galley/video2.mp4",
  },
  {
    src: "/assets/galley/img2.jpg",
    alt: "Pedicure",
    span: 3,
    mt: 80,
    videoUrl: "/assets/galley/video2.mp4",
  },
  {
    src: "/assets/galley/img3.jpg",
    alt: "EyeLashes",
    span: 3,
    mt: 0,
    videoUrl: "/assets/galley/video2.mp4",
  },
  {
    src: "/assets/galley/img4.jpg",
    alt: "Nail_Enhancements",
    span: 3,
    mt: 80,
    videoUrl: "/assets/galley/video2.mp4",
  },
];

export const GalleyList: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Grid gutter={20} visibleFrom="sm">
        {images.map((image) => (
          <Grid.Col key={image.alt} span={image.span} mt={image.mt}>
            <motion.div variants={itemVariants}>
              <HoverMediaCard item={image} />
            </motion.div>
          </Grid.Col>
        ))}
      </Grid>

      <GalleyCarousel />
    </motion.div>
  );
};

const HoverMediaCard: React.FC<{ item: GalleryItem }> = ({ item }) => {
  const [hovered, setHovered] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  // Điều khiển play/pause mượt
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let rafId = 0;
    if (hovered) {
      rafId = requestAnimationFrame(async () => {
        try {
          // Seek về 0 nếu bạn muốn luôn phát từ đầu:
          // v.currentTime = 0;
          await v.play();
        } catch {
          // ignore autoplay errors (nếu có)
        }
      });
    } else {
      rafId = requestAnimationFrame(() => {
        v.pause();
        // Nếu muốn dừng ở frame đầu:
        // v.currentTime = 0;
      });
    }
    return () => cancelAnimationFrame(rafId);
  }, [hovered]);

  const radius = 8;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        position: "relative",
        borderRadius: radius,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.25s ease",
        willChange: "transform",
        contain: "paint",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
        transform: "translateZ(0)",
      }}
    >
      {/* Ảnh nền */}
      <Image
        src={item.src}
        alt={item.alt}
        w="100%"
        h="auto"
        fit="cover"
        style={{ display: "block" }}
        // giúp decode mượt hơn khi vào viewport
        decoding="async"
        loading="lazy"
      />

      {/* Video overlay (mount sẵn, chỉ fade in/out) */}
      {item.videoUrl && (
        <motion.video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          // tránh hover đè hit-test gây flicker
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: radius,
            pointerEvents: "none",
            display: "block",
            willChange: "opacity, transform",
          }}
          // chỉ đổi opacity (không unmount) → không giật
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Sửa đúng MIME theo đuôi file mp4 */}
          <source src={item.videoUrl} type="video/mp4" />
        </motion.video>
      )}
    </motion.div>
  );
};
