/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
var url = 'http://placeholder.com';
const musicPlayer = document.querySelector('.music-player');
const musicPlaying = document.querySelector('#bandsong');
const searchBox = document.querySelector('input[name=searchbox]');
const searchButton = document.querySelector('button[name=search]');
const resultsUl = document.querySelector('#resultsUl');

// 2. Create your `submit` event for getting the user's search term

searchButton.addEventListener('click', event => {
  var capture = searchBox.value;
  url += capture;
  console.log(url);
});

// let capture = '';
// function findSongs() {
//   var capture = searchBox.value;
//   console.log(capture);
//   url += capture;
// console.log(capture);
// };

// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
