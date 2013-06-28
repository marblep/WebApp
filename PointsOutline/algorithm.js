
var Algorithm = {
    
    calcSkyline: function(_pointList){
        
        var edgeList = {left:[], bottom:[], right:[], top:[]};
        getEdgePoints(edgeList, _pointList);
        
        debugDrawEdgePoints(edgeList);
        
        var skylineSequence = [];
        skylineSequence = skylineSequence.concat(collectFromSideToSide(edgeList.left, edgeList.bottom, _pointList, true, true));
        skylineSequence = skylineSequence.concat(collectFromSideToSide(edgeList.bottom, edgeList.right, _pointList, true, false));
        skylineSequence = skylineSequence.concat(collectFromSideToSide(edgeList.right, edgeList.top, _pointList, false, true));
        skylineSequence = skylineSequence.concat(collectFromSideToSide(edgeList.top, edgeList.left, _pointList, false, false));
        
        return skylineSequence;
        
        
        function collectFromSideToSide(fromList, toList, allPoints, bOutsideIsBelow, bxy){
            
            var skylinePoints = [];        
            
            var pStart = fromList[fromList.length-1];
            var pEnd = toList[0];
            if(pStart == pEnd){
                skylinePoints.push(pStart);
                return skylinePoints;
            }
            
            skylinePoints.push(pStart);
            skylinePoints = skylinePoints.concat(getOutsidePoints(pStart, pEnd, allPoints, bOutsideIsBelow, bxy));
            for(var i=0; i<toList.length; i++)
                skylinePoints.push(toList[i]);
            
            return skylinePoints;
        }
        
        
        function getOutsidePoints(_pStart, _pEnd, _pointList, bOutsideIsBelow, bxy){
            var resultList = [];
            var candidates = _pointList.slice();
            while(true){
                
                candidates = removeItem(candidates, [_pStart, _pEnd]);
                var line = new Line(_pStart, _pEnd);
                                
                var outsidePoints = [];
                for(var i=0; i<candidates.length; i++){
                    var p = candidates[i];
                    if(bOutsideIsBelow){
                        if( line.getRelativePos(p) < 0 ){
                            outsidePoints.push(p);
                        }
                    }
                    else{
                        if( line.getRelativePos(p) > 0 ){
                            outsidePoints.push(p);
                        }
                    }
                    
                }
                candidates = outsidePoints;
                if(candidates.length == 0){
                    break;
                }
                
                var point = getMinAnglePoint(_pStart, candidates, bxy);
                resultList.push(point);
                _pStart = point;
            }
            return resultList;
        }
        
        function getMinAnglePoint(_pivot, _pList, bxy){
            var minP = _pList[0];
            var minangle = bxy ? Math.abs((minP.x-_pivot.x)/(minP.y-_pivot.y)) : Math.abs((minP.y-_pivot.y)/(minP.x-_pivot.x));
            for(var i=1; i<_pList.length; i++){
                var p = _pList[i];
                var angle = bxy ? Math.abs((p.x-_pivot.x)/(p.y-_pivot.y)) : Math.abs((p.y-_pivot.y)/(p.x-_pivot.x));
                if(angle < minangle){
                    minangle = angle;
                    minP = p;
                }
            }
            return minP;
        }
        
        function removeItem(fromList, items){
            var list = fromList;
            for(var i=0; i<items.length; i++){
                var item = items[i];
                var idx = list.indexOf(item);
                if(idx >= 0)
                    list.splice(idx, 1);
            }
            return list;
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
            //console.log( str );
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
        
        function Line(pa,pb){
            // y + kx + b = 0
            this.k = (pb.y-pa.y)/(pa.x-pb.x);
            this.b = -(pa.y+this.k*pa.x);
            
            this.getRelativePos = function(p){
                return (p.y+this.k*p.x+this.b);
            }
        }
    },
    

}

