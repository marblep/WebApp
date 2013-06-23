

var Draw = {
    
    drawPoint: function(x,y,context){
            context.beginPath();
            context.strokeStyle = "black"; 
            context.lineWidth=5;
            context.arc(x, y, 5, (Math.PI/180)*0, (Math.PI/180)*360, false); // full circle
            context.stroke();
            context.closePath();
    },
    
    drawAllPoints: function(_pointList, context){
        _pointList.forEach(function(item, index, array){
            Draw.drawPoint(item.x,item.y,context);
        });
    },
    
    drawLine: function(pa,pb,context){
        context.strokeStyle = "red"; //need list of available colors
        context.lineWidth=5;
        context.lineCap='square';
        context.beginPath();
        context.moveTo(pa.x, pa.y);
        context.lineTo(pb.x, pb.y);
        context.stroke();
        context.closePath();
    },
    
    drawSkyline: function(list, context){
        if(list.length > 1){
            var start = 0; var end = 0;
            for(var i=0; i<list.length; i++){  
                start = i;
                if(i == list.length-1)
                     end = 0;
                else
                    end = i+1;
                Draw.drawLine(list[start], list[end], context);
            }
        }
    },
    
    clearCanvas: function(_context, _canvas){
        _context.clearRect(0, 0, _canvas.width, _canvas.height);
    },
};

