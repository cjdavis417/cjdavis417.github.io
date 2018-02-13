// keeps my age current 
var birthday = new Date('June 20, 1978 16:14:00');
var ageTimeStamp = Date.now() - birthday.getTime();
var ageStamp = new Date(ageTimeStamp);
var age = Math.abs(ageStamp.getUTCFullYear() - 1970)

document.getElementById('age').innerHTML = age;




