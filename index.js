let example = [1,6,2,4,5,2]
let output = []
let number = example[0]

example.forEach(num => {
    output[num] = (output[num] || 0) + 1;
    if(output[num] > output[number]) {
        number = num
    }
})

console.log("Number", number)
console.log("occurence", output[number])

