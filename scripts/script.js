$(document).ready(function ()
{   
    var p= $("<p/>").attr("id","pMenu").text("Duck Hunt (Japanese: ダックハント Hepburn: Dakku Hanto) is a light gun shooter video game developed and published by Nintendo for the Nintendo Entertainment System (NES) video game console. First released in Japan on April 21, 1984, it was later released on October 18, 1985 in North America as a launch game for the NES, and on August 15, 1987 in Europe. The game was released as a Virtual Console title for the Wii U in 2014.[2]").appendTo("body");
	var aboutLink = $("<a/>").attr("id","AbLink").attr("href","https://en.wikipedia.org/wiki/Duck_Hunt").text("More About").appendTo("body");
    var div = $("<div/>").attr("id","div").appendTo("body");
    var btnPouse = $("<img/>").attr("id","btnPouse").attr("src","pictures/btn_close_bar.png").appendTo("body").css("visibility","hidden");
    var d1Obj = $("<div/>").appendTo("#div");
    function start(){
    var bestScore = 0;
    var d = $("<div/>").attr("id","bckGround").appendTo(div);
    var i = $("<img/>").attr("id","imgPlay").appendTo(d);
    var b = $("<button/>").attr("id","btnPlay").appendTo(d);
    var p1 = $("<p/>").text("best score = " + bestScore).attr("id","txtClr").appendTo(d);
    var iD = $("<img/>").attr("id","imgDog").appendTo(d);
    b.text("Play Game");
    i.attr("src", "pictures/logo.jpg");
    iD.attr("src", "pictures/Duck_hunt(resize).gif");

    var sound = $("<audio/>").appendTo("#bckGround");
	sound[0].src = "sounds/Duck Hunt (NES) - Gameplay (mp3cut.net).mp3";
    sound[0].play();
    
    $("#btnPlay").click(gameDesktop);
}
start();
});