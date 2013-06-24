
var Algorithm = {
    
    calcSkyline: function(_pointList){
        
        var SIDE = { left:{}, bottom:{}, right:{}, top:{} };
        //var mostleft = 
        
        
        return _pointList;
        //Todo 222
    },
    
    getEdgePoints: function(list, side){
        var minX = 999999;
        var point_minX = [];
        for(var i=0; i<list.length; i++){
            var point = list[i];
            if(point.x < minX){
                minX = point.x;
                point_minX = point;
            }
        }
        return point_minX;
    },
}

//get most edge points
//canvas coordinate to logic coordinate, y = -y
