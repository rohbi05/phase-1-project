

const url = 'https://project-back-end-six.vercel.app/toys';

document.addEventListener('DOMContentLoaded', function() {
    const toysList = document.getElementById('toys');
    const main = document.getElementById('main');
    let currentToy = null;

// Function to display toy details
function displayToyDetails(toy) {
    currentToy = toy;
    document.getElementById('toyname').textContent = `Toy name: ${toy.toyname}`;
    document.getElementById('toy_picture').src = toy.toy_picture;
    document.getElementById('available_toys').textContent = `Available toys: ${toy.available_toys} pcs`;
    document.getElementById('description').textContent = `Description: ${toy.description}`;
    document.getElementById('price').textContent = `Toy price: ${toy.price}`;
}

// Function to update available toys in backend (db.json)
function updateAvailableToysInBackend(toyId, newCount) {
    fetch(`${url}/${toyId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ available_toys: newCount }),
    })
    .then(response => response.json())
    .then(data => console.log('Toy updated successfully:', data))
    .catch(error => console.error('Error updating toy:', error));
}

// Function to populate toys list
function populateToys(toys) {
    toys.forEach(toy => {
        const li = document.createElement('li');
        li.textContent = toy.toyname;
        li.addEventListener('click', function() {
            displayToyDetails(toy);
        });
        toysList.appendChild(li);
    });
}

// Fetch toys data from JSON server
fetch(url)
    .then(response => response.json())
    .then(data => {
        populateToys(data);
        // Initially display details for the first toy
        if (data.length > 0) {
            displayToyDetails(data[0]);
        }
    })
    .catch(error => console.error('Error fetching toys data:', error));

// Add event listener to purchase button
document.getElementById('purchase_toy').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent page reload
    if (currentToy) {
        // Update available toys locally and in backend
        if (currentToy.available_toys > 0) {
            currentToy.available_toys--;
            updateAvailableToysInBackend(currentToy.id, currentToy.available_toys);
            document.getElementById('available_toys').textContent = `Available toys: ${currentToy.available_toys} pcs`;
            alert(`You have purchased ${currentToy.toyname}`);
        } else {
            alert(`Sorry, ${currentToy.toyname} is out of stock!`);
        }
    }
});

// Prevent default behavior of other buttons or forms if needed
document.querySelectorAll('button, form').forEach(element => {
    element.addEventListener('submit', function(event) {
        event.preventDefault();
    });
    element.addEventListener('click', function(event) {
        event.preventDefault();
    });
});
});