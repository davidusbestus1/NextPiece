const axios = require("axios");
const fs = require("fs");
const songs = require("./songs.js");

const clientId = "YOUR_CLIENT_ID";
const clientSecret = "YOUR_CLIENT_SECRET";


// GET SPOTIFY TOKEN

async function getToken(){

    console.log("Getting Spotify token...");

    const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            auth:{
                username: clientId,
                password: clientSecret
            }
        }
    );

    return response.data.access_token;

}



// SEARCH SONG

async function searchSpotify(songName, artist, token){

    try{

        const query = `${songName} ${artist}`;


        const response = await axios.get(
            "https://api.spotify.com/v1/search",
            {
                headers:{
                    Authorization:`Bearer ${token}`
                },
                params:{
                    q: query,
                    type:"track",
                    limit:1
                }
            }
        );


        const track = response.data.tracks.items[0];


        if(track){

            return track.external_urls.spotify;

        }

        else{

            return "Not found";

        }


    }

    catch(error){

        console.log("Error finding:", songName);

        return "Not found";

    }

}



// MATCH ALL SONGS

async function createSpotifySongs(){


    const token = await getToken();


    console.log("Starting matching...");


    let updatedSongs = [];


    for(let i = 0; i < songs.length; i++){


        const song = songs[i];


        const spotifyLink = await searchSpotify(
            song[0],
            song[1],
            token
        );


        updatedSongs.push([

            song[0], // name
            song[1], // artist
            song[2], // genre
            song[3], // difficulty
            song[4], // mood
            song[5], // instrument
            spotifyLink

        ]);


        console.log(
            `${i + 1}/${songs.length}: ${song[0]}`
        );


        // prevents Spotify rate limits
        await new Promise(resolve => setTimeout(resolve, 100));

    }



    const fileContent = 
`const songs = ${JSON.stringify(updatedSongs, null, 2)};

module.exports = songs;
`;



    fs.writeFileSync(
        "songs-with-spotify.js",
        fileContent
    );


    console.log("DONE! Created songs-with-spotify.js");

}



createSpotifySongs().catch(error=>{

    console.log(
        error.response?.data || error.message
    );

});