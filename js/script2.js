var x; //variable changes value to indicate which regulator is used first

//varibles to set state of the 4 on/off buttons, initially all buttons are 'off'
var on_off=0;
var hold=0;
var voltage=0;
var time_out=0;

var lvl = 10;



//change the image from on to off and vice versa; also change their respective variable state -- 1 for 'on', 0 for 'off'
function diffImage(img) 
{
   if(img.src.match(/on/)) {
   	
   	img.src = "images/off.png";

   	if(img.alt="on_off_status") on_off=0;
   	if(img.alt="hold_status") hold=0;
   	if(img.alt="voltage") { voltage=0; $(".cs_knob").trigger('configure', {readOnly : true }); }
   	if(img.alt="time_out") {time_out=0; $(".cs_knob2").trigger('configure', {readOnly : true }); }
   	
   }

   else 
   	{
   		
   		img.src = "images/on.png";

   		if(img.alt="on_off_status") on_off=1;
	    if(img.alt="hold_status") hold=1;
	   	if(img.alt="voltage") {voltage=1; $(".cs_knob").trigger('configure', {readOnly : false }); }
	   	if(img.alt="time_out") {time_out=1; $(".cs_knob2").trigger('configure', {readOnly : false }); }
	   	
   	}



   	
    
}


function changeknobval(val){
                        $('.level')
                        .val(val)
                        .trigger('change');
                    }

                    $(document).ready(
                                function() { changeknobval(lvl);
                                if(lvl==100)
								{
									var image_warning = document.getElementById('warning'); 
									image_warning.src = "images/warning.png";
									var image_full = document.getElementById('full'); 
									image_full.src = "images/on.png";
									

									
								} 

								else if(lvl==0)
								{
									var image_empty = document.getElementById('empty'); 
									image_empty.src = "images/on.png";
								}
                    });

