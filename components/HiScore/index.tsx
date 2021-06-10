import React, { useState } from "react";
import { useQuery } from "react-query";
import SkillTable from "./SkillTable";
import {
  Spinner,
  Container,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { accountResponse } from "../../types/HiScore";
import CombatLevel from "./CombatLevel";
import MinigameTable from "./MinigameTable";
import BossRecordTable from "./BossRecordTable";
import ClueTable from "./ClueTable";

type hiScoreProps = {
  username: string;
};

enum menuTypes {
  SKILL = "SKILL",
  MINIGAME = "MINIGAME",
  BOSS = "BOSS",
  CLUE = "CLUE",
}

const fetchData = async (key): Promise<accountResponse> => {
  const res = await fetch(`/api/account/${key.queryKey[1]}`);
  const json = await res.json();
  return json;
};

const HiScore = ({ username }: hiScoreProps) => {
  const userQuery = useQuery(["gameData", username], fetchData);
  const [currentMenu, setCurrentMenu] = useState<menuTypes>(menuTypes.SKILL);

  if (userQuery.isLoading) return <Spinner color="red.500" />;
  if (userQuery.error)
    return <div>Det skjedde en feil med hentingen av data!</div>;

  const setMenu = (event) => setCurrentMenu(event.currentTarget.value);
  return (
    <Container>
      <Heading>{userQuery.data.username}</Heading>
      <ButtonGroup variant="outline" spacing="6">
        <Button onClick={setMenu} value={menuTypes.SKILL}>
          Skills
        </Button>
        <Button onClick={setMenu} value={menuTypes.MINIGAME}>
          Minigame records
        </Button>
        <Button onClick={setMenu} value={menuTypes.BOSS}>
          Boss records
        </Button>
        <Button onClick={setMenu} value={menuTypes.CLUE}>
          Clue records
        </Button>
      </ButtonGroup>
      <CombatLevel data={userQuery.data.skills} />

      {currentMenu == menuTypes.SKILL ? (
        <SkillTable data={userQuery.data.skills} />
      ) : null}
      {currentMenu == menuTypes.MINIGAME ? (
        <MinigameTable data={userQuery.data.minigames} />
      ) : null}
      {currentMenu == menuTypes.BOSS ? (
        <BossRecordTable data={userQuery.data.bossRecords} />
      ) : null}
      {currentMenu == menuTypes.CLUE ? (
        <ClueTable data={userQuery.data.clues} />
      ) : null}
    </Container>
  );
};

export default HiScore;
