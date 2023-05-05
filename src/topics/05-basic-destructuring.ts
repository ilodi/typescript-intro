interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 34,
    song: "Auto lite",
    details: {
        author: "Max mad",
        year: 2020
    }
}


const { song: anotherSong, songDuration: duration } = audioPlayer;
const {author: autorName} = audioPlayer.details;

//console.log(`Song: ${anotherSong}`)
//console.log(`Duration: ${duration}`)
//console.log(`Author: ${autorName}`)

//const dbz: string[]=['goku','vegta', 'trunks']
//const trunks = dbz[2]||'No hay personaje'
const [ , , trunks = 'Not body']: string[]=['goku','vegta', 'trunks']

console.error('Personaje 3:', trunks)