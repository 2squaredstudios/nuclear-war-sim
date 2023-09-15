var ctx = document.querySelector('canvas').getContext('2d');
var bombs = [{x: 500, y: 500}];
var cursor = {x: 0, y:0}
function loop() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 1920, 720)
    // draw bombs
    for (var i = 0; i < bombs.length; i++) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(bombs[i].x, bombs[i].y, 100, 0, Math.PI * 2);
        ctx.fill();
    }
    // draw cursor
    ctx.fillStyle = 'black';
    ctx.fillRect(cursor.x, cursor.y, 10, 10);
    requestAnimationFrame(loop);
}
loop();

document.querySelector('canvas').onmousemove = function(event) {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
}