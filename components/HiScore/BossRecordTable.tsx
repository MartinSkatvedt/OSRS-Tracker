import React, { FC } from "react";
import { bossRecordType } from "../../types/HiScore";
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

type bossRecordTableProps = {
  data: bossRecordType;
};

const BossRecordTable: FC<bossRecordTableProps> = ({
  data,
}: bossRecordTableProps) => {
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
          Overview of account boss records. Note that bosses which have not yet
          been completed wont show
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Boss</Th>
            <Th>Rank</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>{TableElements}</Tbody>
      </Table>
    </Container>
  );
};

export default BossRecordTable;
