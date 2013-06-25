
var Algorithm = {
    
    calcSkyline: function(_pointList){
        
        var edgeList = {left:[], bottom:[], right:[], top:[]};
        getEdgePoints(edgeList, _pointList);
        
        debugDrawEdgePoints(edgeList);
        
        
        return [];
        
        
        function leftToBottom(leftlist, bottomlist){
                    
            
        }
        
        function getEdgePoints(_edgeList, _pointList){
        
            var minx = 99999, maxx = -1, miny = 1, maxy = -99999;
            for(var i=0; i<_pointList.length; i++){
                var p = _pointList[i];
                
                if(p.x < minx){
                    _edgeList.left = [];
                    _edgeList.left.push(p);
                    minx = p.x;
                }
                else if(p.x == minx){
                    _edgeList.left.push(p);
                }
                
                if(p.x > maxx){
                    _edgeList.right = [];
                    _edgeList.right.push(p);
                    maxx = p.x;
                }
                else if(p.x == maxx){
                    _edgeList.right.push(p);
                }
                
                if(p.y < miny){
                    _edgeList.bottom = [];
                    _edgeList.bottom.push(p);
                    miny = p.y;
                }
                else if(p.y == miny){
                    _edgeList.bottom.push(p);
                }
                
                if(p.y > maxy){
                    _edgeList.top = [];
                    _edgeList.top.push(p);
                    maxy = p.y;
                }
                else if(p.y == maxy){
                    _edgeList.top.push(p);
                }
            }
            
            _edgeList.left.sort(function(pa,pb){return pb.y - pa.y});
            _edgeList.bottom.sort(function(pa,pb){return pa.x - pb.x});
            _edgeList.right.sort(function(pa,pb){return pa.y - pb.y});
            _edgeList.top.sort(function(pa,pb){return pb.x - pa.x});
            logEdge("left", edgeList.left);
            logEdge("bottom", edgeList.bottom);
            logEdge("right", edgeList.right);
            logEdge("top", edgeList.top);
        }
        
        function logEdge(title, list){
            var str = title + list.length + ";  ";
            for(var i=0; i<list.length; i++)
                str += list[i].toString() + ", ";
            console.log( str );
        }
        
        //logEdge("left", edgeList.left);
        //logEdge("right", edgeList.right);
        //logEdge("bottom", edgeList.bottom);
        //logEdge("top", edgeList.top);
        
        function debugDrawEdgePoints(_edgeList){
            Draw.drawPoints_Color(_edgeList.left, "pink");
            Draw.drawPoints_Color(_edgeList.right, "red");
            Draw.drawPoints_Color(_edgeList.bottom, "blue");
            Draw.drawPoints_Color(_edgeList.top, "green");
        }
    },
    

}

