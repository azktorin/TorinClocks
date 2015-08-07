var canvas = document.getElementById('canvas');
var z = canvas.getContext('2d');
z.strokeStyle = '#28d1fa';
z.lineWidth = 33;

function degToRad (degree) {
	var factor = Math.PI / 180;
	return degree * factor;
}

function renderTime () {
	var now = new Date();
	var today = now.toDateString();
	var time = now.toLocaleTimeString();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var milliseconds = now.getMilliseconds();
	var newSeconds = seconds + (milliseconds / 1000);
	var th = 'TopHope';
	var author = 'Torin Clock';

	//Фон
	gradient = z.createRadialGradient(250, 250, 5, 250, 250, 300);
	gradient.addColorStop(0, '#09303a');
	gradient.addColorStop(1, '#000000');
	z.fillStyle = gradient;
	//z.fillStyle = 'rgba(0, 0, 0, .5)';
	z.fillRect(0, 0, 500, 500);

	//Часы
	z.beginPath();
	z.arc(250, 250, 225, degToRad(270), degToRad((hours * 15) - 90));
	z.stroke();

	//Минуты
	z.beginPath();
	z.arc(250, 250, 182, degToRad(270), degToRad((minutes * 6) - 90));
	z.stroke();

	//Секунды
	z.beginPath();
	z.arc(250, 250, 140, degToRad(270), degToRad((newSeconds * 6) - 90));
	z.stroke();

	//TopHope
	z.font = "25px 'Arial Black'";
	z.fillStyle = '#28d1fa';
	z.fillText(th, 190, 210);

	//Дата
	z.font = '25px "Courier New"';
	z.fillStyle = '#2bdbff';
	z.fillText(today, 137, 250);

	//Время
	z.font = '25px "Courier New"';
	z.fillStyle = '#2bdbff';
	z.fillText(time, 190, 290);

	//Автор
	z.font = '10px Arial';
	z.fillStyle = '#32a6ff';
	z.fillText(author, 220, 350);
}
setInterval(renderTime, 40);