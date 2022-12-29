// json technical abilities
console.log("testing 1");
fetch(abilities.json)
.then(response => response.json())
.then(json => console.log(json));