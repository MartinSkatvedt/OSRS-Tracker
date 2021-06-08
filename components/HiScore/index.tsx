import React from "react";
import { useQuery } from "react-query";
import SkillTable from "./SkillTable";
import { Spinner, Container, Heading } from "@chakra-ui/react";
import { accountResponse } from "../../types/HiScore";

const HiScore = () => {
  const URL = "/api/account";

  const userQuery = useQuery(
    "gameData",
    (): Promise<accountResponse> => fetch(URL).then((res) => res.json())
  );

  if (userQuery.isLoading) return <Spinner color="red.500" />;
  if (userQuery.error)
    return <div>Det skjedde en feil med hentingen av data!</div>;

  return (
    <Container>
      <Heading as="h4" size="md">
        Displaying skills for {userQuery.data.username}
      </Heading>
      <SkillTable data={userQuery.data} />
    </Container>
  );
};

export default HiScore;
