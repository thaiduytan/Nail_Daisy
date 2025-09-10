import { Box, Container, Flex } from "@mantine/core"
import { GalleyList } from "./GalleyList"
import { ButtonOutline } from "./ButtonOutline"

export const Gallery: React.FC = () => {
  return (
    <Box component="section" pt={80}>
      <Container fluid px={40}>
        <Flex direction="column" gap={50} p={0}>
          <GalleyList />

          <ButtonOutline>View all services</ButtonOutline>
        </Flex>
      </Container>
    </Box>
  )
}
