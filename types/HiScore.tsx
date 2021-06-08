export type skillType = {
  level: number;
  rank: number;
  xp: number;
};
export type accountResponse = {
  username: string;
  skills: {
    overall: skillType;
    attack: skillType;
    defence: skillType;
    strength: skillType;
    hitpoints: skillType;
    ranged: skillType;
    prayer: skillType;
    magic: skillType;
    cooking: skillType;
    woodcutting: skillType;
    fletching: skillType;
    fishing: skillType;
    firemaking: skillType;
    crafting: skillType;
    smithing: skillType;
    mining: skillType;
    herblore: skillType;
    agility: skillType;
    thieving: skillType;
    slayer: skillType;
    farming: skillType;
    runecraft: skillType;
    hunter: skillType;
    construction: skillType;
  };
};
