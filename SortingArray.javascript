const numbers = [5, 2, 9, 1, 5, 6, 3, 8];

numbers.sort(function(a, b) {
    return b - a; // Compare in descending order
});

console.log(numbers);
