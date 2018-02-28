// keeps my age current 
var birthday = new Date('June 20, 1978 16:14:00');
var ageTimeStamp = Date.now() - birthday.getTime();
var ageStamp = new Date(ageTimeStamp);
var age = Math.abs(ageStamp.getUTCFullYear() - 1970);

// variables for the navigation
var profLi = document.getElementById('profile-li');
var expLi = document.getElementById('experiences-li');
var abilLi = document.getElementById('abilities-li');
var projLi = document.getElementById('projects-li');
var contLi = document.getElementById('contact-li');

// inserts current age to webpage
document.getElementById('age').innerHTML = age;

// array of main sections id's
var docHashes = ['profile', 'experiences', 'abilities', 'projects', 'contact']

// generates the way points
for (var i = 0; i < docHashes.length; i++) {
    wayPoints(docHashes[i]);
}

// fuction for handling the waypoint classes - navigation
function wayPoints(hash) {
    var waypoint = new Waypoint({
        element: document.getElementById(hash),
        handler: function(direction) { 

            // used this to test if the waypoints were working.
            if (hash == "profile") {
                profLi.className = 'active';
                expLi.className = ' ';
                abilLi.className = ' ';
                projLi.className = ' ';
                contLi.className = ' ';
            } else if (hash == "experiences") {
                profLi.className = ' ';
                expLi.className = 'active';
                abilLi.className = ' ';
                projLi.className = ' ';
                contLi.className = ' ';
            } else if (hash == "abilities") {
                profLi.className = ' ';
                expLi.className = ' ';
                abilLi.className = 'active';
                projLi.className = ' ';
                contLi.className = ' ';
            } else if (hash == "projects") {
                profLi.className = ' ';
                expLi.className = ' ';
                abilLi.className = ' ';
                projLi.className = 'active';
                contLi.className = ' ';
            } else if (hash == "contact") {
                profLi.className = ' ';
                expLi.className = ' ';
                abilLi.className = ' ';
                projLi.className = ' ';
                contLi.className = 'active';
            }
        },
        offset: 20
    });
    return this.waypoint;
}





