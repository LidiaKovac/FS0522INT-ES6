//NEW RENDERING COMBO! :D

const getUserData = (endpoint = "users") => {
  fetch("https://dummyjson.com/" + endpoint)
    .then((res) => res.json())
    .then((data) => {
      const {users} = data //users is an array
      const container = document.querySelector(".container")
      const arrayOfCards = users.map(({firstName, lastName, image}) => {
        return `
    <div class='col col-4'>
        <div class="card">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${firstName} ${lastName}</h5>
            </div>
        </div> 
    </div>`
      })
      const stringOfCards = arrayOfCards.join("")
      console.log(stringOfCards)
      container.innerHTML = stringOfCards
    })
}

getUserData()
