import React, { useState } from "react";
import { useQuery } from "react-query";
import SkillTable from "./SkillTable";
import { Spinner, Container, Heading } from "@chakra-ui/react";
import { accountResponse } from "../../types/HiScore";
import CombatLevel from "./CombatLevel";

type hiScoreProps = {
  username: string;
};

const fetchData = async (key): Promise<accountResponse> => {
  const res = await fetch(`/api/account/${key.queryKey[1]}`);
  const json = await res.json();
  return json;
};

const HiScore = ({ username }: hiScoreProps) => {
  const userQuery = useQuery(["gameData", username], fetchData);

  if (userQuery.isLoading) return <Spinner color="red.500" />;
  if (userQuery.error)
    return <div>Det skjedde en feil med hentingen av data!</div>;

  return (
    <Container>
      <Heading as="h4" size="md">
        Displaying skills for {userQuery.data.username}
      </Heading>
      <CombatLevel data={userQuery.data} />
      <SkillTable data={userQuery.data} />
    </Container>
  );
};

export default HiScore;
