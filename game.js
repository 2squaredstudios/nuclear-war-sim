var ctx = document.querySelector('canvas').getContext('2d');
var bombs = [{x: 500, y: 500}];
var cursor = {x: 0, y:0};

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
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'green';
    ctx.fillRect(cursor.x - 10, cursor.y - 2, 20, 5);
    ctx.fillRect(cursor.x - 2, cursor.y - 10, 5, 20);
    ctx.beginPath();
    ctx.arc(cursor.x, cursor.y, 10, 0, Math.PI * 2);
    ctx.stroke();
    requestAnimationFrame(loop);
}
loop();

document.querySelector('canvas').onmousemove = function(event) {
    var rect = canvas.getBoundingClientRect();
    cursor.x = event.clientX - rect.left;
    cursor.y = event.clientY - rect.top;
}