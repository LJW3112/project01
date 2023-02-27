// 定义画布
let canvas = document.querySelector("canvas");
// 定义画笔
let context = canvas.getContext('2d');
// 定义画布大小
let w = window.innerWidth;
let h = window.innerHeight;
canvas.width = w;
canvas.height = h;
// 定义雪的数量
let num = 200;
let snows = [];
for(let i = 0;i < num; i++){
    snows.push({
        x:Math.random()*w,
        y:Math.random()*h,
        r:Math.random()*10+1
    });
}
let move = () => {
    for(let i = 0; i < num; i++){
        let snow = snows[i];
        snow.x += Math.random()*2+1;
        snow.y += Math.random()*2+1;
        snow.x = snow.x > w ? 0 : snow.x;
        snow.y = snow.y > h ? 0 : snow.y;
    }
}
let draw = () => {
    context.clearRect(0,0,w,h);
    context.beginPath();
    context.fillStyle = 'rgb(255,255,255)';
    context.shadowColor = 'rgb(255,255,255)';
    context.shadowBlur = 10;

    for(let i = 0; i < num; i++){
        let snow = snows[i];
        context.moveTo(snow.x,snow.y);
        context.arc(snow.x,snow.y,snow.r,0,Math.PI*2);
    }
    context.fill();
    context.closePath();
    move();
}
draw();
setInterval(draw,30);