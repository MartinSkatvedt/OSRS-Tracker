import React, { FC, useState } from "react";
import { Container, Input, Button, InputGroup } from "@chakra-ui/react";

type userSeacherProps = {
  callbackFn: (p1: string) => void;
};
const UserSearcher: FC<userSeacherProps> = ({
  callbackFn,
}: userSeacherProps) => {
  const [username, changeUsername] = useState("");
  const onSubmit = () => callbackFn(username);

  return (
    <Container>
      <InputGroup>
        <Input
          size="md"
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            changeUsername(event.currentTarget.value)
          }
          placeholder="Username"
        />
        <Button onClick={onSubmit} size="md">
          Submit
        </Button>
      </InputGroup>
    </Container>
  );
};

export default UserSearcher;
