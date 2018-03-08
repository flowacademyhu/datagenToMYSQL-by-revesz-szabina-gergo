const fs = require('fs');
let roomsAndPlaces = ['attic', 'basement', 'bathroom', 'bedroom', 'cellar', 'closet', 'den', 'dining_room', 'front_yard', 'garage', 'hall', 'hallway', 'kitchen', 'laundry', 'living_room', 'master_bedroom', 'office', 'pantry', 'patio', 'playroom', 'porch', 'staircase', 'study', 'sun_room', 'TV_room', 'workshop'];
let colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'violet', 'purple', 'magenta', 'pink', 'brown', 'white', 'gray', 'black'];
let purposes = ['seating', 'sleeping_or_lying', 'entertainment', 'tables', 'storage', 'sets']
let furnitures = ['armchair', 'armoire', 'bar_stool', 'bassinet', 'beach_chair', 'bean_bag_chair', 'bed', 'bed_table', 'bench', 'bentwood_rocker', 'bergere', 'bookcase', 'bookshelf', 'breakfront', 'buffet', 'bunk_bed', 'bureau', 'cabinet', 'canopy_bed', 'captains_chair', 'card_table', 'carpet', 'cart', 'chair', 'chaise_lounge', 'chandelier', 'chest', 'chest_of_drawers', 'china_cabinet', 'clothes_valet', 'club_chair', 'coffee_table', 'console', 'cot', 'couch', 'cradle', 'credenza', 'crib', 'cubbies', 'cupboard', 'curio', 'curtains', 'cushion', 'deck_chair', 'desk', 'desk_chair', 'dining_room_table', 'directors_chair', 'display_cabinet', 'divan', 'drapery', 'drapes', 'dresser', 'easel', 'easy_chair', 'end_table', 'fateuil', 'file_cabinet', 'folding_chair', 'folding_screen', 'footrest', 'footstool', 'four-poster_bed', 'furnishings', 'furniture', 'futon', 'game_table', 'garden_bench', 'gateleg_table', 'glider_rocker', 'grandfather_clock', 'hall_tree', 'hammock']
let insertsrt = 'insert into ######### (id, name, purpose, dimensions, room, colour, has_legs, num_of_legs) values (';
let numOfLegsVariants = [2, 3, 4];
let numOfLegs;
let use = 'use @@@@@@@@@@;\n';
let createTable = 'CREATE TABLE ######### (id INT(4), name VARCHAR(20), purpose VARCHAR(20), dimensions VARCHAR(20), room VARCHAR(20), colour VARCHAR(20), has_legs TINYINT, num_of_legs TINYINT);\n';



fs.appendFileSync('output.txt', use);
fs.appendFileSync('output.txt', createTable);
for (let i = 1; i < 622; i++) {
  let dimx = Math.floor((Math.random() * 22) + 1) * 10;
  let dimy = Math.floor((Math.random() * 15) + 1) * 10;
  let dimz = Math.floor((Math.random() * 4) + 1) * 10;
  let hasLegs = Math.floor(Math.random() * 2);
  if (hasLegs == 1) {
    numOfLegs = numOfLegsVariants[Math.floor(Math.random() * numOfLegsVariants.length)];
  } else {
    numOfLegs = 0;
  }
  result = ((insertsrt) + i + ", '" + furnitures[Math.floor(Math.random() * furnitures.length)] + "', '" + purposes[Math.floor(Math.random() * purposes.length)] + "', '" + dimx + '*' + dimy + '*' + dimz + "', '" + roomsAndPlaces[Math.floor(Math.random() * roomsAndPlaces.length)] + "', '" + colors[Math.floor(Math.random() * colors.length)] + "', " + hasLegs + ", " + numOfLegs + ');\n');
	fs.appendFileSync('output.txt', result);

}
