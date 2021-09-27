function restart(){
	ball.x = can.width/2;
	ball.y = can.height/2;
	ball.velX = -ball.velX;
	ball.speed = 5;
}

canvas.addElementListener("mousemove", getmouse)

function getMousePos(evt){
	let rect = can.getBoundingClientRect();
	user.y = evt.clientY-rect.top-user.height/2;	
}
function detect_collison(ball,player){
	player.top = player.y;
	player.bottom = player.y + player.height;
	player.left = player.x;
	player.right = player.x + player.width;

	ball.top = ball.y - ball.radius;
	ball.bottom = ball.y + ball.radius;
	ball.left = ball.x - ball.radius;
	ball.right = ball.x + ball.radius;

	return player.left < ball.right && player.top < ball.bottom
}









function cpu_movement()
{
	if(cpu.y<ball.y)
		cpu.y+=5;
	else
		cpu.y-=5;
}
