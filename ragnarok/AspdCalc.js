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
let AGI = 1;
let DEX = 1;

//Speed Modifier
let SM = [];

const addSM = SM.push();

const computeSM = function (speedModifier) {
  return console.log(speedModifier.reduce(item => item + speedModifier, 0));
};
