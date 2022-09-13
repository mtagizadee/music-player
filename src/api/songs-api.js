const songs = [
    {
        id: 1,
        name: 'Another Love',
        author: 'Tom Odell',
        image: require('../assets/images/purple-image.jpg'),
        audio: require('../assets/audio/another-love.mp3')
    },
    {
        id: 2,
        name: 'Another Love',
        author: 'Tom Odell',
        image: require('../assets/images/song-banner.jpg'),
        audio: require('../assets/audio/another-love.mp3')
    },
    {
        id: 3,
        name: 'Another Love',
        author: 'Tom Odell',
        image: require('../assets/images/brown-image.jpg'),
        audio: require('../assets/audio/another-love.mp3')
    },
    {
        id: 4,
        name: 'Another Love',
        author: 'Tom Odell',
        image: require('../assets/images/song-banner.jpg'),
        audio: require('../assets/audio/another-love.mp3')
    },
    {
        id: 5,
        name: 'Another Love',
        author: 'Tom Odell',
        image: require('../assets/images/purple-image.jpg'),
        audio: require('../assets/audio/another-love.mp3')
    },
    {
        id: 6,
        name: 'Another Love',
        author: 'Tom Odell',
        image: require('../assets/images/brown-image.jpg'),
        audio: require('../assets/audio/another-love.mp3')
    }
]

// TODO: connect a really api

export default class SongsApi {
    static async fetchSongs() {
        return songs;
    }

    static async fecthSong(id) {
        return songs.find((song) => song.id === id);
    }
}