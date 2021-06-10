import React, { useState, FC } from "react";
import HiScore from "../components/HiScore";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const IndexPage: FC = () => {
  const [username, setUsername] = useState("SurBacon");

  const nameChanger = (un: string) => setUsername(un);
  return (
    <Box>
      <NavBar callbackFn={nameChanger} />
      <HiScore username={username} />
    </Box>
  );
};

export default IndexPage;
