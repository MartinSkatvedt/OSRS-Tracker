import React, { useState, FC } from "react";
import HiScore from "../components/HiScore/index";
import UserSearcher from "../components/UserSearcher/index";
import {
  Container,
  Heading,
  useColorMode,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const IndexPage: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [username, setUsername] = useState("SurBacon");

  const nameChanger = (un: string) => setUsername(un);
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

      <UserSearcher callbackFn={nameChanger} />
      <HiScore username={username} />
    </Container>
  );
};

export default IndexPage;
