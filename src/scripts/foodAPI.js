console.log("APIs make the world a fine place.")

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })

// ***** Step by step how the ABOVE fetch call works ***** //
// fetch("http://localhost:8088/food")
//     .then(foods => {
//         console.log("foods", foods)
//         // parse results of fetch request to json
//         return foods.json()
//     })
//     .then(parsedFoods => {
//         // display json data in the console
//         console.table(parsedFoods)
//         parsedFoods.forEach(food => {
//             console.log("food", food)
//         })
//     })


// ***** BEGINNING OF DISPLAYING FOODS EXERCISE ***** //

// Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.
// Create a DOM element in your index.html with a class of foodList.
// Create a function which returns a string template. The template is the HTML representation for a food item.
// Create a function that inserts an HTML representation of a food into the DOM


const foodFactory = (food) => {
    return `
    <section class="food">
        <h1>${food.name}</h1>
        <p>
            ${food.category}<br>
            ${food.ethnicity}
        </p>  
    </section>
    `
}

const addFoodToDom = (food) => {
    const foodContainer = document.querySelector(".foodList")
    foodContainer.innerHTML += food
}
                
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        })
    })

// ***** Use Flexbox row direction so that you have a horizontal list of items. (IN CSS) ***** //




