
LearningJs.ReferenceType = {
    
    displayInfo : function(args){
        var output = "";
        
        if(typeof args.name == "string"){
            output += "Name: " + args.name + "\n";
        }
        if(typeof args.age == "number"){
            output += "Age: " + args.age + "\n";
        }
        alert(output);
    },
    
    main : function(){
        
        with(LearningJs.ReferenceType){
            displayInfo({
                name: "mabrle",
                age: 30
            });     
        
            displayInfo({
                name: "mabrle"
            });      
        }    
    },
};