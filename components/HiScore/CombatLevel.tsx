import React from "react";
import { skillType } from "../../types/HiScore";

import {
  Container,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
} from "@chakra-ui/react";

type combatLevelProps = {
  data: skillType;
};

const calcCombatLevel = (
  defence: number,
  hp: number,
  prayer: number,
  attack: number,
  strength: number,
  ranged: number,
  magic: number
): number[] => {
  const MULTIPLIER = 13 / 40;
  const base = (defence + hp + prayer * 0.5) * (1 / 4);
  const melee = (attack + strength) * MULTIPLIER;
  const range = ranged * (3 / 2) * MULTIPLIER;
  const mage = magic * (3 / 2) * MULTIPLIER;
  const combat = base + Math.max(melee, range, mage);
  return [combat, base + melee, base + range, base + mage];
};

const CombatLevel = ({ data }: combatLevelProps) => {
  const levels = calcCombatLevel(
    data.defence.level,
    data.hitpoints.level,
    data.prayer.level,
    data.attack.level,
    data.strength.level,
    data.ranged.level,
    data.magic.level
  );
  return (
    <Container>
      <StatGroup>
        <Stat>
          <StatLabel>Combat level</StatLabel>
          <StatNumber>{levels[0].toFixed(2)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Melee level</StatLabel>
          <StatNumber>{levels[1].toFixed(2)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Ranged level</StatLabel>
          <StatNumber>{levels[2].toFixed(2)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Mage level</StatLabel>
          <StatNumber>{levels[3].toFixed(2)}</StatNumber>
        </Stat>
      </StatGroup>
    </Container>
  );
};

export default CombatLevel;
