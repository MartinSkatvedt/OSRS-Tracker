export type skillLevelType = {
  level: number;
  rank: number;
  xp: number;
};

export type rankType = {
  rank: number;
  score: number;
};

export type skillType = {
  overall: skillLevelType;
  attack: skillLevelType;
  defence: skillLevelType;
  strength: skillLevelType;
  hitpoints: skillLevelType;
  ranged: skillLevelType;
  prayer: skillLevelType;
  magic: skillLevelType;
  cooking: skillLevelType;
  woodcutting: skillLevelType;
  fletching: skillLevelType;
  fishing: skillLevelType;
  firemaking: skillLevelType;
  crafting: skillLevelType;
  smithing: skillLevelType;
  mining: skillLevelType;
  herblore: skillLevelType;
  agility: skillLevelType;
  thieving: skillLevelType;
  slayer: skillLevelType;
  farming: skillLevelType;
  runecraft: skillLevelType;
  hunter: skillLevelType;
  construction: skillLevelType;
};

export type minigameType = {
  bountyHunter: rankType;
  bountyHunterRogue: rankType;
  LMS: rankType;
  soulWars: rankType;
};

export type bossRecordType = {
  abyssalSire: rankType;
  alchemicalHydra: rankType;
  barrowsChests: rankType;
  bryophyta: rankType;
  callisto: rankType;
  cerberus: rankType;
  chambersofXeric: rankType;
  chambersofXericChallengeMode: rankType;
  chaosElemental: rankType;
  chaosFanatic: rankType;
  commanderZilyana: rankType;
  corporealBeast: rankType;
  crazyArchaeologist: rankType;
  dagannothPrime: rankType;
  dagannothRex: rankType;
  dagannothSupreme: rankType;
  derangedArchaeologist: rankType;
  generalGraardor: rankType;
  giantMole: rankType;
  grotesqueGuardians: rankType;
  hespori: rankType;
  kalphiteQueen: rankType;
  kingBlackDragon: rankType;
  kraken: rankType;
  kreeArra: rankType;
  krilTsutsaroth: rankType;
  mimic: rankType;
  nightmare: rankType;
  obor: rankType;
  sarachnis: rankType;
  scorpia: rankType;
  skotizo: rankType;
  tempoross: rankType;
  theGauntlet: rankType;
  theCorruptedGauntlet: rankType;
  theatreofBlood: rankType;
  theatreofBloodHard: rankType;
  thermonuclearSmokeDevil: rankType;
  tzKalZuk: rankType;
  tzTokJad: rankType;
  venenatis: rankType;
  vetion: rankType;
  vorkath: rankType;
  wintertodt: rankType;
  zalcano: rankType;
  zulrah: rankType;
};

export type clueType = {
  all: rankType;
  beginner: { rank: 974965; score: 1 };
  easy: rankType;
  medium: rankType;
  hard: rankType;
  elite: rankType;
  master: rankType;
};

export type accountResponse = {
  username: string;
  type: string;
  skills: skillType;
  minigames: minigameType;
  bossRecords: bossRecordType;
  clues: clueType;
};
