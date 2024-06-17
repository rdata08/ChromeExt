//Cadabra Logo
const image = document.createElement('img');
image.src = 'images/cadabra-logo.png'

//Create new div for image
const imgContainer = document.createElement('div');

//Append img to imgContainer
imgContainer.appendChild(image);

//Search Bar
const searchBar = document.getElementById('nav-search-bar-form');

//Clears body content -------------------------------------------------------------------------
document.body.innerHTML = '';

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
document.body.appendChild(imgContainer)
document.body.appendChild(container);

document.documentElement.style.display = 'block'; 
