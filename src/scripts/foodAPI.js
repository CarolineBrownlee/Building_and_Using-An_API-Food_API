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
            ${food.ethnicity}<br>
            ${food.barcode}<br>
            ${food.ingredients}<br>
            ${food.countryOfOrigin}<br>
            ${food.caloriesPerServing}<br>
            ${food.fatPerServing}<br>
            ${food.sugarPerServing}
        </p>  
    </section>
    `
}

const addFoodToDom = (food) => {
    const foodContainer = document.querySelector(".foodList")
    foodContainer.innerHTML += food
}
                
// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             const foodAsHTML = foodFactory(food)
//             addFoodToDom(foodAsHTML)
//         })
//     })

// ***** BEGINNING OF FETCHING OTHER PEOPLE'S DATA EXERCISE ***** //

// Your job is to query the Open Food Facts API for each of your products, and list the following additional information.

// Ingredients
// Country of origin
// Calories per serving
// Fat per serving
// Sugar per serving
// Helpful hints: You will need to use the forEach array method to iterate your foods. Inside that forEach, you will need to perform another fetch to get the additional information. The barcode value must be interpolated inside the URL for the inner fetch.

fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    if (productInfo.product.nutriments.fat_value) {
                      food.fatPerServing = productInfo.product.nutriments.fat_value
                    } else {
                      food.fatPerServing = "Not available."
                    }

                    // Produce HTML representation
                    const foodAsHTML = foodFactory(food)

                    // Add representaiton to DOM
                    addFoodToDom(foodAsHTML)
                })
        })
    })

