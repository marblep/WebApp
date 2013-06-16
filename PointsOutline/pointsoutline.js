window.addEventListener('load', eventWindowLoaded, false);	

function eventWindowLoaded() {
	canvasApp();
}


function canvasApp(){

	var theCanvas = document.getElementById('canvas');
  	if (!theCanvas || !theCanvas.getContext) {
    		return;
  	}
  
  	var context = theCanvas.getContext('2d');
 	
	if (!context) {
   	 	return;
  	}
	
	var pointList = [];
	
	drawBackgrounp();
	
	function drawBackgrounp(){
		context.fillStyle = "rgba(0, 0, 255, .5)";
		context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	}
	
	function drawPoint(x,y) {
		
		context.beginPath();
		context.strokeStyle = "black"; 
		context.lineWidth=5;
		context.arc(x, y, 5, (Math.PI/180)*0, (Math.PI/180)*360, false); // full circle
		context.stroke();
		context.closePath();
	}
	
	function drawAllPoints(){
		pointList.forEach(function(item, index, array){
			drawPoint(item.x,item.y);
		});
	}
	
	function Point(x,y){
		this.x = x;
		this.y = y;
	}
	
	function drawLine(pa,pb){
		context.strokeStyle = "red"; //need list of available colors
		context.lineWidth=5;
		context.lineCap='square';
		context.beginPath();
		context.moveTo(pa.x, pa.y);
		context.lineTo(pb.x, pb.y);
		context.stroke();
		context.closePath();
	}
	
	function onMouseClick(e) {
	
		//Add a new Point
		mouseX=e.clientX-50;
		mouseY=e.clientY-50;
		var point = new Point(mouseX,mouseY);
		pointList.push(point)
		console.log("points number: " + pointList.length);
		
		//Clear All
		context.clearRect(0, 0, theCanvas.width, theCanvas.height);
		drawBackgrounp();
		
		//Draw all points
		drawAllPoints(); 
		
		if(pointList.length >= 2){
			drawLine(pointList[pointList.length-2], pointList[pointList.length-1])
		}
	}
	
	function onMouseDoubleClick(e){
		context.clearRect(0, 0, theCanvas.width, theCanvas.height);
		drawBackgrounp();
		pointList.length = 0;
		console.log("Clear !  points number: " + pointList.length);
	}

	theCanvas.addEventListener("click", onMouseClick, false);
	theCanvas.addEventListener("dblclick", onMouseDoubleClick, false);

}
