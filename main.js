/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
var url = 'https://itunes.apple.com/search?term='

const musicPlayer = document.querySelector('.music-player');
const musicPlaying = document.querySelector('#bandsong');
const searchBox = document.querySelector('input[name=searchbox]');
const searchButton = document.querySelector('button[name=search]');
const resultsUl = document.querySelector('#resultsUl');
// 2. Create your `submit` event for getting the user's search term


searchButton.addEventListener('click', event => {
  var capture = searchBox.value;
  url += `${capture}&limit=15`;
  while(resultsUl.firstChild){
    resultsUl.removeChild(resultsUl.firstChild);
    }

  console.log(url);
  fetch(url).then(resp => resp.json()).then(data => {
    console.log(data);
    for (var i=0; i<data.results.length; i++){
      var dataPoint = data.results[i];
      var musicURL = dataPoint.previewUrl;
      var songName = dataPoint.trackName;

      var newLi = document.createElement('li');

      newLi.dataset.previewUrl = musicURL;
      newLi.dataset.trackName = songName;

      var newImg = document.createElement('img');
      newImg.src = dataPoint.artworkUrl100;
      newLi.appendChild(newImg);

      var newP = document.createElement('p');
      newP.textContent = dataPoint.trackName;
      newLi.appendChild(newP);

      var newH3 = document.createElement('h3');
      newH3.textContent = dataPoint.artistName;
      newLi.appendChild(newH3);

      newLi.addEventListener('click', event => {
        musicPlayer.src = event.currentTarget.dataset.previewUrl
        musicPlayer.play()
        musicPlaying.textContent = `Now Playing: ${event.currentTarget.dataset.trackName}`
      })
    resultsUl.appendChild(newLi);
    }
  })
  url = 'https://itunes.apple.com/search?term='
});


// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
