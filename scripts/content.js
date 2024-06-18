//Search Bar
const searchBar = document.getElementById('nav-search-bar-form');

//Clears body content -------------------------------------------------------------------------
document.body.innerHTML = '';

// var imageURL = chrome.runtime.getURL("images/cadabra-logo.png")

//Cadabra Logo
const image = document.createElement('img');
image.src = imageURL;
image.alt = 'Cadabra Logo';

//Create new div for image
const imgContainer = document.createElement('div');
imgContainer.style.display = 'flex';
imgContainer.style.justifyContent = 'center';
imgContainer.style.alignItems = 'center';
imgContainer.style.height = '1000';

//Append img to imgContainer
imgContainer.appendChild(image);

//Create div to store search bar
const container = document.createElement('div');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.height = '100vh';
container.style.color = 'white';

//Append searchBar to container
container.appendChild(searchBar);

//Append containers to document
document.body.appendChild(imgContainer);
document.body.appendChild(container);

document.documentElement.style.display = 'block'; 
