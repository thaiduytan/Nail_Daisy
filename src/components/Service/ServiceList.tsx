"use client"

import { lora } from "@/theme/fonts"
import { Flex, Grid, Image, Text, Title, UnstyledButton } from "@mantine/core"
import { useMemo } from "react"
import classes from "./Service.module.css"

export type ServiceType = {
  image: string
  title: string
  description: string
  href?: string
}

export const ServiceList: React.FC = () => {
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
    ]
  }, [])
  return (
    <Grid gutter={0}>
      {serviceList.map((service) => (
        <Grid.Col
          className={classes.serviceCardCol}
          key={service.title}
          span={3}
          p={0}
        >
          <Flex
            classNames={{ root: classes.serviceCard }}
            direction="column"
            gap={10}
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
              c="main.0"
              fw={300}
              fz={30}
            >
              {service.title}
            </Title>
            <Text ta="center" fz={16}>
              Penatibus in nunc tortor eu. Euismod vehicula sit aliquet viverra
              molestie.
            </Text>
            <UnstyledButton mt={10}>
              <Text ta="center" fz={16} fw={600} tt="uppercase">
                View details
              </Text>
            </UnstyledButton>
          </Flex>
        </Grid.Col>
      ))}
    </Grid>
  )
}
