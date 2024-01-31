// Q2. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);

// 1. Sort the array and find the min and max age.
ages.sort();
// maximum age in array
const max = Math.max.apply(null, ages);
console.log(`maximum age in array = ${max}`);
// minimum age in array
const min = Math.min.apply(null, ages);
console.log(`minimum age in array = ${min}`);

// 2. Find the median age (one middle item or two middle items divided by two)
let median = undefined;
ages.sort();
const midIndex = Math.floor(ages.length / 2);
if(ages.length % 2 === 0) {
    median = (ages[midIndex - 1] + ages[midIndex])/2;
}
else {
    median = ages[midIndex];
}
console.log(`Median age = ${median}`); 

// 3. Find the average age(all items divided by number of items)
let sum = 0;
ages.forEach((element) => {
    sum += element;
});
const average_age = sum / ages.length; 
console.log(`Average age = ${average_age}`);

// 4. Find the range of the ages (max minus min)
const range = max - min;
console.log(`Range of the ages = ${range}`);

// 5. Compare the value of (min - average) and (max - average), use abs() method
if(Math.abs(min - average_age) === Math.abs(max - average_age)) {
    console.log("(min - average) and (max - average) is equel");
}
else {
    console.log("(min - average) and (max - average) is not equel");
}