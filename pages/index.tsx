import HiScore from "../components/HiScore/index";

import {
  Container,
  Heading,
  useColorMode,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <Flex>
        <Heading as="h2" size="xl">
          OSRS tracker
        </Heading>
        <Spacer />
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>

      <HiScore />
    </Container>
  );
};

export default IndexPage;
