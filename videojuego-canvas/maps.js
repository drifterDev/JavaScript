"use strict";
/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
 */

const emojis = {
  "-": " ",
  O: "🏯",
  X: "💣",
  I: "🍓",
  PLAYER: "🐱‍👤",
  BOMB_COLLISION: "🔥",
  GAME_OVER: "💀",
  W: "🌟",
};

const maps = [];
maps.push(`
IXXXX--XXX
---XXX--XX
-X--XXX--X
-XX----XXX
-XXX-X--XX
-XXX---XXX
-XX--XXXXX
-X--XXX--X
---XXX--XX
OXXXX--XXX
`);
maps.push(`
IXXXX--XXX
---XXX--XX
-X--XXX--X
-XX----XXX
-XXX-X--XX
-XXX---XXX
-XX--XXXXX
-X--XXX--X
---XXX--XX
OXXXX--XXX
`);
maps.push(`
IXXXX--XXX
---XXX--XX
-X--XXX--X
-XX----XXX
-XXX-X--XX
-XXX---XXX
-XX--XXXXX
-X--XXX--X
---XXX--XX
OXXXX--XXX
`);
maps.push(`
IXXXX--XXX
---XXX--XX
-X--XXX--X
-XX----XXX
-XXX-X--XX
-XXX---XXX
-XX--XXXXX
-X--XXX--X
---XXX--XX
OXXXX--XXX
`);
maps.push(`
IXXXX--XXX
---XXX--XX
-X--XXX--X
-XX----XXX
-XXX-X--XX
-XXX---XXX
-XX--XXXXX
-X--XXX--X
---XXX--XX
OXXXX--XXX
// `);
// maps.push(`
// O--XXXXXXX
// X--XXXXXXX
// XX----XXXX
// X--XX-XXXX
// X-XXX--XXX
// X-XXXX-XXX
// X---XX--XX
// XX--XXX-XX
// XXXX---IXX
// XXXXXXXXXX
// `);
// maps.push(`
// I-----XXXX
// XXXXX-XXXX
// XX----XXXX
// XX-XXXXXXX
// XX-------X
// XXXXXXXX-X
// XX-------X
// XX-XXXXXXX
// XX-----OXX
// XXXXXXXXXX
// `);
// maps.push(`
// O---------
// -XXXX-XXX-
// -X----XX--
// -X-XXXXXX-
// -X-------X
//   --XXXXXX-X
//   XX---X---X
//   -X-XX--XX-
//   -IXX--XX-X
//   X----XX--X
//   `);
// maps.push(`
//   XX-----XXX
//   X--XXX--XX
//   --XXXXX-XX
//   -XXXIXX--X
//   --X--XXX--
//   X---XXXXX-
//   XXXXXXXX--
//   X----XX--X
//   XOXX----XX
//   XXXXXXXXXX
//   `);

maps.push(`
    WW--WW--WW
    W--WWWW--W
    --WW--WW--
    -WW-WW-WW-
    WW-WWWW-WW
    WW-WWWW-WW
    -WW-WW-WW-
    --WW--WW--
    W--WWWW--W
    WW--WW--WW
  `);
