import React from "react";
import Image from "next/image";
import { accountResponse } from "../../types/HiScore";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
} from "@chakra-ui/react";
const maxXP = 13034431;

type skillTableProps = {
  data: accountResponse;
};

const calculateComplete = (currentXp: number): string => {
  return ((currentXp / maxXP) * 100).toFixed(2) + "%";
};

const calculateOverallComplete = (currentXp: number): string => {
  return ((currentXp / (maxXP * 23)) * 100).toFixed(2) + "%";
};

const SkillTable = ({ data }: skillTableProps) => {
  const TableElements = Object.keys(data.skills).map((key: string) => (
    <Tr key={key}>
      <Td>
        <Image
          src={`/images/${key}.png`}
          alt="skill icon"
          width="25"
          height="25"
        />
      </Td>
      <Td> {data.skills[key].level}</Td>
      <Td> {data.skills[key].xp}</Td>
      {key == "overall" ? (
        <Td> {calculateOverallComplete(data.skills[key].xp)}</Td>
      ) : (
        <Td> {calculateComplete(data.skills[key].xp)}</Td>
      )}
    </Tr>
  ));

  return (
    <Container>
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
    </Container>
  );
};

export default SkillTable;
