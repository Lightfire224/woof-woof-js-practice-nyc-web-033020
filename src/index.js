// Mock Data
//why didnt my mock data workk
const pupsList ={
  "pups": [
    {
      "id": 1,
      "name": "Mr. Bonkers",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    },
    {
      "id": 2,
      "name": "Nugget",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
    },
    {
      "id": 3,
      "name": "Skittles",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_3.jpg"
    },
    {
      "id": 4,
      "name": "Buttercup",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_4.jpg"
    },
    {
      "id": 5,
      "name": "Lucipher",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_5.jpg"
    },
    {
      "id": 6,
      "name": "Snooper Pooper",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_6.jpg",
      "isGood": false
    },
    {
      "id": 7,
      "name": "Puddles",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_7.jpg",
      "isGood": false
    },
    {
      "id": 8,
      "name": "Mittens",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg",
      "isGood": "true"
    },
    {
      "id": 9,
      "name": "Middens",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
    },
    {
      "id": 10,
      "name": "Fido",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_5.jpg"
    }
  ]
}

function renderPupSpan(pupsList){
    console.log(pupsList)
    const dogBar = document.getElementById("dog-bar")
    pupsList.forEach(pup => {
        dogBar.innerHTML += `
        <span>Mr. Bonkers</span>
        `
    })
}

function renderPupsSpanWithData(){
    fetch(`http://localhost:3000/pups`)
        .then(response => response.json())
        .then((pups) => {
            renderPupSpan(pups)
        })
}

renderPupsSpanWithData()
