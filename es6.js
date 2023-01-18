//default params
const multiply = (first, second = 10) => { //a "default" value to your parameters
  //if second is undefined, js will give it a value of 10
  return first * second
}

multiply(3) //12

const getUserData = (endpoint = "users") => {
  fetch("https://dummyjson.com/" + endpoint)
    .then((res) => res.json())
    .then((data) => console.log(data))
}
//'https://dummyjson.com/products'
// getUserData() //endpoint => users
// getUserData("products") // endpoint => products

//rest params
const sumAllNumbersAndMultiply = (first, ...rest) => {
  console.log("these are rest params => ", rest)
  console.log("these is first param => ", first)
  let result = 0
  for (let i = 0; i < rest.length; i++) {
    result += rest[i] * first
  }
  console.log(result)
}

// sumAllNumbersAndMultiply(2, 1, 2, 3, 4, 5, 6, 7, 8, 9)

const fetchMusic = () => {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=olivia rodrigo"
  )
    .then((res) => res.json())
    // .then((music) => {
    //   // for(let i = 0 ; i < music.data; i++) <<< very ugly :(
    //   const { data } = music //array of songs
      
    //   /*
    //         const data = music.data
    //     */

    //   const [firstSong] = data
    // //   const firstSong = data[0] < same as above
    //   console.log(firstSong)
    //   //    for (let i = 0; i < data.length; i++) {
    //   //     const {title, preview, artist} = data[i];
    //   //     console.log(title, "\n", preview)
    //   //    }

    //   const { title, preview, album } = firstSong
    // //   console.log(album)
    //   const { cover_medium } = album
    // //      const { title, preview, album: {cover_medium} } = firstSong <<< SHORTER WAY
    //   const h1 = document.querySelector("h1")
    //   const audio = document.querySelector("audio")
    //   const img = document.querySelector("img")

    //   h1.innerText = title
    //   audio.src = preview
    //   img.src = cover_medium
    // })
    .then(({data: foundMusic}) => { //medium short
      //foundMusic >>>> array of songs
        //const foundMusic = music.data
        const [firstSong] = foundMusic //firstSong is an object

        console.log(firstSong)
        const { title, preview, album: {cover_medium} } = firstSong //album is an object
        // const { cover_medium } = album
        const h1 = document.querySelector("h1")
        const audio = document.querySelector("audio")
        const img = document.querySelector("img")
  
        h1.innerText = title
        audio.src = preview
        img.src = cover_medium
      })
    //   .then(({data: [firstSong]}) => { //extra short
    //     console.log(firstSong)
    //     const { title, preview, album } = firstSong
    //     const { cover_medium } = album
    //     const h1 = document.querySelector("h1")
    //     const audio = document.querySelector("audio")
    //     const img = document.querySelector("img")
  
    //     h1.innerText = title
    //     audio.src = preview
    //     img.src = cover_medium
    //   })
}

// fetchMusic()


const user = {
  name: "Lidia", 
  age: 24
}
const user1 = {
  name: "Cristina", 
  age: 24
}
const user2 = {
  name: "Sabina", 
  age: 24
}
const user3 = {
  name: "Enrico", 
  age: 24
}

const cousin = {
  name: "Mattia", 
  age: 24
}
const cousin2 = {
  name: "Francesco", 
  age: 24
}


const userInput = { //user inputs their email and password
  email: "fakeemail@stonks.com",
  password: "mydogsname"
}

const requestBody = {...user, ...userInput} 
console.log(requestBody)

const cousins = [cousin, cousin2]
const closeRelatives = [user,user1,user2,user3]
console.log("Lidia's cousins>>", cousins)
console.log("Lidia's household>>", closeRelatives)

const familyParty = [...cousins, ...closeRelatives]

console.log("let's party!", familyParty)