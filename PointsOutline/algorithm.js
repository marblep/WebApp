
var Algorithm = {
    
    calcSkyline: function(_pointList){
        return _pointList;
        //Todo  
    },
    
    FindPoint_MostLeft: function(list){
        var minX = 999999;
        var point_minX = null;
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