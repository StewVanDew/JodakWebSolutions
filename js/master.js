/**
 * Created by dadler on 7/15/2015.
 */
// NAVBAR HTML
// ===========
var navHtml = "<nav class='navbar navbar-default navbar-fixed-top'><div class='container'><div class='navbar-header'>" +
    "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse'data-target='#collapse' aria-expanded='false'>" +
    "<span class='sr-only'>Toggle navigation</span> <span class='icon-bar'></span><span class='icon-bar'></span>" +
    "<span class='icon-bar'></span></button><a class='navbar-brand' href=index.html>{{LOGO}}</a></div>" +
    "<div class='collapse navbar-collapse' id='collapse'><ul class='nav navbar-nav navbar-right navigation'><li>" +
    "<a href='index.html' class='color'>Home</a></li>" +
    "<li><a href='about.html' class='color'>About</a></li>" +
    "<li><a href='portfolio.html' class='color'>Portfolio</a></li>" +
    "<li><a href='services.html' class='color'>Services</a></li>" +
    "<li><a href='contact.html' class='color'>Contact</a></li>" +
    "</ul></div></div></nav>";

// FOOTER HTML
// ===========
var footerHtml = "<footer class='text-center navbar navbar-default shadow'> " +
    "<span class='navbar-brand text-center footer-text'>Jodak Web Solutions <i class='fa fa-copyright'></i> 2015</span>" +
    "<ul class='nav navbar-nav navbar-right navigation' id='colors'>" +
    "<li class='bg-green' onclick='setSessionColor(\"green\");' style=''></li>" +
    "<li class='bg-yellow' onclick='setSessionColor(\"yellow\");'></li>" +
    "<li class='bg-blue' onclick='setSessionColor(\"blue\");'></li>" +
    "<li class='bg-pink' onclick='setSessionColor(\"pink\");'></li>" +
    "<li class='bg-orange' onclick='setSessionColor(\"orange\");'></li></ul>" +
    "</footer>";

// REPLACE NAV/FOOT
// ================
$('#nav').replaceWith(navHtml);
$('#footer').replaceWith(footerHtml);

// RANDOM COLOR
// ============
var color = Math.floor((Math.random() * 4) + 1);
var colorClass = $('.color');
var allColors = 'orange green blue pink yellow';

function setSessionColor(color) {
    localStorage.setItem('color', color);
    pageColor();
}

$(document).ready(function () {
    pageColor();
});

function pageColor() {
    colorClass.removeClass(allColors);
    switch (localStorage.getItem('color')) {
        case 1:
        case 'orange':
        case 'default':
        default:
            colorClass.addClass('orange');
            localStorage.setItem('color', 'orange');
            break;
        case 2:
        case 'green':
            colorClass.addClass('green');
            localStorage.setItem('color', 'green');
            break;
        case 3:
        case 'blue':
            colorClass.addClass('blue');
            localStorage.setItem('color', 'blue');
            break;
        case 4:
        case 'pink':
            colorClass.addClass('pink');
            localStorage.setItem('color', 'pink');
            break;
        case 5:
        case 'yellow':
            colorClass.addClass('yellow');
            localStorage.setItem('color', 'yellow');
            break;
    }
}
