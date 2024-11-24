document.getElementById('searchInput').addEventListener('keyup', function () {
    filterSongs();
});

document.getElementById('filterType').addEventListener('change', function () {
    filterSongs();
});

function filterSongs() {
    let query = document.getElementById('searchInput').value.toLowerCase();
    let type = document.getElementById('filterType').value;
    let songs = document.querySelectorAll('.song');

    songs.forEach((song) => {
        let title = song.querySelector('h3').textContent.toLowerCase();
        let artist = song.querySelector('em').textContent.toLowerCase();
        let releaseType = song.querySelector('.release-type').textContent.toLowerCase();

        let matchesSearch = title.includes(query) || artist.includes(query);
        let matchesType = (type === 'all') || (type === 'album' && releaseType.includes('альбом')) || (type === 'single' && releaseType.includes('сингл'));

        if (matchesSearch && matchesType) {
            song.style.display = '';
        } else {
            song.style.display = 'none';
        }
    });
}

