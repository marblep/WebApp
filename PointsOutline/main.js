window.addEventListener('load', eventWindowLoaded, false);	

function eventWindowLoaded() {
	Main.canvasApp();
}

var Main = {
    
    canvasApp: function(){
        
        var context;
        var theCanvas;
        var pointList = [];
        
        init();
        
        function onMouseClick(e) {
    
            //testData();
            //return;
            
            addNewPoint(e.clientX-50, -(e.clientY-50), pointList);
            
            Draw.clearCanvas(context, theCanvas);
            
            Draw.drawAllPoints(pointList, context); 
            
            var list_skyline = Algorithm.calcSkyline(pointList);
            
            Draw.drawSkyline(list_skyline, context);
        }
        
        function onMouseDoubleClick(e){
            Draw.clearCanvas(context, theCanvas);
            pointList.length = 0;
            console.log("Clear !  points number: " + pointList.length);
        }
        
        function addNewPoint(x,y,tolist){
            tolist.push(new Point(x, y));
            //console.log("points number: " + tolist.length);
        }
        
        function init(){
            theCanvas = document.getElementById('canvas');
            context = theCanvas.getContext('2d');
            theCanvas.addEventListener("click", onMouseClick, false);
            theCanvas.addEventListener("dblclick", onMouseDoubleClick, false);    
        }
        
        function Point(x,y){
            this.x = x;
            this.y = y;
            
            this.toString = function(){
                return "(x = " + this.x + ", y = " + this.y + ")";
            }
        }
        
        function testData(){
            var testlist = getRandomPoints(100);
            
            Draw.clearCanvas(context, theCanvas);
            Draw.drawAllPoints(testlist, context); 
            var list_skyline = Algorithm.calcSkyline(testlist);
            Draw.drawSkyline(list_skyline, context);
        }
        
        function getRandomPoints(num){
            var points = [];
            for(var i=0; i<num; i++){
                var x = Math.floor(Math.random() * theCanvas.width);
                var y = Math.floor(Math.random() * theCanvas.height);
                addNewPoint(x, -y, points);
            }
            return points;
        }
        
        function getRectPoints(){
            var points = [];
            addNewPoint(100, -100, points);
            addNewPoint(100, -200, points);
            addNewPoint(200, -100, points);
            addNewPoint(200, -200, points);
            addNewPoint(300, -100, points);
            addNewPoint(300, -200, points);
            return points;
        }
    },
}


    





    


