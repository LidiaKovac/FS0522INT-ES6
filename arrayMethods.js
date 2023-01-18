//ES ARRAY METHODS
//.push(), .pop(), .sort(), splice() ...

const user = {
  id: 1,
  name: "Lidia",
  age: 24,
}
const user1 = {
  id: 2,
  name: "Cristina",
  age: 2,
}
const user2 = {
  id: 3,
  name: "Sabina",
  age: 13,
}
const user3 = {
  id: 4,
  name: "Enrico",
  age: 54,
}

const cousin = {
  id: 5,
  name: "Mattia",
  age: 16,
}
const cousin2 = {
  id: 6,
  name: "Francesco",
  age: 21,
}
const cousins = [cousin, cousin2]
const closeRelatives = [user, user1, user2, user3]
console.log("Lidia's cousins>>", cousins)
console.log("Lidia's household>>", closeRelatives)

const familyParty = [...cousins, ...closeRelatives]

const ul = document.querySelector("ul")
// for (let i = 0; i < familyParty.length; i++) {
//   const familyMember = familyParty[i]
//   ul.innerHTML += `<li> ${familyMember.name} </li>`
// }

// for (const familyMember of familyParty) {

// }

familyParty.forEach((familyMember) => { //no return
  ul.innerHTML += `<li> ${familyMember.name} </li>`
})

const namesOnly = familyParty.map((familyMember)=> {
    //return the new structure
    return familyMember.name
})

const lisOnly = familyParty.map((familyMember)=> { //returns a new array
    //return the new structure
    return `<li> ${familyMember.name} made with map </li>`
})

//[<li>something</li>,<li>something</li>,<li>something</li>,<li>something</li>]

ul.innerHTML = lisOnly.join("")




console.log(lisOnly)


// if(condition) {}
const findFamilyMember = (id) => {
  //find is better for finding unique values
  return familyParty.find((familyMember) => familyMember.id === id) //RETURN A CONDITION
}

const findLegallyDrinkingPeople = () => {
  return familyParty.filter((familyMember)=> { //same as find, but returns an array
    return familyMember.age >= 18
  })
}

console.log(findFamilyMember(2))
console.log("drinking: ", findLegallyDrinkingPeople())

const arrayOfNumbers = [22, 51, 2, 88, 22, 3]
const twelve = arrayOfNumbers.findIndex((number) => {
  return number === 12
}) //-1
const twentytwo = arrayOfNumbers.findIndex((number) => {
  return number === 22
}) //0
const three = arrayOfNumbers.findIndex((number) => {
  return number === 3
}) //4

const names = ["bati", "eleni", "mantas"]
const checkAttendance = (studentToCheck) => {
  let isPresent = names.findIndex((name) => {
    return name === studentToCheck
  })
  if (isPresent !== -1) {
    console.log(studentToCheck, " is in class today")
  } else {
    console.log(studentToCheck, " is not in class today")
  }
}

checkAttendance("stefano")//-1
checkAttendance("bati") //0
checkAttendance("mantas") //2

console.log(names.includes("stefano"))//false
console.log(names.includes("eleni"))//true
const queryToSearch = "Lidias"
const completeString = "My name is Lidia"
completeString.includes(queryToSearch) //false

//map is after forEach
//filter is after find

const sumAllNumbersAndMultiply = (first, ...rest) => {
    //rest => [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log("these are rest params => ", rest)
    console.log("these is first param => ", first)
    // let result = 0
    // for (let i = 0; i < rest.length; i++) {
    //   result += rest[i]
    // }
    let result = rest.reduce((temporarySum, currentElementOfTheArray)=> {
        console.log("temporarySum => ", temporarySum, ", currentElementOfTheArray => ", currentElementOfTheArray, `// ${temporarySum} + ${currentElementOfTheArray}`);
        return temporarySum + currentElementOfTheArray
    }, 0)
    console.log(result)
  }
  
  sumAllNumbersAndMultiply(2, 1, 2, 3, 4, 5, 6, 7, 8, 9)
