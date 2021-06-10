import React, { useState } from "react";
import Image from "next/image";
import { clueType } from "../../types/HiScore";
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

type clueTableProps = {
  data: clueType;
};

/*

 <Image
          src={`/images/${key}.png`}
          alt="skill icon"
          width="25"
          height="25"
        />

        */

const ClueTable = ({ data }: clueTableProps) => {
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
          Overview of account clue completions. Note that clues which have not
          yet been completed wont show
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Rank</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>{TableElements}</Tbody>
      </Table>
    </Container>
  );
};

export default ClueTable;
