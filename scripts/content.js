//Search Bar
const searchBar = document.getElementById('nav-belt');

//Clears body content -------------------------------------------------------------------------
document.body.innerHTML = '';

//Get logo URL
var imageURL = chrome.runtime.getURL("images/cadabra-logo.png")

//Cadabra Logo
const image = document.createElement('img');
image.src = imageURL;
image.alt = 'Cadabra Logo';
image.width = 800;
image.height = 800;

//Create new div for image
const imgDiv = document.createElement('div');
imgDiv.style.display = 'flex';
imgDiv.style.flexDirection = 'column';
imgDiv.style.justifyContent = 'center';
imgDiv.style.alignItems = 'center';
imgDiv.appendChild(image);  //Append img to imgContainer

//Create div to store search bar
const searchBarDiv = document.createElement('div');
searchBarDiv.style.display = 'flex';
searchBarDiv.style.flexDirection = 'column';
searchBarDiv.style.color = 'white';
searchBarDiv.appendChild(searchBar);  //Append searchBar to container

//Body div
const body = document.createElement('div');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.height = '100vh';

//Body div nests both divs inside
body.appendChild(imgDiv);
body.appendChild(searchBarDiv);

//Append body div to document
document.body.appendChild(body);

document.documentElement.style.display = 'block'; 
