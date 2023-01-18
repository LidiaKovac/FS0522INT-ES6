const users = []
// async function getUserData() {
    
    // }
    // const getUserData = async function() {
        
        // }
// const getUserData = (endpoint = "users") => {
//     fetch("https://dummyjson.com/" + endpoint)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err))
//   }
const getUserData = async (endpoint = "users") => {
    try {
        let res = await fetch("https://dummyjson.com/" + endpoint, {
            method: "GET",
            headers: {
                authorization: "yes"
            }
        }) //await stops the code
        let { users } = await res.json() //object
        console.log(users)
    } catch(err) {
        console.log(err)
    }
}
getUserData() //endpoint => users

const sum = (a,b) => {
    return a+b
}

let result = sum(2,3)
