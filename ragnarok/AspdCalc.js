'use strict';

const ASPD =
  200 -
  (WD - (Math.round((WD * AGI) / 25) + Math.round((WD * DEX) / 100) / 10)) *
    (1 - SM);

//Base Time Between Attacks (BTBA)
const BTBA = 1;

//Weapon Delay
const WD = 50 * BTBA;

//Agility / Dexterity
const AGI = 1;
const DEX = 1;

//Speed Modifier
const SM = 0;
