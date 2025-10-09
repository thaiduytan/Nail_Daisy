// import { useDisclosure } from "@mantine/hooks";
// import {
//   Drawer,
//   ThemeIcon,
//   Flex,
//   Box,
//   Image,
//   UnstyledButton,
//   Anchor,
//   Text,
//   Paper,
// } from "@mantine/core";
// import { IconMenu2 } from "@tabler/icons-react";
// import Link from "next/link";
// import { DEFAULT_NAVIGATION_ITEMS, NavigationType } from "../index";
// import "./DrawerNav.css";
// import { useMatches } from "@mantine/core";

// interface SocialLink {
//   icon: React.ReactNode;
//   href: string;
// }

// interface NavProps {
//   items?: NavigationType[];
//   socialLinks?: SocialLink[];
// }
// export const DrawerNav: React.FC<NavProps> = ({
//   items = DEFAULT_NAVIGATION_ITEMS,
//   socialLinks = [],
// }) => {
//   const [opened, { open, close }] = useDisclosure(false);
//   const sizeIconSocial = useMatches({
//     base: 16,
//     md: 20,
//   });
//   return (
//     <Box component="div" hiddenFrom="md">
//       <Drawer.Root
//         opened={opened}
//         onClose={close}
//         position="right"
//         size="xs"
//         hiddenFrom={"md"}
//       >
//         <Drawer.Overlay />
//         <Drawer.Content>
//           <Drawer.Header
//             style={{ borderBottom: "1px solid #f666ae", padding: 10 }}
//           >
//             <UnstyledButton component={Link} href="#">
//               <Image
//                 src="/logo.png"
//                 alt="logo"
//                 fit="contain"
//                 h="100%"
//                 w={{
//                   base: 100,
//                   md: 200,
//                 }}
//               />
//             </UnstyledButton>
//             <Drawer.CloseButton c={"#f666ae"} size={40} />
//           </Drawer.Header>

//           <Drawer.Body p={0} px={0}>
//             <Flex
//               pos="relative"
//               h="100%"
//               mt={5}
//               gap={5}
//               align="flex-start"
//               direction={"column"}
//             >
//               {items.map((item) => (
//                 <Anchor
//                   key={item.id}
//                   href={item.href}
//                   underline="never"
//                   fw={500}
//                   fz="md"
//                   w={"100%"}
//                   p={"5px"}
//                   classNames={{
//                     root: "Anchor-root",
//                   }}
//                 >
//                   <Text
//                     fz={16}
//                     tt="uppercase"
//                     classNames={{ root: "Text-root" }}
//                   >
//                     {item.label}
//                   </Text>
//                 </Anchor>
//               ))}
//             </Flex>
//             <Flex align="center" gap={20} justify="flex-end">
//               {socialLinks.map((link, index) => (
//                 <Paper
//                   key={index}
//                   classNames={{ root: "socialLink" }}
//                   w={{ base: 30, md: 35 }}
//                   h={{ base: 30, md: 35 }}
//                 >
//                   <link.icon size={sizeIconSocial} color="#fff" />
//                 </Paper>
//               ))}
//             </Flex>
//           </Drawer.Body>
//         </Drawer.Content>
//       </Drawer.Root>
//       <ThemeIcon variant="transparent" onClick={open}>
//         <IconMenu2 stroke={2} color="#f666ae" />
//       </ThemeIcon>
//     </Box>
//   );
// };
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Paper,
  useMatches,
} from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import { DEFAULT_NAVIGATION_ITEMS, NavigationType } from "../index";
import "./DrawerNav.css";

type IconCmp = React.ComponentType<{ size?: number; color?: string }>;

interface SocialLink {
  icon: IconCmp;
  href: string;
  label?: string;
}

interface NavProps {
  items?: NavigationType[];
  socialLinks?: SocialLink[];
  logoSrc?: string;
  onNavigate?: (href: string) => void;
}

export const DrawerNav: React.FC<NavProps> = ({
  items = DEFAULT_NAVIGATION_ITEMS,
  socialLinks = [],
  logoSrc = "/logo.png",
  onNavigate,
}) => {
  
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  const sizeIconSocial = useMatches({
    base: 16,
    md: 20,
  });

  const handleNavigate = (href: string) => {
    onNavigate?.(href);
    close();
  };

  return (
    <Box component="div" hiddenFrom="md">
      <Drawer.Root opened={opened} onClose={close} position="right" size="xs">
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header
            style={{ borderBottom: "1px solid #f666ae", padding: 10 }}
          >
            <UnstyledButton
              component={Link}
              href="/"
              aria-label="Go to home"
              onClick={() => handleNavigate("/")}
            >
              <Image
                src={logoSrc}
                alt="NailsArt logo"
                fit="contain"
                h="100%"
                w={{ base: 120, md: 180 }}
              />
            </UnstyledButton>
            <Drawer.CloseButton c="#f666ae" size={40} />
          </Drawer.Header>

          <Drawer.Body p={0}>
            <Flex
              pos="relative"
              h="100%"
              mt={5}
              gap={5}
              align="flex-start"
              direction="column"
            >
              {items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Anchor
                    key={item.id}
                    component={Link}
                    href={item.href}
                    underline="never"
                    fw={600}
                    fz="md"
                    w="100%"
                    p="8px 12px"
                    classNames={{ root: "Anchor-root" }}
                    onClick={() => handleNavigate(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    data-active={isActive || undefined}
                  >
                    <Text
                      fz={16}
                      tt="uppercase"
                      classNames={{ root: "Text-root" }}
                    >
                      {item.label}
                    </Text>
                  </Anchor>
                );
              })}
            </Flex>


              <Flex h={100} align="center" gap={12} justify="flex-end" p="12px">
                {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                  <Anchor
                    key={`${href}-${idx}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label || "Social link"}
                    onClick={close}
                  >
                    <Paper
                      classNames={{ root: "socialLink" }}
                      w={{ base: 34, md: 38 }}
                      h={{ base: 34, md: 38 }}
                      component="span"
                    >
                      <Icon size={sizeIconSocial} color="#fff" />
                    </Paper>
                  </Anchor>
                ))}
              </Flex>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <ThemeIcon
        variant="transparent"
        onClick={open}
        aria-label="Open navigation menu"
      >
        <IconMenu2 stroke={2} color="#f666ae" />
      </ThemeIcon>
    </Box>
  );
};
