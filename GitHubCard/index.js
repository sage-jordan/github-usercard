import { create } from "domain";

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const axios = require('axios');
axios.get('https://api.github.com/users/sage-jordan')
  .then(response=>{
    console.log(response);
    return createThisThing(response);
  })
  .catch(err=>{
    console.log(err);
  })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createThisThing (obj) {
  // <div class="card">
  const card = document.createElement('div');
  card.classList.add('card');
  // <img src={}/>
  const image = document.createElement('img');
  image.src = 'https://avatars1.githubusercontent.com/u/50002551?v=4';
  card.appendChild(image);
  // <div class="card-info">
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);
  // <h3 class="name">Sage Jordan</h3>
  const h3Name = document.createElement('h3');
  h3Name.textContent = `${obj.name}`;
  cardInfo.appendChild(h3Name);
  // <p class="username">sage-jordan</p>
  const userName = document.createElement('p');
  userName.classList.add('username');
  cardInfo.appendChild(userName);
  // <p>Location: {users location}</p>
  const locaion = document.createElement('p');
  location.textContent = `Location: ${obj.location}`;
  cardInfo.appendChild(location);
  // <p>Profile:
  const profile = document.createElement('p');
  cardInfo.appendChild(profile);
  // <a href={address to users github page}>{address to users github page}</a>
  const githubHTML = document.createElement('a');
  githubHTML.href = obj.url;
  githubHTML.textContent = obj.url;
  profile.appendChild(githubHTML);
  // <p>Followers: {users followers count}</p>
  const followers = document.createElement('p');
  followers.textContent = `Followers: ${obj.followers}`;
  cardInfo.appendChild(followers);
  // <p>Following: {users following count}</p>
  const following = document.createElement('p');
  following.textContent = `Following: ${obj.following}`;
  cardInfo.appendChild(following);
  // <p>Bio: {users bio}</p>
  const bio = document.createElement('p');
  bio.textContent = `Bio: ${obj.bio}`;
  cardInfo.appendChild(bio);
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
