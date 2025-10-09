import { useDisclosure } from "@mantine/hooks";
import {
  Drawer,
  ThemeIcon,
  Flex,
  Box,
  Image,
  UnstyledButton,
  Anchor,
  Text,
} from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { DEFAULT_NAVIGATION_ITEMS, NavigationType } from "../index";
import "./DrawerNav.css";

interface NavProps {
  items?: NavigationType[];
}
export const DrawerNav: React.FC<NavProps> = ({
  items = DEFAULT_NAVIGATION_ITEMS,
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box component="div" hiddenFrom="md">
      <Drawer.Root
        opened={opened}
        onClose={close}
        position="right"
        size="md"
        hiddenFrom={"md"}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header style={{ borderBottom: "1px solid #f666ae", padding: 10 }}>
            <UnstyledButton component={Link} href="#">
              <Image
                src="/logo.png"
                alt="logo"
                fit="contain"
                h="100%"
                w={{
                  base: 150,
                  md: 200,
                }}
              />
            </UnstyledButton>
            <Drawer.CloseButton c={"#f666ae"} size={40} />
          </Drawer.Header>

          <Drawer.Body p={0} px={0}>
            <Flex
              pos="relative"
              h="100%"
              mt={5}
              gap={5}
              align="flex-start"
              direction={"column"}
            >
              {items.map((item) => (
                <Anchor
                  key={item.id}
                  href={item.href}
                  underline="never"
                  fw={500}
                  fz="md"
                  w={"100%"}
                  p={"5px"}
                  classNames={{
                    root: "Anchor-root",
                  }}
                >
                  <Text fz={16}  tt="uppercase" classNames={{ root: "Text-root" }}>
                    {item.label}
                  </Text>
                </Anchor>
              ))}
            </Flex>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <ThemeIcon variant="transparent" onClick={open}>
        <IconMenu2 stroke={2} color="#f666ae" />
      </ThemeIcon>
    </Box>
  );
};
