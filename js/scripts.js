/*-----change logo image links on hover and unhover-----*/
$(document).ready(function(){
	$("#img-github").hover(function(){
		$(this).attr("src", "images/github_hover.png");
	},function(){
		$(this).attr("src", "images/github.png");
	});
	
	$("#img-linkedin").hover(function(){
		$(this).attr("src", "images/linkedin_hover.png");
	},function(){
		$(this).attr("src", "images/linkedin.png");
	});
	
	/*-----sliding panels for project section-----*/
	$(".collapse-header").click(function(){
		$(this).toggleClass("selected");
		$(this).next().slideToggle();
	});
	
	$(".download-link").hover(function(){
		$(this).toggleClass("hovered");
	});
	
	setInterval(function(){
		if ($(".collapse-header").hasClass("selected")) {
			$(".selected").next().find(".download").effect("bounce", {times:1}, 1500);
		}
		if ($(".download-link").hasClass("hovered")) {
			$(".hovered").parent().stop(true, false);
		}
	},1500);
});