import React, { useState } from "react";
import Image from "next/image";
import { skillType } from "../../types/HiScore";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  Button,
} from "@chakra-ui/react";
const maxXP = 13034431;

type skillTableProps = {
  data: skillType;
};

const calculateComplete = (currentXp: number): string => {
  return ((currentXp / maxXP) * 100).toFixed(2) + "%";
};

const calculateOverallComplete = (currentXp: number): string => {
  return ((currentXp / (maxXP * 23)) * 100).toFixed(2) + "%";
};

const SkillTable = ({ data }: skillTableProps) => {
  const [show, changeVisibility] = useState(false);

  const TableElements = Object.keys(data).map((key: string) => (
    <Tr key={key}>
      <Td>
        <Image
          src={`/images/${key}.png`}
          alt="skill icon"
          width="25"
          height="25"
        />
      </Td>
      <Td> {data[key].level}</Td>
      <Td> {data[key].xp}</Td>
      {key == "overall" ? (
        <Td> {calculateOverallComplete(data[key].xp)}</Td>
      ) : (
        <Td> {calculateComplete(data[key].xp)}</Td>
      )}
    </Tr>
  ));

  return (
    <Container>
      <Button
        width="100%"
        onClick={() =>
          show ? changeVisibility(false) : changeVisibility(true)
        }
      >
        {show ? "Hide skills" : "Show skills"}
      </Button>
      {show ? (
        <Table size="sm">
          <TableCaption>Overview of account skills</TableCaption>
          <Thead>
            <Tr>
              <Th>Skill</Th>
              <Th>Level</Th>
              <Th>XP</Th>
              <Th>% Complete</Th>
            </Tr>
          </Thead>
          <Tbody>{TableElements}</Tbody>
        </Table>
      ) : null}
    </Container>
  );
};

export default SkillTable;
