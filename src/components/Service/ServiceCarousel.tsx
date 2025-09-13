"use client";

import { lora } from "@/theme/fonts";
import { Flex, Image, Text, Title, UnstyledButton } from "@mantine/core";
import { useMemo } from "react";
import classes from "./Service.module.css";
import { Carousel } from "@mantine/carousel";

export type ServiceType = {
  image: string;
  title: string;
  description: string;
  href?: string;
};

export const ServiceCarousel: React.FC = () => {
  const serviceList: ServiceType[] = useMemo(() => {
    return [
      {
        image: "/assets/service/nail_art.png",
        title: "Nail Art",
        description:
          "Penatibus in nunc tortor eu. Euismod vehicula sit aliquet viverra molestie.",
      },
      {
        image: "/assets/service/manicure.png",
        title: "Manicure",
        description:
          "Ullamcorper vestibulum varius adipiscing eu. Lorem nibh elementum id leo.",
      },
      {
        image: "/assets/service/pedicure.png",
        title: "Pedicure",
        description:
          "Elementum cras rhoncus feugiat rhoncus sapien et Nunc aliquam.",
      },
      {
        image: "/assets/service/other_services.png",
        title: "Other Services",
        description:
          "Tincidunt euismod sem eget mauris et interdum neque. Fames sed tortor.",
      },
    ];
  }, []);
  return (
    <Carousel
      hiddenFrom="xs"
      classNames={{
        slide: classes.slide,
        controls: classes.controls,
        control: classes.control,
      }}
      p={"0 20px"}
    >
      {serviceList.map((service) => (
        <Carousel.Slide
          className={classes.serviceCardCol}
          key={service.title}
          p={" 0 10px"}
        >
          <Flex
            classNames={{ root: classes.serviceCard }}
            direction={"column"}
            gap={30}
            align="center"
            justify="center"
          >
            <Image
              src={service.image}
              alt={service.title}
              fit="cover"
              w="auto"
              h={84}
            />
            <Title
              ta="center"
              className={lora.className}
              order={3}
              c="#ffffff"
              fw={300}
              fz={30}
            >
              {service.title}
            </Title>
            <Text c="#ffffff" ta="center" fz={16}>
              Penatibus in nunc tortor eu. Euismod vehicula sit aliquet viverra
              molestie.
            </Text>
            <UnstyledButton mt={10}>
              <Text c="#ffffff" ta="center" fz={16} fw={600} tt="uppercase">
                View details
              </Text>
            </UnstyledButton>
          </Flex>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
