

function findSongs(){


    let level = Number(document.getElementById("level").value);

    let genre = document.getElementById("genre").value;

    let mood = document.getElementById("mood").value;

    const search = document.getElementById("search").value.toLowerCase();


    const user = JSON.parse(localStorage.getItem("user"));



    let matches = songs.filter(song => {


        let instrumentMatch = true;


        if(user && user.instrument){

            instrumentMatch = song[5] === user.instrument;

        }



        // Search mode
        // Searches the whole library by song name or artist
        if(search !== ""){


            return (

                (
                    song[0].toLowerCase().includes(search) ||
                    song[1].toLowerCase().includes(search)
                )

                && instrumentMatch

            );


        }



        // Normal discovery mode with filters
        return (

            song[2] === genre &&

            song[4] === mood &&

            song[3] <= level &&

            instrumentMatch

        );


    });




    let output = "";



    if(matches.length === 0){


        output = `

        <h3>No matches yet 😢</h3>

        <p>
        Try changing your filters or searching for another song.
        </p>

        `;


    }

    else{


        output = "<h3>Your recommendations:</h3>";



        matches.forEach(song => {


            let songIndex = songs.indexOf(song);



            output += `


            <div class="song">


                <b>${song[0]}</b><br>

                ${song[1]}<br><br>


                🎼 Genre: ${song[2]}<br>

                ⭐ Difficulty: ${song[3]}/5<br>

                🎭 Mood: ${song[4]}<br>

                🎹 Instrument: ${song[5]}<br><br>

        
                <a href="${song[6]}" target="_blank">

                <button class="spotify-button">
                    🎧 Listen on Spotify
                </button>

                </a>

                <br><br>




                <button class="favorite-button" onclick="addFavorite(${songIndex})">

                    ❤️ Add to Favorites

                </button>


                </div>


            `;


        });


    }


    document.getElementById("results").innerHTML = output;


}







function addFavorite(index){


    const song = songs[index];


    const user = JSON.parse(localStorage.getItem("user"));



    if(!user){

        alert("Please log in first.");

        return;

    }



    let favorites = user.favorites || [];



   let exists = favorites.some(

    fav =>
        fav[0] === song[0] &&
        fav[5] === song[5]

);



    if(!exists){


        favorites.push(song);



        user.favorites = favorites;



        localStorage.setItem(

            "user",

            JSON.stringify(user)

        );



        alert(song[0] + " added to favorites ❤️");


    }

    else{


        alert("This song is already in your favorites!");

    }


}









function getRecommendations(){


    const user = JSON.parse(localStorage.getItem("user"));



    if(!user || !user.favorites || user.favorites.length === 0){

        return [];

    }




    let scores = [];



    songs.forEach(song => {

  if(user.instrument && song[5] !== user.instrument){

        return;

    }


        let score = 0;



        user.favorites.forEach(fav => {



            // Same genre
            if(song[2] === fav[2]){

                score += 3;

            }



            // Same mood
            if(song[4] === fav[4]){

                score += 3;

            }



            // Similar difficulty
            if(Math.abs(song[3] - fav[3]) <= 1){

                score += 2;

            }



            // Same artist
            if(song[1] === fav[1]){

                score += 5;

            }



        });



        // Don't recommend songs already saved
        let alreadyFavorite = user.favorites.some(

            fav => fav[0] === song[0]

        );



        if(!alreadyFavorite){


            scores.push({

                song:song,

                score:score

            });


        }



    });




    scores.sort((a,b)=> b.score - a.score);



    return scores.slice(0,10);


}









function showRecommendations(){
    

    let recommendations = getRecommendations();



    let output = "";




    if(recommendations.length === 0){


        output = `

        <p>
        Add some favorite songs first so we can learn your taste ❤️
        </p>

        `;


    }


    else{


        output = "<h3>Recommended For You 🎯</h3>";



        recommendations.slice(0,3).forEach(item => {



            let song = item.song;



            output += `



            <div class="song">


                <b>${song[0]}</b><br>

                ${song[1]}<br><br>


                🎼 Genre: ${song[2]}<br>

                ⭐ Difficulty: ${song[3]}/5<br>

                🎭 Mood: ${song[4]}<br>

                🎹 Instrument: ${song[5]}<br>

               <a href="${song[6]}" target="_blank">

                <button class="spotify-button">

                    🎧 Listen on Spotify

                </button>

                </a>

                <br><br>



                <button class="favorite-button" onclick="addFavorite(${songs.indexOf(song)})">

                    ❤️ Add to Favorites

                </button>



                </div>



            `;


        });


    }



    document.getElementById("recommended").innerHTML = output;


}

function showTodaysPick(){

    const today = new Date();

    const dayNumber = Math.floor(
        today.getTime() / (1000 * 60 * 60 * 24)
    );

    const todaysTitle =
        todaysPicks[dayNumber % todaysPicks.length];

    const song = songs.find(s => s[0] === todaysTitle);

    if(!song){
        return;
    }

    document.getElementById("todaysPick").innerHTML = `

        <div class="song">

            <b>${song[0]}</b><br>

            ${song[1]}<br><br>

            🎼 Genre: ${song[2]}<br>

            ⭐ Difficulty: ${song[3]}/5<br>

            🎭 Mood: ${song[4]}<br>

            🎹 Instrument: ${song[5]}<br><br>
            <a href="${song[6]}" target="_blank">

            <button class="spotify-button">

                🎧 Listen on Spotify

            </button>

            </a>

            <br><br>

            <button
            class="favorite-button"
            onclick="addFavorite(${songs.indexOf(song)})">

                ❤️ Add to Favorites

            </button>

        </div>

    `;

}








function logout(){


    localStorage.removeItem("user");


    window.location.href="login.html";


}

document.addEventListener("DOMContentLoaded", () => {


    const links = document.querySelectorAll("a");


    links.forEach(link => {


        link.addEventListener("click", function(e){


            const destination = this.href;


            // Ignore external links
            if(destination.includes("#") || this.target === "_blank"){
                return;
            }


            e.preventDefault();


            document.body.classList.add("page-exit");


            setTimeout(() => {

                window.location.href = destination;

            },400);


        });


    });


});