import { Box, Container, Flex } from "@mantine/core"
import { ServiceList } from "./ServiceList"
import { ButtonOutline } from "../Gallery/ButtonOutline"

export const Service: React.FC = () => {
  return (
    <Box component="section" pt={80}>
      <Container size="xl" mx="auto">
        <Flex direction="column" gap={50} p={0}>
          <ServiceList />
          <ButtonOutline>View all services</ButtonOutline>
        </Flex>
      </Container>
    </Box>
  )
}
