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
	$("#contact-form").attr("action", "https://formspree.io/" + "prajvinjalan" + "@" + "gmail" + "." + "com");
	
	
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
	
	/*-----automatically add span to each word in all h2 elements-----*/
	$("h2").each(function(){
		var words = $(this).html().split(" ");
		for (i in words)
			words[i] = "<span>" + words[i].substring(0,1) + "</span>" + words[i].substr(1,words[i].length);
		var fullText = words.join(" ");
		$(this).html(fullText);
	});
});

$.fn.mainContentResize = function(){
	$(this).css("top",$("header").height());
}