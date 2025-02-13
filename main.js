fetch('https://679bb6bd33d316846324dfe5.mockapi.io/songs')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('songsContainer');
  data.forEach(song => {
    const songElement = document.createElement('div');
    songElement.innerHTML = `
      <div>
        <img src="${song.image}" alt="${song.title}" style="width:100px;height:100px;">
        <button class="play-button"><i class="ri-play-circle-line"></i></button>
        <h6>${song.title}</h6>
      </div>
    `;
    container.appendChild(songElement);
  });
// Auto-scroll function
  function autoScroll() {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
      }
  }
  
  setInterval(autoScroll, 50); 
})
.catch(error => console.error('Error fetching data:', error));

// Top charts---------------------------------

fetch('https://679bb6bd33d316846324dfe5.mockapi.io/Artists')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('artist');
  data.map(song => {
    const artist = document.createElement('div');
    artist.innerHTML = `
      <div>
        <img src="${song.image}" alt="${song.title}" style="width:100px;height:100px;">
         <h6>${song.name}</h6>
      </div>
    `;
    container.appendChild(artist);
  });
// Auto-scroll function
  function autoScroll() {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
      }
  }
  setInterval(autoScroll, 50); 
})
.catch(error => console.error('Error fetching data:', error));

//  Artists---------------------------------------

fetch('https://67ac6af55853dfff53da9f75.mockapi.io/melodysongs')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('melody');
  data.map(song => {
    const artist = document.createElement('div');
    artist.innerHTML = `
      <div>
        <img src="${song.image}" alt="${song.title}" style="width:100px;height:100px;">
         <h6>${song.title}</h6>
      </div>
    `;
    container.appendChild(artist);
  });
// Auto-scroll function
  function autoScroll() {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
      }
  }
  setInterval(autoScroll, 50); 
})
.catch(error => console.error('Error fetching data:', error));




