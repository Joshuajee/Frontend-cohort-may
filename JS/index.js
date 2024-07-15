let firstName = "Jon"
let lastName = "Doe"
let age = 60

console.log(firstName, lastName, age)

age = age - 10

console.log(age)

const arr = ["Apple", "Banana", "Orange", "Mango"]

console.log(arr[0])

console.log(arr.length)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    arr[i] = "I ate " + arr[i]
}