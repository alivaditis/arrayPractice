strings = ["first", "second", "third", "fourth"]
numbers = [1, 2, 3, 4]
booleans = [true, false, true, true]

// Use the pop method to remove, store, and return the last value in an array in a new value called popped.
// Returns the shortened array, returns string "fourth"

popped = strings.pop()
console.log(strings, popped)


// Use the push method to add the number 5 to the array numbers.
// Returns the array, which now includes the number 5 at the end.

numbers.push(5)
console.log(numbers)

//Use the shift method to display the middle two indexed items in the array.
//Stores the sliced array in a new value, sliced.  prints the new value as sliced array.

sliced = booleans.slice(1,3)
console.log(sliced);

//Prints the string at the third indexed value (2, not 3 because the count starts at 0)

console.log(strings[2])

//Prints the number at the fourth indexed value (3, not 4 because the count starts at 0)

console.log(numbers[3])