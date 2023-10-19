const inputSentence = "This is a sunny day";
const reversedSentence = inputSentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
console.log(reversedSentence);
