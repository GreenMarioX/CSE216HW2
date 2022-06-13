import OpenAddressHashTable from "./OpenAddressHashTable.js";
import { Person, Employee, Student, Undergraduate } from "./People.js";

const NUM_BINS = 5;
const KEY_LENGTH = 8;

function printHashTable(header, hashTable) {
    let text = hashTable.toString();
    text = header + "\n" + text;
    console.log(text);
    let outputDisplay = document.getElementById("output-display");
    text = text.replaceAll(/(?:\r\n|\r|\n)/g, '<br>');
    text = text.replaceAll(" ", '&nbsp;');
    outputDisplay.innerHTML += text;
}

function addPersonToHashTable(person, hashTable) {
    hashTable.putValue(person.key, person);
    printHashTable("Current Hash Table:", hashTable);
}

let hashTable = new OpenAddressHashTable(NUM_BINS, KEY_LENGTH);

// TEST REMOVING NONEXISTENT VALUES X3
hashTable.removeValue("DNEKEY1");
printHashTable("\nAfter Removing something that does not exist x1", hashTable);

hashTable.removeValue("DNEKEY2");
printHashTable("\nAfter Removing something that does not exist x2", hashTable);

hashTable.removeValue("DNEKEY3");
printHashTable("\nAfter Removing something that does not exist x3", hashTable);

// ADDING 3 VALUES TO AN EMPTY HASH TABLE
let oneKey = hashTable.generateKey();
hashTable.putValue(oneKey, new Student(oneKey, "John", "Roberts", 3.8));
let twoKey = hashTable.generateKey();
hashTable.putValue(twoKey, new Student(twoKey, "Amy", "Barret", 3.9));
let threeKey = hashTable.generateKey();
hashTable.putValue(threeKey, new Employee(threeKey, "Sonya", "Sotomayor", 10000));
printHashTable("\nAfter Changing 3 Items", hashTable);

// DEMONSTRATE ADDING VALUES TO THE HASH TABLE, WHICH INCLUDES THE NEED TO MAKE THE HASH TABLE BIGGER
addPersonToHashTable(new Student(hashTable.generateKey(), "George", "Harrison", 4.0), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Paul", "McCartney", 80000), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Ringo", "Starr", 40000), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Chuck", "Berry"), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "Mick", "Jagger", 3.5), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "Jimi", "Hendrix", 3.6), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Roger", "Waters"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Roger", "Waters", 3.1, "U1"), hashTable);

// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE HASH TABLE    
let jlKey = hashTable.generateKey();
hashTable.putValue(jlKey, new Student(jlKey, "John", "Lennon", 3.8));
let cwKey = hashTable.generateKey();
hashTable.putValue(cwKey, new Student(cwKey, "Charlie", "Watts", 3.1));
let dgKey = hashTable.generateKey();
hashTable.putValue(dgKey, new Employee(dgKey, "David", "Gilmour", 120000));
printHashTable("\nAfter Changing 3 Items", hashTable);

// DEMONSTRATE ADDING VALUES TO THE HASH TABLE
addPersonToHashTable(new Student(hashTable.generateKey(), "Ernest", "Rutherford", 1.6), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Jimmy", "Carter"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Andrew", "Jackson", 2.1, "U1"), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Ruth", "Ginsberg", 90000), hashTable);

// REMOVING NONEXISTENT KEYS FROM HASH TABLE WITH VALUES X3
hashTable.removeValue("DNEKEY4");
printHashTable("\nAfter Removing something that does not exist x4", hashTable);

hashTable.removeValue("DNEKEY5");
printHashTable("\nAfter Removing something that does not exist x5", hashTable);

hashTable.removeValue("DNEKEY6");
printHashTable("\nAfter Removing something that does not exist x6", hashTable);

// DEMONSTRATE GETTING VALUES FROM THE HASH TABLE
let p = hashTable.getValue(jlKey);
console.log("\nget " + jlKey + ": " + p.toString() + "\n");
p = hashTable.getValue(cwKey);
console.log("\nget " + cwKey + ": " + p.toString() + "\n");
p = hashTable.getValue(dgKey);
console.log("\nget " + dgKey + ": " + p.toString() + "\n");

// DEMONSTRATE ADDING VALUES TO THE HASH TABLE
addPersonToHashTable(new Student(hashTable.generateKey(), "William", "Taft", 3.6), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Ronald", "Reagan"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Clarence", "Thomas", 1.1, "U1"), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Donald", "Trump", 10000000), hashTable);

// NOW LET'S TRY REPLACING THE DATA IN THE ABOVE THREE
hashTable.putValue(jlKey, new Student(jlKey, "Otis", "Redding", 3.5));
hashTable.putValue(cwKey, new Student(cwKey, "Keith", "Richards", 3.1));
hashTable.putValue(dgKey, new Student(dgKey, "Bill", "Withers", 3.4));
printHashTable("\nAfter Changing 3 Items", hashTable);

// DEMONSTRATE ADDING VALUES TO THE HASH TABLE
addPersonToHashTable(new Student(hashTable.generateKey(), "Dwight", "Eisenhower", 2.6), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Harry", "Truman"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Woodrow", "Wilson", 2.2, "U4"), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "John", "Marhsall", 10000), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Thurgood", "Marshall", 70000), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "Theodore", "Roosevelt", 1.6), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Andreww", "Johnson"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Franklin", "Roosevelt", 2.2, "U4"), hashTable);

// AND DEMONSTRATE REMOVING ITEMS FROM THE BST
hashTable.removeValue(jlKey);
printHashTable("\nAfter Removing Otis Redding", hashTable);

hashTable.removeValue(cwKey);
printHashTable("\nAfter Removing Keith Richards", hashTable);

hashTable.removeValue(dgKey);
printHashTable("\nAfter Removing Bill Withers", hashTable);

// DEMONSTRATE ADDING VALUES TO THE HASH TABLE
addPersonToHashTable(new Student(hashTable.generateKey(), "Josh", "James", 0.6), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Joe", "Biden"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Will", "Smith", 2.1, "U2"), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Lebron", "James", 10000), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "George", "Washinton", 1.1), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "John", "Adams"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Thomas", "Jefferson", 1.9, "U4"), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "James", "Madison", 2.3), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "James", "Monroe"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "John", "Tyler", 1.2, "U3"), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Kevin", "Hart", 10000), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "Abraham", "Lincoln", 3.0), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Grover", "Cleveland"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "George", "Bush", 4.0, "U1"), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "Bill", "Clinton", 1.2), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Jimmy", "Carter"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "John", "Kennedy", 1.2, "U2"), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Stephen", "Curry", 100), hashTable);

// DEMONSTRATE ADDING VALUES TO THE HASH TABLE USING PUT VALUE DIRECTLY
hashTable.putValue(oneKey, new Student(oneKey, "Joe", "Roegan", 3.5));
hashTable.putValue(twoKey, new Student(twoKey, "Elon", "Musk", 3.1));
hashTable.putValue(threeKey, new Student(threeKey, "Bill", "Gates", 3.4));
printHashTable("\nAfter Changing 3 Items", hashTable);

// END OF PROGRAM
console.log("FINISHED PROGRAM");