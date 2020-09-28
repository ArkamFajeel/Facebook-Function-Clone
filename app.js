 function image() {
    var img = new Image();
    img.src = prompt("Url of a picture:");
    
    // The URL isn't valid or the resource isn't a picture
    img.onerror = function() { alert("Provided URL does not point to a valid picture.") };
    
    // Ok, we have correct picture; display it
    img.onload = function() {
        document.getElementById("yourImgElement").src = img.src;
    };
 }

    

document.getElementById('input').value = "";

function getvale() {
var text = document.getElementById('input').value;
var h3 = document.createElement('h3');
var textasnwer = document.createTextNode(text);
h3.setAttribute('id' , 'text');
h3.appendChild(textasnwer);
document.getElementById('box').appendChild(h2);
document.getElementById('input').value = ''
}



function setUp() {
var setUp = prompt('What Is Your Name');
setUp.onerror = function() { alert("Provided Name does not point to a valid Name.") };
document.getElementById('set').innerHTML =  "User:" + '   '+ setUp;
}



function setUp() {
    var setUp = prompt('What Is Your Name');
    setUp.onerror = function() { alert("Provided Name does not point to a valid Name.") };
    document.getElementById('set').innerHTML =  "User:" + '   '+ setUp;
    }
    function setUp() {
        var setUp = prompt('What Is Your Name');
        setUp.onerror = function() { alert("Provided Name does not point to a valid Name.") };
        document.getElementById('set1').innerHTML =   setUp;
        }
            

function UserImg() {
    var img = new Image();
    img.src = prompt("Url of a picture:");
    
    // The URL isn't valid or the resource isn't a picture
    img.onerror = function() { alert("Provided URL does not point to a valid picture.") };
    
    // Ok, we have correct picture; display it
    img.onload = function() {
        document.getElementById("yourImgElement1").src = img.src;
    };
 }

    