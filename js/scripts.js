//resize content based on header
$.fn.mainContentResize = function(){
	if (window.matchMedia("(max-width: 580px)").matches) {
		$(this).css("top","60px");
	}
	else {
		$(this).css("top",$("header").height());
	}
}

$.fn.projectImageResize = function(){
	$(this).css("height",$(this).find("img").height() + "px");
	$(this).css("width",$(this).find("img").width() + "px");
	$(this).find("ul").css("width",($(this).find("img").width()*3) + "px");
}

//change display for github/linkedin icons
function checkGitlink() {
	if (window.matchMedia("(max-width: 580px)").matches){
		$(".gitlink").css("display","none");
		$("#mobile-gitlink").css("display","inline-block");
	}
	else {
		$(".gitlink").css("display","inline-block");
		$("#mobile-gitlink").css("display","none");
	}
}

//resize header based on max-width of screen (when resizing browser)
function headerResize(displayNav, slide) {
	if (slide == true){
		if (displayNav == 1) {
			if (window.matchMedia("(max-width: 414px)").matches){$("header").animate({"height":"170px"}, 200);}
			else if (window.matchMedia("(max-width: 509px)").matches ||
				window.matchMedia("(max-width: 580px)").matches){$("header").animate({"height":"120px"}, 200);}
			else if (window.matchMedia("(max-width: 1050px)").matches){$("header").animate({"height":"150px"});}
			else {$("header").animate({"height":"100px"});}
		}
		else {
			if (window.matchMedia("(max-width: 414px)").matches || 
				window.matchMedia("(max-width: 580px)").matches) {$("header").animate({"height":"60px"}, 200);}
			else if (window.matchMedia("(max-width: 1050px)").matches){$("header").animate({"height":"150px"});}
			else {$("header").animate({"height":"100px"});}
		}
	}
	else {
		if (displayNav == 1) {
			if (window.matchMedia("(max-width: 414px)").matches){$("header").css("height","170px");}
			else if (window.matchMedia("(max-width: 580px)").matches){$("header").css("height","120px");}
			else if (window.matchMedia("(max-width: 1050px)").matches){$("header").css("height","150px");}
			else {$("header").css("height","100px");}
		}
		else {
			if (window.matchMedia("(max-width: 414px)").matches){$("header").css("height","60px");}
			else if (window.matchMedia("(max-width: 580px)").matches){$("header").css("height","60px");}
			else if (window.matchMedia("(max-width: 1050px)").matches){$("header").css("height","150px");}
			else {$("header").css("height","100px");}
		}
	}
}

$(document).ready(function(){
	var displayNav = 0; //used when displaying navigation menu
	
	setInterval(function(){
		$(".carousel ul").each(function(){
			$(this).animate({marginLeft:-($(this).parent().width())},1000,function(){
				$(this).find("li:last").after($(this).find("li:first"));
				$(this).css({marginLeft:0});
			});
		})
	},5000);
	
	/*-----change github/linkedin image links on hover and unhover-----*/
	$(".img-github").hover(function(){
		$(this).attr("src", "images/github_hover.png");
	},function(){
		$(this).attr("src", "images/github.png");
	});
	$(".img-linkedin").hover(function(){
		$(this).attr("src", "images/linkedin_hover.png");
	},function(){
		$(this).attr("src", "images/linkedin.png");
	});
	
	/*-----sliding panels for project section-----*/
	$(".collapse-header").click(function(){
		if (!$(this).hasClass("selected")) {
			$(".collapse-header").removeClass("selected");
			$(".collapse-header").next().slideUp();
		}
		$(this).toggleClass("selected");
		$(this).next().slideToggle();
	});
	
	/*
	$(".project-button-link").hover(function(){
		$(this).toggleClass("hovered");
	});
	setInterval(function(){
		if ($(".collapse-header").hasClass("selected")) {
			$(".selected").next().find(".project-button").effect("bounce", {times:1}, 1500);
		}
		if ($(".project-button-link").hasClass("hovered")) {
			$(".hovered").parent().stop(true, false);
		}
	},1500); */
	
	/*-----to obscure email (if by any chance spambots come across this form)-----*/
	$("#contact-form").attr("action", "https://formspree.io/" + "prajvinjalan" + "@" + "gmail" + "." + "com");
	
	
	/*-----resize the content to match the header accordingly-----*/
	headerResize(displayNav);
	$("#main-content-wrapper").mainContentResize();
	$(".carousel").each(function(){
		$(this).projectImageResize();
	});
	$(window).resize(function(){
		//display the navigation buttons if not mobile screen sizes
		if (!(window.matchMedia("(max-width: 414px)").matches) && !(window.matchMedia("(max-width: 509px)").matches)
			&& !(window.matchMedia("(max-width: 580px)").matches)){
			$("#nav").css("display","inline-block");
		}
		else {$("#nav").css("display","none");} //otherwise hide navigation buttons on small screen resize
		
		//assign displayNav a value based on if navigation is being displayed
		($("#nav").css("display") == "none") ? displayNav = 0 : displayNav = 1;
		
		//resize header and page content
		headerResize(displayNav);
		$("#main-content-wrapper").mainContentResize();
		
		$(".carousel").each(function(){
			$(this).projectImageResize();
		});
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

	/*-----to move logo icons when screen is smaller-----*/
	checkGitlink();
	$(window).resize(function(){
		checkGitlink();
	});
	
	/*-----mobile navigation menu button click-----*/
	$("#mobile-nav-button").click(function(){
		if ($("#nav").css("display") == "none"){
			$("#nav").css("display","inline-block");
			displayNav = 1;
			headerResize(displayNav, true);
		}
		else {
			displayNav = 0;
			headerResize(displayNav, true);
			setTimeout(function(){$("#nav").css("display","none");}, 150);
		}
		
		//resize header and page content
		
		$("#main-content-wrapper").mainContentResize();
	});
});