let x;
let y;
let dir;
let curve = [];
let drawn = false;
let curDir = 0;
var hue;
function setup() {
    createCanvas(800, 800);
    colorMode(HSL, 360);
    x = width / 2;
    y = height / 2;
    dir = 0;
    hue = 0;
    curve = dragon(14);
}

function draw() {
    while (!drawn && curve.length) {
        for (let i = 0; i < curve.length; i++) {
            setTimeout(() => {
                stroke(hue, 200, 200);
                drawLine(curve[i], 1.5);
                if (i == curve.length - 1) {
                    curDir = (curDir + 90) % 360;
                    dir = curDir;
                    x = width / 2;
                    y = height / 2;

                    drawn = false;
                    hue += 10;
                }
            }, 2);
        }
        drawn = !drawn;
    }
}

function drawLine(direction, len) {
    if (direction === "R") {
        dir += 90;
    } else if (direction === "L") {
        dir -= 90;
    }

    if (dir > 270) {
        dir = 0;
    } else if (dir < 0) {
        dir = 270;
    }
    switch (dir) {
        case 0:
            line(x, y, x, y - len);
            y -= len;
            break;
        case 90:
            line(x, y, x + len, y);
            x += len;
            break;
        case 180:
            line(x, y, x, y + len);
            y += len;
            break;
        case 270:
            line(x, y, x - len, y);
            x -= len;
            break;
        default:
            console.log("AHHHGGG");
    }
}

function dragon(order, len) {
    let s = ["R"];
    // new string add R, reverse old, invert and add to end.
    for (let i = 0; i < order; i++) {
        let next = [...s.slice(), "R"];
        s = s.reverse();
        for (let el of s) {
            if (el === "R") next.push("L");
            else next.push("R");
        }
        s = next;
    }
    return s;
}
