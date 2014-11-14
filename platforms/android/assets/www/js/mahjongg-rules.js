/* 
A Mahjong set contains a total of 144 tiles. Most of these form four series each of three suits: Bamboo (Sticks), Dots (Wheels), and Cracks (Numbers). Further, each game contains four sets of tiles inscribed with the Chinese characters for the four compass directions, representing the four winds, as well as four sets of three tiles called "dragons". While these tiles are represented in the game four times each, the four seasons and the four flowers are only once in the game and mach each other.

View tileset:	
 
Bamboo or Sticks

The pieces of this suit depict bamboo sticks (sou-zu).
There are four of each of the following pieces, numbered 1 through 9:

 	Bamboo 1 Bamboo 2 Bamboo 3 Bamboo 4 Bamboo 5 Bamboo 6 Bamboo 7 Bamboo 8 Bamboo 9
The 1st piece is generally rendered as a bird, usually a peacock or sparrow.

 

Dots or Wheels

This suit is formed by the wheels (pin-zu). They are also called balls. Anciently they where depicted as coins or shields.
Again, there are four of each of the following pieces, numbered 1 through 9:

 	Wheels 1 Wheels 2 Wheels 3 Wheels 4 Wheels 5 Wheels 6 Wheels 7 Wheels 8 Wheels 9
 

Cracks or Numbers

These tiles show the Chinese characters for the figures 1 through 9 (man-zu). The character on the top of each tile shows the numeral, the character below is the Chinese symbol wàn (10,000). Therefor this suit is also called the wàn suite.
There are four of each of the following pieces, numbered 1 through 9:

 	Wàn 1 Wàn 2 Wàn 3 Wàn 4 Wàn 5 Wàn 6 Wàn 7 Wàn 8 Wàn 9
 

The Four Winds

These pieces are inscribed with the Chinese characters for the four compass directions, representing the four winds. The four winds are East, West, South, North.
There are four tiles of each wind in the game:

 	East West South North
 

The Dragons

There are three "dragons":
   the red dragon (chun), symbolizing the middle or animal order (including humans),
   the green dragon (fa), symbolizing the lower or plant order of life,
   the white dragon (pai pan – white tile), symbolizing the higher or spirutual order of beings.
There are four tiles of each dragon in the game:

 	red dragon (chun) green dragon (fa) white dragon (pai pan)
 

The Flowers

There is a set of four flowers in each game. The four flowers are usually associated with a specific wind:
   Plum – East,
   Orchid – South,
   Chrysanthemum – West,
   Bamboo – North.
There is only one tile for each flower, but all four flower tiles match with each other:

 	Orchid Plum Chrysanthemum Bamboo
 

The Seasons

They are like the flower tiles and are also associated with a specific wind:
   Spring – East,
   Summer – South,
   Autumn – West,
   Winter – North.
There is only one tile for each season, but all four season tiles match with each other.

 	Spring Summer Autumn Winter
	
*/


// algorithm
// 1. create a list of empty positions for the board
// each position is x=(0-28) y=(0-14) z=(0-4)
// position can be filled, if condition is met - the positions below the positions are occupied
//  
//  ...XYZ... -> cannot remove Y before Z
//  placing tiles into rows: a tile can be placed into empty row or as adjacent tile to a tile already existing in the row
//
//

// queries on positions:
//  - get positions below current position (0 if on ground, or 1-4)
//  - get positions on the left of the current position (0 - 2 positions)
//  - get positions on the right of the current position

// algorithm:
// 1. generate positions
// 2. find neighbors to all positions




// states:
// 0 - nothing selected
// 1 - first selected
//   select the same tile -> go to 0
//   select another tile -> go to 2
// 2 - selected both
//   matching -> wait a while, remove both, goto 0
//   not matching -> select as red, wait a while, unselect, goto 0

