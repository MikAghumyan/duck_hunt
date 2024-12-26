function gameDesktop(){
	$("#bckGround").hide();
	$("#bckPause").hide();
	$("#btnPouse").css("visibility","visible");
	$("audio").remove();
	var divGame = $("<div/>").attr("id","bckGrnd").appendTo("#div");
	var p= $("<p/>").attr("id","p").text("play").appendTo(divGame);
	var heartsP = $("<p/>").attr("id","txtHearts").appendTo(divGame);
    var scoreP = $("<p/>").attr("id","txtScore").text("score:").appendTo(divGame);

	
	$("#btnPouse").click(function(){
		$("#bckGround").hide();
		$("#bckGrnd").hide();
	    $("#bckGround").show();
		$("#btnPouse").css("visibility","hidden");
		});
 var duck = new Duck();
 var intarval = setInterval(duck.duckFlying,40);
}