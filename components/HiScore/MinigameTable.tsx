import React, { useState } from "react";
import Image from "next/image";
import { minigameType } from "../../types/HiScore";
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

type minigameTableProps = {
  data: minigameType;
};

/*

 <Image
          src={`/images/${key}.png`}
          alt="skill icon"
          width="25"
          height="25"
        />

        */

const MinigameTable = ({ data }: minigameTableProps) => {
  const TableElements = Object.keys(data).map((key: string) =>
    data[key].rank >= 0 || data[key].score >= 0 ? (
      <Tr key={key}>
        <Td>{key}</Td>
        <Td> {data[key].rank}</Td>
        <Td> {data[key].score}</Td>
      </Tr>
    ) : null
  );

  return (
    <Container>
      <Table size="sm">
        <TableCaption>
          Overview of account minigames. Note that minigames which have not yet
          been completed wont show
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Minigame</Th>
            <Th>Rank</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>{TableElements}</Tbody>
      </Table>
    </Container>
  );
};

export default MinigameTable;
