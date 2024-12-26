function Duck(){
    var hearts = 5;
    var score = 0;
    var bestScore = 0;
    $("#txtHearts").text("Hearts:" + hearts);
    $("#txtScore").text("Scores:" + score);
    var self = this;
    self.haveDuck = false;
    self.duck = $("<img/>").attr("src","pictures/a.gif").attr("id","duck").appendTo("#bckGrnd");
    self.top = 270;
    self.left =  190;
    self.speedX = 5; 
    self.speedY = 5; 
    self.flank = Math.round(100 * Math.random());
    if (self.flank%2 == 0){
        self.speedX *= -1;
    }
    self.duckFlying = function(){
        if(hearts <= 0){
        $("#p").text("Sorry,but game over.");
        dog = $("<img/>").attr("src","pictures/duckhuntdog.gif").attr("id","dog").appendTo("#bckGrnd");
        if(score > bestScore){
            bestScore = score
            $("#txtClr").text("Best score = " + score);
        }
        dogCrying();
        return;
        }
         if(self.duck.position().left <= 0 )
         {
            self.duck.css("left", 2 + "px");
            self.speedX *= -1;
         }
         if(self.duck.position().left >= 400){
            self.duck.css("left", 398 + "px");
            self.speedX *= -1;
         }
         self.duck.css("left",(self.duck.position().left - self.speedX) + "px");
         self.duck.css("top",(self.duck.position().top - self.speedY) + "px");
         if(self.duck.position().top <= 0){
            self.top = 270;
            self.duck.css({"top":"270px"});
            self.flank = Math.round(100 * Math.random());
            hearts--;
            $("#txtHearts").text("Hearts:" + hearts);
            $("#p").text("oh, noooo!!!");
         }   
    }
    self.duck.click( function(){
        self.top = 270;
        self.duck.css({"top":"270px"});
        score += 500;
        $("#txtScore").text("Scores:" + score);
        $("#p").text("Yesss!!! Perfect!!!");
    });
    $("#bckGrnd").click(function(){ 
        var shootSound = $("<audio/>").appendTo("#bckGround");
	    shootSound[0].src = "sounds/Duck Hunt SFX (13).wav";
        shootSound[0].play();
    });
 } 