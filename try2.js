// left side = non


function close_LEFT(){
  
    let Right_Side = document.getElementById("Right_Side");
    let SCreen = document.getElementById("Screen");
    if (SCreen.className == "NO") {
      Right_Side.style.display="flex"
        SCreen.classList.replace("NO","KO");
       
      }
      else if(SCreen.className == "KO"){
      Right_Side.style.display="none"
           
           SCreen.classList.replace("KO","NO");
     }
    
};





function search_Value(){
    
    let search_Inp = document.querySelector("#search_Inp");
    
    console.log(search_Inp.value);
    search_Inp.value = null;
}





//=======================================================================
/* let URL_LINK = [];

// Locatin   // latitude // longitude
const Location = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80878a924amshac9807be2633669p16bf90jsn7b32fc7488bc',
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};

fetch('https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8', Location)
	.then(response => response.json())
	.then(response =>{
                       //console.log(response.latitude);
                       //console.log(response.longitude);

//=====================// Wether  // description
                       const Wether = {
                       	method: 'GET',
                       	headers: {
                       		'X-RapidAPI-Key': '80878a924amshac9807be2633669p16bf90jsn7b32fc7488bc',
                       		'X-RapidAPI-Host': 'rapidweather.p.rapidapi.com'
                       	}
                       };
                       
                       fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${response.latitude}&lon=${response.longitude}`, Wether)
                       	.then(response => response.json())
                       	.then(response =>{
                                // console.log(response);
                                // console.log(response.data);
                                // console.log(response.data[0]);
                                // console.log(response.data[0].weather);
                                 console.log(response.data[0].weather.description);
                                 

//=====================// Music    //tracks
                          const Music = {
                         	method: 'GET',
                         	headers: {
                         		'X-RapidAPI-Key': '80878a924amshac9807be2633669p16bf90jsn7b32fc7488bc',
                         		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                         	}
                         };
                         
                         fetch(`https://spotify23.p.rapidapi.com/search/?q=${response.data[0].weather.description}&type=multi&offset=0&limit=10&numberOfTopResults=5`, Music)
                         	.then(response => response.json())
                         	.then(response => {
                                     console.log(response);
                                         console.log(response.tracks);
                                         for (let key in response.tracks) {
                                           let TRACKS= response.tracks[key] ;

                                           for (let key2 in TRACKS) {

                                            let TRACKS2 = TRACKS[key2]; 
                                                for (let key3 in TRACKS2) {
                                                 console.log(TRACKS2[key3]);
                                                    let artist_Arry=(TRACKS2[key3].artists["items"]);
                                                    let album_Arry=(TRACKS2[key3].albumOfTrack["name"]);
                                                    let song_Duration_Milliseconds=(TRACKS2[key3].duration["totalMilliseconds"]);
                                                    let song_Duration_Minutes = Number((song_Duration_Milliseconds / 60000).toFixed(2));
                                                   

                                                   OBJ = {
                                                       SONGS:{ 
                                                               SONG_LINK: TRACKS2[key3].uri,
                                                               SONG_NAME: TRACKS2[key3].name,
                                                               SONG_DURATION: song_Duration_Minutes,
                                                               SONG_ARTIST_LINK: artist_Arry[0].uri,
                                                               SONG_ARTIST_NAME:artist_Arry[0].profile["name"],
                                                               SONG_ALBUM_LINK: TRACKS2[key3].albumOfTrack["uri"],
                                                               SONG_ALBUM_NAME: TRACKS2[key3].albumOfTrack["name"],
                                                             }
                                                    }
                                                  URL_LINK.push(OBJ) ;
                                                   
                                                }

                                           }

                                         }

                            })

//=====================// END Music                           


                         	.catch(err => console.error(err));  // Last Line OF Music

//=====================// END Wether



                             })
                .catch(err => console.error(err)); // Last Line OF Wether

//=====================//  END Locatin 



  })
.catch(err => console.error(err));  // Last Line OF Locatin

//============================================================================
console.log(URL_LINK);  */
