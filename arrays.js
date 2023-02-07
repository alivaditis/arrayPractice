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

//Use the shift method to display the second and third indexed items in the array.
//Stores the sliced array in a new value, sliced.  prints the new value as sliced array.
sliced = booleans.slice(1,3)
console.log(sliced);