$(document).ready(function() {
	$('#tabs').tabs();

	$('li#type-bullet').hide();
	$('li#culture-bullet').hide();
	$('li#strategy-bullet').hide();
$('li#color-block').click(function() {
	$('li#color-bullet').show();
		$('this').addClass('color-block-active');
	$('li#type-bullet').hide();
	$('li#culture-bullet').hide();
	$('li#strategy-bullet').hide();	
});
$('li#type-block').click(function() {
	$('li#type-bullet').show();
	$('li#color-bullet').hide();
	$('li#culture-bullet').hide();
	$('li#strategy-bullet').hide();	
});
$('li#culture-block').click(function() {
	$('li#culture-bullet').show();
	$('li#color-bullet').hide();
	$('li#type-bullet').hide();
	$('li#strategy-bullet').hide();	
});
$('li#strategy-block').click(function() {
	$('li#strategy-bullet').show();
	$('li#color-bullet').hide();
	$('li#type-bullet').hide();
	$('li#culture-bullet').hide();	
});

	$('dd#swatches1').hide();
$('dt#palette1').click(function() {
	$('dd#swatches1').slideToggle('3000');
});	
	$('dd#swatches2').hide();
$('dt#palette2').click(function() {
	$('dd#swatches2').slideToggle('3000');
});	
	$('dd#swatches3').hide();
$('dt#palette3').click(function() {
	$('dd#swatches3').slideToggle('3000');
});	

	$('dd#fonts1').hide();
$('dt#type-style1').click(function() {
	$('dd#fonts1').slideToggle('3000');
});	
	$('dd#fonts2').hide();
$('dt#type-style2').click(function() {
	$('dd#fonts2').slideToggle('3000');
});	
	$('dd#fonts3').hide();
$('dt#type-style3').click(function() {
	$('dd#fonts3').slideToggle('3000');
});	
});	

	