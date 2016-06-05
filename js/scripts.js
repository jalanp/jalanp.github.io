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
});