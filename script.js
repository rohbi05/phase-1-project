const url ="http://localhost:3000/toys"
 document.addEventListener('DOMContentloaded',() => {
    fetchToys();
    fetchToyDetails();//gets film detsils from localhost
 })
 function fetchToys(){
    fetch(url)
    .then(responce => response.json)
    .then(toys => {
        const toyList = document.getElementById('toys');
        toyList.innerHTML = '';// clears html list
        
//enabless looping in arrays
toys.forEach( toy => {
    const li = document.getElementById('toys');
    li.className ='toy item';
    li.innerText = toy.name ;
    li.addEventListener('click',() => fetchToyDetails (toy.id));//once item is clicked its info is displayed
    toyList.appendChild(li)

      if (available-toys === 0){
        li.classList.add('sold-out');

      }

});
    })
    .catch(error => console.error('Error fetching films:',error));
 }
 function fetchToyDetails(id){
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(toy =>{
        displayToyDetails(toys);

    })
    .catch(error => console.error('Error fetching films',error));
 }
 function fetchToyDetails(id){
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(toys => {
        displayToyDetails(film);
    })
    .catch(error => console.error('Error fetching film data',error));

 }
  function displayToyDetails(toys){
    const { toyname, available_toys, description, price, toy_picture } = toys;

    document.getElementById('toy_picture').scr = toy_picture;
    document.getElementById('toyname').innerText = toyname ;
    document.getElementById( 'description').innerText =`Description: ${toy.description}`;
    document.getElementById('price' ).innerText =`price: ${price}`;
    document.getElementById('available_toys').innerText =`available: ${available_toys}`;

 const purchaseToyButton = document.getElementById(`purchase_toy`);
       purchaseToyButton.disabled = availableToys === 0 ;
       purchaseToyButton.innerText = availableToys === 0 ? 'sold out' : 'Buy Toy';

       

       purchaseToyButtonButton.onclick  = () => purchaseToyButton(toy);

   } 
   function purchase_toy(toy){
    const availableToys = toy.available_toys

if(availableToys >0 ) {
const updtedAvailableToys = toy.availableToys  -1;
fetch(`${url}/${toy.id}`,{
    method:'PATCH',
    headers: {
        'Content-Type':'application/json',

    },
    body:JSON.stringify({available_toys :updatedToysSold}),
 })
 .then(response => response.json())
 .then( updatedToy => {
    displayToyDetails(updatedToy)
    toys();//refreshes toy list
 })
 .catch(error => console.error('Error updating film data:', error));

}

}
