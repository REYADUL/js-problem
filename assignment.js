// 1. feetTomile problem

function feetToMile(feet){
    if(feet<0){

        return("value shoud be positive");
    }
    else{
        var mile = feet * 0.000189394;
        return mile;
    }
    
}


//2. woodCalculator problem

function woodCalculator(table,chair,bed){
    
    var woodFortable = 3*table;
    var woodForchair = 1*chair;
    var woodForbed   = 5*bed;

    var totalWood = (woodFortable+woodForchair+woodForbed);
    
    return totalWood;
}


//3. brickCalculator problem

function brickCalculator(buildingSize){
     
    if(buildingSize <=10){
        
        var totalFeet = 15*buildingSize;
        var bricks    = 1000*totalFeet;

        return bricks;

    }

    else if(buildingSize <=20){
        
        var remainSize = (buildingSize-10);
        var remainFeet = 12*remainSize;
        var bricks     = 1000*remainFeet;
        var brickSum   = 150000 + bricks; 

        return brickSum ;
    }
    else{
        var remainSize = (buildingSize-20);
        var remainFeet = 10*remainSize;
        var bricks2    = 1000*remainFeet;
        var brickSum   = 270000+bricks2;

        return brickSum;
    }
}


 //4. tinyFriend problem;

function tinyFriend(name) {
    
    var tinyName = name[0].length;

    for(var i=0;i<name.length;i++){
        var element = name[i].length;
        if(element<tinyName){
            tinyName = element;
            var smallName = name[i];
        }
    } 

    return smallName;
}
