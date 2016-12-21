//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....

// a.


function players(player){
	var player ={};
	 player.age = age,
	 player.position = position,
	 player.level = level, 
	 player.availability = availability,
	 player.player1 = player1,
	 player.addInfo = addInfo,
	 player.increaseLevel = increaseLevel,
	 player.players = players,
	 player.decreaseLevel= decreaseLevel,
	 player.sortPalyerBy = sortPalyerBy
	return player;
}

var player1 = function(){
	this.player = player1;
	return player1;
}

// b.

var addInfo = function(){
	this.player1 = this.age + this.position + this.level + this.availability;
	return this.player1;
}
 //c.
var increaseLevel = function() = {
	var count = 0;
 for (var key in obj){
 	return this.count++
 } 
}

//d.
var isAvailable = function(n) {
	if (this.availability > -1){
	return true;
    }
	else{
		return false;
	}
}

//e.

var arrayOfPlayers = [];
var players = function(){
	this.player = this.player1;
	return arrayOfPlayers.push(this.player1);
} 
 //f.
var decreaseLevel = function(){
	var count = 0
   for (var key in obj){
   		if (this.age > 30) {
 	return this.count--;
 		}
 	} 
}

//f.
var sortPalyerBy = function(){
	
}