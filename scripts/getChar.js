const languagePTBR = "&lang_id=10";
const extensionName = ".png";

var modal = document.getElementById("my-modal");

var btn = document.querySelectorAll(".char-gallery-link");
var span = document.getElementsByClassName("close")[0];

btn.forEach(element => {
  element.onclick = function() {
    modal.style.display = "block";
    getCharData(element.id);
  };
});

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const getCharData = function(characterName) {
  const charURL =
    "https://cms.paladins.com/wp-json/wp/v2/champions?slug=" +
    characterName +
    languagePTBR;

  fetch(charURL)
    .then(response => {
      response.json().then(data => {
        champion = data[0];
        let championName = champion.api_information.Name;

        if (championName === "Bomb King") {
          championName = "Bomb-King";
        }
        if (championName === "Sha Lin") {
          championName = "Sha-Lin";
        }
        if (championName === "Mal'Damba") {
          championName = "MalDamba";
        }

        let imgLargeURL =
          "https://web2.hirez.com/paladins/assets/Carousel/" +
          championName +
          extensionName;

        document.querySelector(".char-image").src =
          // champion.api_information.ChampionIcon_URL;
          imgLargeURL;

        document.querySelector("#char-name").innerHTML =
          champion.api_information.Name;
        document.querySelector("#char-title").innerHTML =
          champion.api_information.Title;
        document.querySelector("#char-lore").innerHTML =
          champion.api_information.Lore;

        document.querySelector("#name-skill-1").innerHTML =
          champion.api_information.Ability1;
        document.querySelector("#skill-img-1").src =
          champion.api_information.ChampionAbility1_URL;
        document.querySelector("#skill-1").innerHTML =
          champion.api_information.abilityDescription1;
        document.querySelector("#name-skill-2").innerHTML =
          champion.api_information.Ability2;
        document.querySelector("#skill-img-2").src =
          champion.api_information.ChampionAbility2_URL;
        document.querySelector("#skill-2").innerHTML =
          champion.api_information.abilityDescription2;
        document.querySelector("#name-skill-3").innerHTML =
          champion.api_information.Ability3;
        document.querySelector("#skill-img-3").src =
          champion.api_information.ChampionAbility3_URL;
        document.querySelector("#skill-3").innerHTML =
          champion.api_information.abilityDescription3;
        document.querySelector("#name-skill-4").innerHTML =
          champion.api_information.Ability4;
        document.querySelector("#skill-img-4").src =
          champion.api_information.ChampionAbility4_URL;
        document.querySelector("#skill-4").innerHTML =
          champion.api_information.abilityDescription4;
        document.querySelector("#name-skill-5").innerHTML =
          champion.api_information.Ability5;
        document.querySelector("#skill-img-5").src =
          champion.api_information.ChampionAbility5_URL;
        document.querySelector("#skill-5").innerHTML =
          champion.api_information.abilityDescription5;
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};
