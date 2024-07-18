# END OF PHASE-1 PROJECT
## Requirements
- App `MUST`have a HTML/CSS front end that acesses data from a db.json file
- Entire app`MUST`run on a single page and its should contain one HTML file.
-   Use at least 3  distinct event Listeners
- project myst implement ne array iteration 
- Follow good coding practices  do not repeat yourself
## user story
- The app is designed to purchase various  toys arccording to ones preference
- once you get onto  the app you are present with a list of toys once you click
on a toy it displays on the right displaying the toy  you have clicked , its details and how many are in stock.
- once you click on purchase  you get an  alert notifying you its bought and once you click okay  the number of available toys reduces indicating  purchase was successful
- if sold out you get an alert notifying you that the o you are trying to putchase is sold out 

## Technologies  required
- json server
- css
- HTML
- javascript

## prerequisites
- Have node.js on your computer
- Have JSON  server installed on your computer
  - online  toy store .
```
│
├── css/
│ └── style.css # Styles for the application
│
├── script/
│ └── script.js # Main JavaScript file with all functionality
│
├── db.json # JSON Server database file
│
├── index.html # Main HTML file
│
└── README.md # Project documentation
```

  ## usage 
  - Buy toys


  # script js explanation
   - `DOMContentLoaded` ensures that all DOM Content is  fully loaded  before the HTMl is fully loaded
   - ` displayToyDetails` displays  the toy  details
   - ` updateAvailableToysInBackend` udates the available tickets in back end
   - `populate Toys` populates the toy list
   - `fetch(url)`fetches toy data from Json
   - `click`once the the purchase  toy button is clicked the toy is purchased and the number of toys decreases,updates the back end and shows an alert when the purchase button is clicked
   - `querySelector` prevents  default behaviour of  other buttons
- `submit ` to submits the purchase toy request when purchase toy is clicked 
## contributing 
feel free to submit a pull request for any changes or improvements
 ##Author
 [Shantal Rohbi](https://github.com/dashboard)
 ## deployed link 
 [link](https://phase-1-project-blush.vercel.app/)




