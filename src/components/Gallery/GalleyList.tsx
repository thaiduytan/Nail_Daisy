"use client";

import React from "react";
import { Container, Grid, Image } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { GalleryCarousel } from "./GalleryCarousel";

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
    <Container
      fluid
      size={"xl"}
      px={{ base: 5, sm: 10, md: 0, lg: 0, xl: 40 }}
      py={10}
      mx={5}
      my={5}
      style={{paddingInline: 5, marginInline: 5}}
    >
      <motion.div
        variants={containerVariants}
        // initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Dòng 1: Ảnh */}
        <Grid gutter={20} visibleFrom="sm">
          {items.map((item) => (
            <Grid.Col key={item.alt} span={item.span} mt={item.mt} h={420}>
              <motion.div variants={itemVariants}>
                <ImageCard item={item} />
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        {/* Dòng 2: Video tự phát */}
        <Grid gutter={20} visibleFrom="sm">
          {items.map((item) => (
            <Grid.Col key={item.alt + "_video"} span={item.span} mt={item.mt}>
              <motion.div variants={itemVariants}>
                <AutoPlayVideoCard item={item} />
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        <GalleryCarousel />
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
