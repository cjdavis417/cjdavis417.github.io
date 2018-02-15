// keeps my age current 
var birthday = new Date('June 20, 1978 16:14:00');
var ageTimeStamp = Date.now() - birthday.getTime();
var ageStamp = new Date(ageTimeStamp);
var age = Math.abs(ageStamp.getUTCFullYear() - 1970);

document.getElementById('age').innerHTML = age;

var docHashes = ['profile', 'experiences', 'abilities', 'projects', 'contact']

// generates the way points
for (var i = 0; i < docHashes.length; i++) {

    var waypoint = new Waypoint({
        element: document.getElementById(docHashes[i]),
        handler: function(direction) { 
            // var expLi = document.getElementById('experiences-li');
            // var expLiClass = expLi.classList;
            console.log(docHashes[i] + " has reached the top.");
            var hashLoc = document.getElementById(docHashes[i]);
            hashLoc.style.background = '#434242';
            hashLoc.style.color = '#fff';

        },
    
        
        offset: 20
    });

}








