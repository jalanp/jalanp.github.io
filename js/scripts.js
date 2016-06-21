$(document).ready(function(){
	var displayNav = 0;
	
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
	headerResize(displayNav);
	$(window).resize(function(){
		//display the navigation buttons if not mobile screen sizes
		if (!(window.matchMedia("(max-width: 414px)").matches) && 
			!(window.matchMedia("(max-width: 580px)").matches)){
			$("#nav").css("display","inline-block");
		}
		else {$("#nav").css("display","none");} //otherwise hide navigation buttons on small screen resize
		
		//assign displayNav a value based on if navigation is being displayed
		if ($("#nav").css("display") == "none"){displayNav = 0;}
		else {displayNav = 1;}
		
		//resize header and page content
		headerResize(displayNav);
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

	/*-----to remove logo icons when screen is smaller-----*/
	checkGitlink();
	$(window).resize(function(){
		checkGitlink();
	});
	
	/*-----mobile navigation menu button click-----*/
	$("#mobile-nav-button").click(function(){
		if ($("#nav").css("display") == "none"){
			$("#nav").css("display","inline-block");
			displayNav = 1;
		}
		else {
			$("#nav").css("display","none");
			displayNav = 0;
		}
		
		//resize header and page content
		headerResize(displayNav);
		$("#main-content-wrapper").mainContentResize();
	});
});

//resize content based on header
$.fn.mainContentResize = function(){
	$(this).css("top",$("header").height());
}

//change display for logo icons
function checkGitlink() {
	if (window.matchMedia("(max-width: 580px)").matches){$(".gitlink").css("display","none");}
	else {$(".gitlink").css("display","inline-block");}
}

//resize header based on max-width of screen
function headerResize(displayNav) {
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