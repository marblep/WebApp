window.onload = init;

function init()
{
	var button = document.getElementById("random");
	button.onclick = OnRandomClicked;
}

function OnRandomClicked()
{
	var img1 = document.getElementById("img1");
	img1.src = getRandomImage();
	
	var img2 = document.getElementById("img2");
	img2.src = getRandomImage();
	
	var img3 = document.getElementById("img3");
	img3.src = getRandomImage();
	
	var img4 = document.getElementById("img4");
	img4.src = getRandomImage();
}

function getRandomImage()
{
	num = Math.ceil(Math.random()*10);
	return "images/" + num + ".png";
}