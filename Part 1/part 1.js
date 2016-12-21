//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
function makeStudent(name , age , education , nationality){
	return {
		name: name,
		age: age,
		education: education,
		nationality: nationality
	};
}

var student1 = makeStudent("Kamal" , 24 , "BSc Mechanical" , "syrian")
var student2 = makeStudent("Saleem" , 22 , "BSc in programming" , "syrian")
 var arr = [student1 , student2]

function showFriend(std){
	return std["name"] + " with the age of " + std[age] + " and with " + std["education"]
}

function avergeStudents(std){
	return arr.std[age]/ arr.length
}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...
function square(x){
	return x*x;
}

function rangeSquared(arg , square){
 var genArg = Array.from(arg);
  square.apply(this , arg);
}



/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....

function allLeaders(arr){
	var newArr[];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[i + 1]){
		newArr.push(arr[i])
		}
	}
	return newArr;
}