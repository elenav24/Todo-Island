// script.js

// JavaScript data
const animals = [
    'panda' , {
        name: "Joe Lee",
        species: "Giant Panda",
        cost: 750,
        fun_fact: "Likes Pizza and Swimming"
    },
    'lions' , {
        name: "Nate ",
        species: "Lions",
        cost: 250,
        fun_fact: "Likes Roaring"
    }
];

// Function to display animal information
function displayAnimalInfo() {
    const animalContainer = document.getElementById('animalContainer');

    // Loop through the animals array and display each animal's information
    for (let i = 0; i < animals.length; i += 2) {
        const animalName = animals[i];
        const animalData = animals[i + 1];

        // Create HTML elements to display animal information
        const div = document.createElement('div');
        div.classList.add('animal');
        div.innerHTML = `
            <h2>${animalName}</h2>
            <p>Name: ${animalData.name}</p>
            <p>Species: ${animalData.species}</p>
            <p>Cost: $${animalData.cost}</p>
            <p>Fun Fact: ${animalData.fun_fact}</p>
        `;

        // Append the animal information to the container
        animalContainer.appendChild(div);
    }
}

// Call the function to display animal information
displayAnimalInfo();
