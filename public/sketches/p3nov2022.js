export default function (p) {
    let $ = [];
    let r;

    p.setup = function () {
        p.createCanvas(540, 540);
    }

    p.draw = function () {
        p.background(0, 9);
        $ = $.map((v, i) => p.stroke(i, i/3, i/5).point(v.copy().add(2, 1.6).mult(135)) + v.add(p.sin(v.y * (r = (v.x * 2 + 2.5 ^ v.y + 2) * 8)) / 90, p.cos(v.x * r) / 90))[2e3] ? $.slice(-1980) : [...$, ...[...Array(20)].map(p5.Vector.random3D)];
    }

    p.keyPressed = function () {
        console.log(p.frameRate());
    }
}