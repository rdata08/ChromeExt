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
const imgContainer = document.createElement('div');
imgContainer.style.display = 'flex';
imgContainer.style.flexDirection = 'column';
imgContainer.style.justifyContent = 'center';
imgContainer.style.alignItems = 'center';
imgContainer.appendChild(image);  //Append img to imgContainer

//Create div to store search bar
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.color = 'white';
container.appendChild(searchBar);  //Append searchBar to container

//Body div
const body = document.createElement('div');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh';

//Body div nests both divs inside
body.appendChild(imgContainer);
body.appendChild(container);

//Append body div to document
document.body.appendChild(body);

document.documentElement.style.display = 'block'; 
