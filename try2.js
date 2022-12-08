// left side = non

let Right_Side = document.getElementById("Right_Side");
Right_Side.style.display = "none";
function close_LEFT() {
  let SCreen = document.getElementById("Screen");
  if (SCreen.className == "NO") {
    // Right_Side.style.display="flex"
    SCreen.classList.replace("NO", "KO");
  } else if (SCreen.className == "KO") {
    Right_Side.style.display = "none";

    SCreen.classList.replace("KO", "NO");
  }
}

let Right_Side_Open_BTN = document.getElementsByClassName(
  "Right_Side_Open_BTN"
);
let Right_XX = document.getElementsByClassName("Right_XX");
Right_XX[0].addEventListener("click", (e) => {
  Right_Side.style.display = "none";
  Right_Side_Open_BTN[0].style.display = "block";
  // Right_XX.style.display="block";
});

console.log(Right_Side_Open_BTN);
Right_Side_Open_BTN[0].addEventListener("click", (e) => {
  if ((Right_Side.style.display = "none")) {
    Right_Side.style.display = "flex";
    // e.target.style.display = "none";
  }
});

function search_Value() {
  let search_Inp = document.querySelector("#search_Inp");

  console.log(search_Inp.value);
  search_Inp.value = null;
}

//=======================================================================

let URL_LINK = [];

function Location() {
  return new Promise((resolve, reject) => {
    const Location = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "80878a924amshac9807be2633669p16bf90jsn7b32fc7488bc",
        "X-RapidAPI-Host":
          "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com"
      }
    };

    fetch(
      "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=204.141.32.155&apikey=873dbe322aea47f89dcf729dcc8f60e8",
      Location
    )
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      });
  });
}

function Wether(location) {
  return new Promise((resolve, reject) => {
    const Wether = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "80878a924amshac9807be2633669p16bf90jsn7b32fc7488bc",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"
      }
    };

    fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${location.latitude}&lon=${location.longitude}`,
      Wether
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        resolve(response);
      });
  });
}

function Music(response) {
  return new Promise((resolve, reject) => {
    const Music = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "80878a924amshac9807be2633669p16bf90jsn7b32fc7488bc",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com"
      }
    };

    fetch(
      `https://spotify23.p.rapidapi.com/search/?q=${response.data[0].weather.description}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
      Music
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        resolve(response);
      });
  });
}

function AddDataToUSEDATA(response) {
  return new Promise((resolve, reject) => {
   
    for (let key in response.tracks) {
        let TRACKS = response.tracks[key];

        for (let key2 in TRACKS) {
          let TRACKS2 = TRACKS[key2];
              for (let key3 in TRACKS2) {
            console.log(TRACKS2[key3]);
            let artist_Arry = TRACKS2[key3].artists["items"];
            let album_Arry = TRACKS2[key3].albumOfTrack["name"];
            let song_Duration_Milliseconds =
              TRACKS2[key3].duration["totalMilliseconds"];
            let song_Duration_Minutes = Number(
              (song_Duration_Milliseconds / 60000).toFixed(2)
            );

            let SONGS = {
              SONG_LINK: TRACKS2[key3].uri,
              SONG_NAME: TRACKS2[key3].name,
              SONG_DURATION: song_Duration_Minutes,
              SONG_ARTIST_LINK: artist_Arry[0].uri,
              SONG_ARTIST_NAME: artist_Arry[0].profile["name"],
              SONG_ALBUM_LINK: TRACKS2[key3].albumOfTrack["uri"],
              SONG_ALBUM_NAME: TRACKS2[key3].albumOfTrack["name"]
            };

            URL_LINK.push(SONGS);
          }
         };
  
    
    }
    resolve(URL_LINK);
  });
}

function trye(URL_LINK2) {
  console.log(URL_LINK2);
  let tbody = document.querySelector("tbody");
  let tr="";

  

  URL_LINK2.forEach((element2, index) => {
    tr += ` <tr class="SONG_INFOS">  
    <td class="Songs_Title_Wrapper"> <a class="Songs_Title SONG_INFOS_Same_Font_Size" href="${element2["SONG_LINK"]}">${element2["SONG_NAME"]}</a> </td>
    <td class="Songs_Time_Wrapper SONG_INFOS_Same_Font_Size">${element2["SONG_DURATION"]}</td>
    <td class="Songs_Albums_Wrapper"> <a class="Songs_Albums SONG_INFOS_Same_Font_Size" href="${element2["SONG_ALBUM_LINK"]}">${element2["SONG_ALBUM_NAME"]}</a></td>
    <td class="Songs_Artist_Wrapper"> <a class="Songs_Artist SONG_INFOS_Same_Font_Size" href="${element2["SONG_ARTIST_LINK"]}">${element2["SONG_ARTIST_NAME"]}</a></td>
    </tr>  
    `;
  });

  tbody.innerHTML += tr;
  
}

Location()
  .then((response) => {
    console.log(response);
    return Wether(response);
  })
  .then((response) => {
    console.log(response);
    return Music(response);
  })
  .then((URL_LINK2) => {
    console.log(URL_LINK2);
    return AddDataToUSEDATA(URL_LINK2);
  })
  .then((response) => {
    console.log(response);
    trye(response);
  });
