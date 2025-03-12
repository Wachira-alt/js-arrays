//create arrays
//Array is a data structure
//Collection of elements
//ordered collection that means that each element or member has an assigned index

const shoppingList = [
    'Bread',
    'Menengai soap',
    'sugar',
    'Quarter',
    'unga',
];
console.log(shoppingList);




//size of an array
console.log(shoppingList.length);

//access elements in an array
//objects- we use the dot notation or square bracket notation   person.firstName or person["firstName"]
//arrays - square bracket access operator (pass in the index

console.log(shoppingList[2]);

//access the  last element in an array
const arrayLength = shoppingList.length;
console.log(arrayLength)
console.log(shoppingList[arrayLength - 2]);

//easier way - at method
console.log(shoppingList .at(2));


//ARRAY METHODS - there are two categories
//Destructive and non-destructive methods
//Mutation - change
// .push(), .unshift(), .pop(), .slice(), .splice()

const student = [];
//append a student name inside the student array
//.push-adds at the end
console.log(
    student.push("Abdul", "Alfa"," Anderson")
);
console.log(student);

//.unshift- adds at the start

console.log(student.unshift('victor', 'prizen'))
console.log(student);

//NON-DESTRUCTIVELY ADD NAME TO THE ARRAY
//spread operator - depends with the positioning

const list = ['arnold', 'Aquila', 'Kulavi'];

const allStudents =[...list, "Boniface", "Kaloki"];
console.log(allStudents);

// .pop removes the last element from the list
console.log(allStudents.pop());
//.shift removes the first element from the list
console.log(allStudents.shift());

//slice
//splice



