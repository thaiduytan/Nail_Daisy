// "use client";

// import React from "react";
// import { Grid, Image } from "@mantine/core";
// import { motion } from "framer-motion";
// import { GalleyCarousel } from "./GalleryCarousel";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -60, y: 30, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 },
//   },
// };

// type GalleryItem = {
//   src: string;
//   alt: string;
//   span: number;
//   mt: number;
//   videoUrl?: string;
// };

// const images: GalleryItem[] = [
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
//     mt: 80,
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
//     mt: 80,
//     videoUrl: "/assets/galley/video4.mp4",
//   },
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
//               <HoverMediaCard item={image} />
//             </motion.div>
//           </Grid.Col>
//         ))}
//         {images.map((video) => (
//           <Grid.Col key={video.alt} span={video.span} mt={video.mt}>
//             <motion.div variants={itemVariants}>
//               <ImageCard item={video} />
//             </motion.div>
//           </Grid.Col>
//         ))}
//       </Grid>

//       <GalleyCarousel />
//     </motion.div>
//   );
// };

// const HoverMediaCard: React.FC<{ item: GalleryItem }> = ({ item }) => {
//   const [hovered, setHovered] = React.useState(false);
//   const videoRef = React.useRef<HTMLVideoElement | null>(null);

//   // Điều khiển play/pause mượt
//   React.useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     let rafId = 0;
//     if (hovered) {
//       rafId = requestAnimationFrame(async () => {
//         try {
//           // Seek về 0 nếu bạn muốn luôn phát từ đầu:
//           // v.currentTime = 0;
//           await v.play();
//         } catch {
//           // ignore autoplay errors (nếu có)
//         }
//       });
//     } else {
//       rafId = requestAnimationFrame(() => {
//         v.pause();
//         // Nếu muốn dừng ở frame đầu:
//         // v.currentTime = 0;
//       });
//     }
//     return () => cancelAnimationFrame(rafId);
//   }, [hovered]);

//   const radius = 8;

//   return (
//     <motion.div
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       whileHover={{ scale: 0.98 }}
//       transition={{ type: "spring", stiffness: 400, damping: 25 }}
//       style={{
//         position: "relative",
//         borderRadius: radius,
//         overflow: "hidden",
//         boxShadow: hovered
//           ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
//           : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//         transition: "box-shadow 0.25s ease",
//         willChange: "transform",
//         contain: "paint",
//         backfaceVisibility: "hidden",
//         WebkitFontSmoothing: "antialiased",
//         transform: "translateZ(0)",
//       }}
//     >
//       {/* Ảnh nền */}
//       <Image
//         src={item.src}
//         alt={item.alt}
//         w="100%"
//         h="auto"
//         fit="cover"
//         style={{ display: "block" }}
//         // giúp decode mượt hơn khi vào viewport
//         decoding="async"
//         loading="lazy"
//       />

//       {/* Video overlay (mount sẵn, chỉ fade in/out) */}
//       {item.videoUrl && (
//         <motion.video
//           ref={videoRef}
//           muted
//           loop
//           playsInline
//           preload="auto"
//           // tránh hover đè hit-test gây flicker
//           style={{
//             position: "absolute",
//             inset: 0,
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: radius,
//             pointerEvents: "none",
//             display: "block",
//             willChange: "opacity, transform",
//           }}
//           // chỉ đổi opacity (không unmount) → không giật
//           initial={{ opacity: 0 }}
//           animate={{ opacity: hovered ? 1 : 0 }}
//           transition={{ duration: 0.25, ease: "easeOut" }}
//         >
//           {/* Sửa đúng MIME theo đuôi file mp4 */}
//           <source src={item.videoUrl} type="video/mp4" />
//         </motion.video>
//       )}
//     </motion.div>
//   );
// };

// const ImageCard: React.FC<{ item: GalleryItem }> = ({ item }) => {
//   const [hovered, setHovered] = React.useState(false);
//   const videoRef = React.useRef<HTMLVideoElement | null>(null);

//   // Điều khiển play/pause mượt
//   React.useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     let rafId = 0;
//     if (hovered) {
//       rafId = requestAnimationFrame(async () => {
//         try {
//           // Seek về 0 nếu bạn muốn luôn phát từ đầu:
//           // v.currentTime = 0;
//           await v.play();
//         } catch {
//           // ignore autoplay errors (nếu có)
//         }
//       });
//     } else {
//       rafId = requestAnimationFrame(() => {
//         v.pause();
//         // Nếu muốn dừng ở frame đầu:
//         // v.currentTime = 0;
//       });
//     }
//     return () => cancelAnimationFrame(rafId);
//   }, [hovered]);

//   const radius = 8;

//   return (
//     <motion.div
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       whileHover={{ scale: 0.98 }}
//       transition={{ type: "spring", stiffness: 400, damping: 25 }}
//       style={{
//         position: "relative",
//         borderRadius: radius,
//         overflow: "hidden",
//         boxShadow: hovered
//           ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
//           : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//         transition: "box-shadow 0.25s ease",
//         willChange: "transform",
//         contain: "paint",
//         backfaceVisibility: "hidden",
//         WebkitFontSmoothing: "antialiased",
//         transform: "translateZ(0)",
//       }}
//     >
//       {item.videoUrl && (
//         <motion.video
//           ref={videoRef}
//           muted
//           loop
//           playsInline
//           preload="auto"
//           // tránh hover đè hit-test gây flicker
//           style={{
//             position: "absolute",
//             inset: 0,
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: radius,
//             pointerEvents: "none",
//             display: "block",
//             willChange: "opacity, transform",
//           }}
//           // chỉ đổi opacity (không unmount) → không giật
//           initial={{ opacity: 0 }}
//           animate={{ opacity: hovered ? 1 : 0 }}
//           transition={{ duration: 0.25, ease: "easeOut" }}
//         >
//           {/* Sửa đúng MIME theo đuôi file mp4 */}
//           <source src={item.videoUrl} type="video/mp4" />
//         </motion.video>
//       )}
//     </motion.div>
//   );
// };
"use client";

import React from "react";
import { Container, Grid, Image } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { GalleyCarousel } from "./GalleryCarousel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

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
    mt: 50,
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
    mt: 50,
    videoUrl: "/assets/galley/video4.mp4",
  },
];

export const GalleyList: React.FC = () => {
  return (
    <Container fluid size={"xl"} px={{ base: 0, sm: 40 }} mx="auto">
      <motion.div
        variants={containerVariants}
        // initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Dòng 1: Ảnh */}
        <Grid gutter={20} >
          {items.map((item) => (
            <Grid.Col key={item.alt} span={item.span} mt={item.mt} h={420}>
              <motion.div variants={itemVariants}>
                <ImageCard item={item} />
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        {/* Dòng 2: Video tự phát */}
        <Grid gutter={20}>
          {items.map((item) => (
            <Grid.Col key={item.alt + "_video"} span={item.span} mt={item.mt}>
              <motion.div variants={itemVariants}>
                <AutoPlayVideoCard item={item} />
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        <GalleyCarousel />
      </motion.div>
    </Container>
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
