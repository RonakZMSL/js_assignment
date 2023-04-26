// Q2.
// An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the 
// first letter of both the arguments. For the arguments  Roger and Waters, the function returns ‘RW’. 
// Write this function.


const getName = (firstName, lastName) => {
    return firstName.charAt(0)+lastName.charAt(0);
};

const initials = getName("Ronak", "Delvadiya"); // RD
console.log(initials);

// Another way
const getInitials = (firstName, lastName) => firstName.charAt(0)+lastName.charAt(0);
console.log(getInitials("Ronak", "Delvadiya")); // RD
