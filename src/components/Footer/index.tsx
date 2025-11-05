import { Box, Divider, Flex, Text, Image, UnstyledButton } from "@mantine/core"
import Link from "next/link"
export const Footer: React.FC = () => {
  return (
    <Box
      component="section"
      //   h={175}
      bg={"#0D0105"}
      style={{ alignItems: "center" }}
      p={{ base: "10px 10px 0", xl: "10px 100px 0", xxl: "10px 150px 0" }}
    >
      <Flex
        direction={{ base: "column-reverse", sm: "column-reverse", xl: "row" }}
        justify={"space-between"}
        align={"center"}
        gap={{ base: 15, xl: 50 }}
      >
        <Box display={"flex"} style={{ flexDirection: "row", gap: 20 }}>
          <Text fz={14} c={"#f0f0f0"}>
            Privacy Policy
          </Text>
          <Divider my={5} orientation="vertical" />
          <Text fz={14} c={"#f0f0f0"}>
            Terms & Condition
          </Text>
        </Box>
        <Flex
          w={{ base: "100%", xl: "55%" }}
          direction={{ base: "column", sm: "row" }}
          justify={"space-between"}
          align={"center"}
          gap={15}
        >
          <Image
            fit="cover"
            w={{ base: 200, sm: 170 }}
            src="/LogoDA.svg"
            alt="logo"
          />
          <Box display={"flex"} style={{ flexDirection: "row", gap: 15 }}>
            <UnstyledButton
              component={Link}
              href="https://www.instagram.com/coolnailbydaisy/?igsh=MXJtN2pwOXpiMmVzaQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              <Image
                fit="cover"
                w={31}
                h={30}
                src="/assets/media/Facebook.svg"
                alt="logo"
              />
            </UnstyledButton>
            <UnstyledButton
              component={Link}
              href="https://www.instagram.com/coolnailbydaisy/?igsh=MXJtN2pwOXpiMmVzaQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              <Image
                fit="cover"
                w={31}
                h={30}
                src="/assets/media/Instagram.svg"
                alt="logo"
              />
            </UnstyledButton>
          </Box>
        </Flex>
      </Flex>
      <Box
        style={{
          textAlign: "center",
          borderTop: "1px solid #6E6769",
          padding: 10,
        }}
      >
        <Text c={"#8D8789"} fz={9}>
          Copyright © 2022 Nail Art Studio, All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}
