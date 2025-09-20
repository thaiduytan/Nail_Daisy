import { Box, Container, Flex } from "@mantine/core"
import { GalleyList } from "./GalleyList"
import { ButtonOutline } from "./ButtonOutline"

export const Gallery: React.FC = () => {
  return (
    <Box component="section" pt={{ base: 30, sm: 80 }}>
      <Container fluid px={40}>
        <Flex direction={{ base: "column-reverse", sm: "column" }} gap={{ base: 20, sm: 50 }} p={0}>
          <GalleyList/>

          <ButtonOutline>View all services</ButtonOutline>
        </Flex>
      </Container>
    </Box>
  )
}
