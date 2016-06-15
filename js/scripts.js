$(document).ready(function(){
	
	/*-----change logo image links on hover and unhover-----*/
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
	
	/*-----animate download buttons-----*/
	setInterval(function(){
		if ($(".collapse-header").hasClass("selected")) {
			$(".selected").next().find(".download").effect("bounce", {times:1}, 1500);
		}
		if ($(".download-link").hasClass("hovered")) {
			$(".hovered").parent().stop(true, false);
		}
	},1500);
	
	/*-----to obscure email (if by any chance spambots come across this form)-----*/
	$("contact-form").attr("action", "https://formspree.io/" + "prajvinjalan" + "@" + "gmail" + "." + "com");
	
	
	/*-----resize the content to match the header accordingly-----*/
	$("#main-content-wrapper").mainContentResize();
	$(window).resize(function(){
		$("#main-content-wrapper").mainContentResize();
	});
	
	/*-----animate fieldset based on selected input (contact form)-----*/
	$("#contact-form input[type=\"text\"], #contact-form input[type=\"email\"], #contact-form textarea").on("focus", function(){
		$(this).parent().css("background","#999999");
	});
	$("#contact-form input, #contact-form textarea").on("focusout", function(){
		$(this).parent().css("background","none");
	});
});

$.fn.mainContentResize = function(){
	if ($(this).hasClass("projects")) {
		$(this).css("top","190px");
	}
	else {
		$(this).css("top",$("header").height());
	}
}