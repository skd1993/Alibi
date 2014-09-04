var x; //variable changes value to indicate which regulator is used first

//varibles to set state of the 4 on/off buttons, initially all buttons are 'off'
var on_off=0;
var hold=0;
var voltage=0;
var time_out=0;

//change the image from on to off and vice versa; also change their respective variable state -- 1 for 'on', 0 for 'off'
function diffImage(img) 
{
   if(img.src.match(/on/)) {
   	if(img.alt="on_off_status") on_off=0;
   	else if(img.alt="hold_status") hold=0;
   	else if(img.alt="voltage") voltage=0;
   	else if(img.alt="time_out") time_out=0;
   	if(img.alt="on_off_status") on_off=0;
   	img.src = "images/off.png";
   }

   else 
   	{
   		if(img.alt="on_off_status") on_off=1;
   	else if(img.alt="hold_status") hold=1;
   	else if(img.alt="voltage") voltage=1;
   	else if(img.alt="time_out") time_out=1;
   	if(img.alt="on_off_status") on_off=1;
   		img.src = "images/on.png";
   	}
    
}
//end of on/off button function

//function to check which regulator is being used, thus rotate that needle
function down1() //for 1st regulator
{
	x=1;
	$(".draggable1").rotateAble();
}

function down2() //for 2nd regulator
{
	x=2;

	$(".draggable2").rotateAble();
}
//end of regulator detection

//main function for rotation of regulator needles
$.fn.rotateAble = function() {
	var offset = null;
	var dragging = false;
	
	var RotationTarget = $(this); // Save target, cause $(this) doesn't work from MouseUp and MouseMove
	
	// Mouse
	var MouseDown = function(e) {
		dragging = true;

		offset = {
			x: e.pageX,
			y: e.pageY
		};
		//$("div#rotation").text("MouseDown");
	};
	var MouseUp = function() {
		dragging = false;
		//$("div#rotation").text("MouseUp");
    };
    var MouseMove = function(e) {
    	var mouse_x = e.pageX - offset.x;
		var mouse_y = e.pageY - offset.y;
    	//$("div#rotation").text("Move: " + mouse_x + " " + mouse_y);
		if (dragging) {
			
			var radians = Math.atan2(mouse_x, mouse_y);
			var degree = (radians * (180 / Math.PI) * -1) + 90;
            RotationTarget.rotate({
                angle:degree,
                center:["50%","100%"],
                easing: $.easing.easeInOutElastic
                //animateTo:null
            });
			
			//$("div#rotation").text(degree);
		}
	};

	$(this).bind("mousedown", MouseDown);
	$(document).bind("mouseup", MouseUp);
	$(document).bind("mousemove", MouseMove);
};
//end of rotate function


$(".cs_knob").knob({
min : 0, 
max : 100, 
step : 1, 
angleOffset : -135, 
angleArc : 270, 
stopper : true, 
readOnly : false, 
cursor : false,  
lineCap : 'butt', 
thickness : '0.4', 
width : 150, 
displayInput : true, 
displayPrevious : true, 
fgColor : '#E5ED07', 
inputColor : '#E5ED07', 
font : 'Arial', 
fontWeight : 'bold', 
bgColor : '#EEEEEE', 
draw : function () {
if(this.$.data('skin') == 'tron') {
var a = this.angle(this.cv)  // Angle
, sa = this.startAngle          // Previous start angle
, sat = this.startAngle         // Start angle
, ea                            // Previous end angle
, eat = sat + a                 // End angle
, r = 1;
this.g.lineWidth = this.lineWidth;
this.o.cursor
&& (sat = eat - 0.3)
&& (eat = eat + 0.3);
if (this.o.displayPrevious) {
ea = this.startAngle + this.angle(this.v);
this.o.cursor
&& (sa = ea - 0.3)
&& (ea = ea + 0.3);
this.g.beginPath();
this.g.strokeStyle = this.pColor;
this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
this.g.stroke();
}
this.g.beginPath();
this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
this.g.stroke();
this.g.lineWidth = 2;
this.g.beginPath();
this.g.strokeStyle = this.o.fgColor;
this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
this.g.stroke();
return false;
}
}
});