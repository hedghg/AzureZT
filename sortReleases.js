document.getElementById('sortOptions').addEventListener('change', function() {
  const sortType = this.value;
  const songsContainer = document.querySelector('.songs-container');
  const songs = Array.from(songsContainer.querySelectorAll('.song'));

  if (sortType === 'desc') {
    songs.sort((a, b) => {
      const aScore = parseInt(a.querySelector('.score').textContent.match(/\d+/)[0]);
      const bScore = parseInt(b.querySelector('.score').textContent.match(/\d+/)[0]);
      return bScore - aScore;
    });
  } else if (sortType === 'asc') {
    songs.sort((a, b) => {
      const aScore = parseInt(a.querySelector('.score').textContent.match(/\d+/)[0]);
      const bScore = parseInt(b.querySelector('.score').textContent.match(/\d+/)[0]);
      return aScore - bScore;
    });
  } 

  songsContainer.innerHTML = '';
  songs.forEach(song => songsContainer.appendChild(song));

  this.blur();
});

    document.getElementById('searchInput').addEventListener('keyup', function() {
        let query = this.value.toLowerCase();
        let songs = document.querySelectorAll('.song');
        
        songs.forEach((song) => {
            let title = song.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                song.style.display = '';
            } else {
                song.style.display = 'none';
            }
        });
    });

