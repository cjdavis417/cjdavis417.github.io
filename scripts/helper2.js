// json technical abilities
console.log("testing 1");

const abilityid = document.getElementById("abilities");
abilityid.innerHTML = "Testing 123";

fetch(abilities.json)
.then(response => response.json())
.then(json => console.log(json));