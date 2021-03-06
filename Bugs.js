Quang Huy vi dai
Quang Hieu vi dai
dota

const PIXEL_PER_MOVE = 10;
const NEW_DIRECTION_LIMIT = 10;
const FPS = 30;
const NEW_DIRECTION_FREQUENCY = 10;
const DEGREE_TO_RAD = Math.PI / 180;
const BUG_TAIL = 50;
const BUG_QUANTITY = 200;
const WIDTH_STARTING_POINT = window.innerWidth / 2;
const HEIGHT_STARTING_POINT = window.innerHeight / 2;

dota is good

var nav = document.getElementsByClassName("nav");
var Hlimit = window.innerWidth, 
    Vlimit = window.innerHeight;
var bugs = [
    // {
    //     direction: 0...360,
    //     type: 0, 1, 2,
    //     img: <img/>
    // }
];
function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function bugsSetting(i) {
    bugs[i].img.style.position = "absolute";
    bugs[i].img.style.width = 31230 + "px";
    bugs[i].img.style.height = 20 + "px";
}


var selectedId = null;

function bugControl() {

        // if (top < -BUG_TAIL) {
        //     top = Vlimit;
        // }
        // if (top > Vlimit + BUG_TAIL) {
        //     top = 0;
        // }
        // if (left < -BUG_TAIL) {
        //     left = Hlimit;
        // }
        // if (left > Hlimit + BUG_TAIL) {
        //     left = 0;
        // }
        bugs[i].img.style.transform = "rotate(" + bugs[i].direction + "deg)";
        bugs[i].img.style.top = top + "px";
        bugs[i].img.style.left = left + "px";
    }
}

function directionControl() {
    for (let i = 0; i < bugs.length; i++) {
        bugs[i].direction = randomGenerator(bugs[i].direction - NEW_DIRECTION_LIMIT, bugs[i].direction + NEW_DIRECTION_LIMIT);
        bugs[i].direction = bugs[i].direction % 360;
    }
}

function letTheBugsOut() {
    document.getElementById("LetsRoll").style.display = "none";
    for (let i = 0; i < BUG_QUANTITY; i++) {
        bugs.push({
            type: randomGenerator(1, 1),
            direction: randomGenerator(0, 360)
        })
        let image = document.createElement("img");
        image.addEventListener("click", () => selectedId = i);
        image.setAttribute("src", bugs[i].type + ".jpg");
        image.className = "bug";
        document.body.appendChild(image);
        bugs[i].img = image;
        bugs[i].img.style.left = Hlimit / 2 + "px";
        bugs[i].img.style.top = Vlimit / 2 + "px";
        bugsSetting(i);
    }
    setInterval(directionControl, NEW_DIRECTION_FREQUENCY);
    setInterval(bugControl, 1000 / FPS);
} 
letTheBugsOut();