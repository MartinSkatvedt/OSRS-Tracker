import React, { FC, memo } from "react";
import { Box, useColorMode, Button, Flex, Image } from "@chakra-ui/react";
import UserSearcher from "../UserSearcher";

type navbarProps = {
  callbackFn: (p1: string) => void;
};
const NavBar: FC<navbarProps> = ({ callbackFn }: navbarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box width="100%" padding="10px">
      <Flex>
        <Image
          src={`/images/logos/RSlogo.png`}
          alt="skill icon"
          width="50"
          height="50"
        />
        <UserSearcher callbackFn={callbackFn} />
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Box>
  );
};

export default memo(NavBar);
