import BinarySearchTree from "./BinarySearchTree.js";
import { Person, Employee, Student } from "./People.js";

const NUM_BINS = 5;
const KEY_LENGTH = 8;

function printBST(header, tree) {
    let text = tree.toString() + "\n";
    console.log(header + "\n" + text);
    let outputDisplay = document.getElementById("output-display");
    text = text.replaceAll(/(?:\r\n|\r|\n)/g, '<br>');
    text = text.replaceAll(" ", '&nbsp;');
    outputDisplay.innerHTML += text;
}

function addPersonToBST(person, tree) {
    tree.putValue(person.key, person);
    printBST("Current Binary Search Tree:", tree);
}

let tree = new BinarySearchTree(KEY_LENGTH);

// TEST REMOVING NONEXISTENT VALUES X3
tree.removeValue("DNEKEY1");
tree.removeValue("DNEKEY2");
tree.removeValue("DNEKEY3");


// ADDING 3 VALUES TO AN EMPTY BST
let oneKey = tree.generateKey();
tree.putValue(oneKey, new Student(oneKey, "John", "Roberts", 3.8));
let twoKey = tree.generateKey();
tree.putValue(twoKey, new Student(twoKey, "Amy", "Barret", 3.9));
let threeKey = tree.generateKey();
tree.putValue(threeKey, new Employee(threeKey, "Sonya", "Sotomayor", 10000));
printBST("\nAfter Changing 3 Items", tree);

// DEMONSTRATE ADDING VALUES TO THE BST
addPersonToBST(new Student(tree.generateKey(), "George", "Harrison", 4.0), tree);
addPersonToBST(new Employee(tree.generateKey(), "Paul", "McCartney", 80000), tree);
addPersonToBST(new Employee(tree.generateKey(), "Ringo", "Starr", 40000), tree);
addPersonToBST(new Person(tree.generateKey(), "Chuck", "Berry"), tree);
addPersonToBST(new Student(tree.generateKey(), "Mick", "Jagger", 3.5), tree);
addPersonToBST(new Student(tree.generateKey(), "Jimi", "Hendrix", 3.6), tree);
addPersonToBST(new Person(tree.generateKey(), "Roger", "Waters"), tree);

// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE BST   
let jlKey = tree.generateKey();
tree.putValue(jlKey, new Student(jlKey, "John", "Lennon", 3.8));
let cwKey = tree.generateKey();
tree.putValue(cwKey, new Student(cwKey, "Charlie", "Watts", 3.1));
let dgKey = tree.generateKey();
tree.putValue(dgKey, new Employee(dgKey, "David", "Gilmour", 120000));
printBST("\nAfter Changing 3 Items", tree);

// DEMONSTRATE ADDING VALUES TO THE BST
addPersonToBST(new Student(tree.generateKey(), "Ernest", "Rutherford", 1.6), tree);
addPersonToBST(new Person(tree.generateKey(), "Jimmy", "Carter"), tree);
addPersonToBST(new Employee(tree.generateKey(), "Ruth", "Ginsberg", 90000), tree);

// REMOVING NONEXISTENT KEYS FROM BST WITH VALUES X3
tree.removeValue("DNEKEY4");
printBST("\nAfter Removing something that does not exist x4", tree);

tree.removeValue("DNEKEY5");
printBST("\nAfter Removing something that does not exist x5", tree);

tree.removeValue("DNEKEY6");
printBST("\nAfter Removing something that does not exist x6", tree);

// DEMONSTRATE GETTING VALUES FROM THE BST
let p = tree.getValue(jlKey);
console.log("\nget " + jlKey + ": " + p.toString() + "\n");
p = tree.getValue(cwKey);
console.log("\nget " + cwKey + ": " + p.toString() + "\n");
p = tree.getValue(dgKey);
console.log("\nget " + dgKey + ": " + p.toString() + "\n");

// DEMONSTRATE ADDING VALUES TO THE BST
addPersonToBST(new Student(tree.generateKey(), "William", "Taft", 3.6), tree);
addPersonToBST(new Person(tree.generateKey(), "Ronald", "Reagan"), tree);
addPersonToBST(new Employee(tree.generateKey(), "Donald", "Trump", 10000000), tree);

// NOW LET'S TRY REPLACING THE DATA IN THE ABOVE THREE
tree.putValue(jlKey, new Student(jlKey, "Otis", "Redding", 3.5));
tree.putValue(cwKey, new Student(cwKey, "Keith", "Richards", 3.1));
tree.putValue(dgKey, new Student(dgKey, "Bill", "Withers", 3.4));
printBST("\nAfter Changing 3 Items", tree);

// DEMONSTRATE ADDING VALUES TO THE BST
addPersonToBST(new Student(tree.generateKey(), "Dwight", "Eisenhower", 2.6), tree);
addPersonToBST(new Person(tree.generateKey(), "Harry", "Truman"), tree);
addPersonToBST(new Employee(tree.generateKey(), "John", "Marhsall", 10000), tree);
addPersonToBST(new Employee(tree.generateKey(), "Thurgood", "Marshall", 70000), tree);
addPersonToBST(new Student(tree.generateKey(), "Theodore", "Roosevelt", 1.6), tree);
addPersonToBST(new Person(tree.generateKey(), "Andreww", "Johnson"), tree);

// AND DEMONSTRATE REMOVING ITEMS FROM THE BST
tree.removeValue(jlKey);
printBST("\nAfter Removing Otis Redding", tree);

tree.removeValue(cwKey);
printBST("\nAfter Removing Keith Richards", tree);

tree.removeValue(dgKey);
printBST("\nAfter Removing Bill Withers", tree);

// DEMONSTRATE ADDING VALUES TO THE BST
addPersonToBST(new Student(tree.generateKey(), "Josh", "James", 0.6), tree);
addPersonToBST(new Person(tree.generateKey(), "Joe", "Biden"), tree);
addPersonToBST(new Employee(tree.generateKey(), "Lebron", "James", 10000), tree);
addPersonToBST(new Student(tree.generateKey(), "George", "Washinton", 1.1), tree);
addPersonToBST(new Person(tree.generateKey(), "John", "Adams"), tree);
addPersonToBST(new Student(tree.generateKey(), "James", "Madison", 2.3), tree);
addPersonToBST(new Person(tree.generateKey(), "James", "Monroe"), tree);
addPersonToBST(new Employee(tree.generateKey(), "Kevin", "Hart", 10000), tree);
addPersonToBST(new Student(tree.generateKey(), "Abraham", "Lincoln", 3.0), tree);
addPersonToBST(new Person(tree.generateKey(), "Grover", "Cleveland"), tree);
addPersonToBST(new Student(tree.generateKey(), "Bill", "Clinton", 1.2), tree);
addPersonToBST(new Person(tree.generateKey(), "Jimmy", "Carter"), tree);
addPersonToBST(new Employee(tree.generateKey(), "Stephen", "Curry", 100), tree);

// DEMONSTRATE ADDING VALUES TO THE BST USING PUT VALUE DIRECTLY
tree.putValue(oneKey, new Student(oneKey, "Joe", "Roegan", 3.5));
tree.putValue(twoKey, new Student(twoKey, "Elon", "Musk", 3.1));
tree.putValue(threeKey, new Student(threeKey, "Bill", "Gates", 3.4));
printBST("\nAfter Changing 3 Items", tree);

// END OF PROGRAM
console.log("FINISHED PROGRAM");