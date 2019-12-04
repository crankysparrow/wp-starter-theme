import $ from 'jquery';

var menuTop = $('#topnav-menu');
var siteNav = $('#menu-1');

$('.menu-toggle').click(function() {
  $(menuTop).toggleClass('open-nav');
  $(siteNav).toggleClass('site-nav-open');
});