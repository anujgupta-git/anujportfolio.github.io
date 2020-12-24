

alert("hi")
$(document).ready(function(){
	$('.slider').slick({

        arrows:false,
        dots:true,
        appendDots:'.slidere-dots',
        dotsClass:'dots'
	});

let hamberger=document.getElementById("ham");
let times=document.getElementById("tim");
let mobileNav=document.getElementById("mn");
hamberger.addEventListner('Click',function () {
	hamberger.classList.add('open');

});

times.addEventListner('Click',function(){
    mobileNav.classList.remove('open');
});
});

