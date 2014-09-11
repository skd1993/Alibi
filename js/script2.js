		var on_off=$.jStorage.get("local_on_off");
		var hold=$.jStorage.get("local_hold");
		var voltage=$.jStorage.get("local_voltage");
		var time_out=$.jStorage.get("local_time_out");
		var voltage_val=$.jStorage.get("local_voltage_val");
		var timeout_val=$.jStorage.get("local_timeout_val");


		

		function showImage1(img1)
		{
			
			
					if(on_off==0)
						img1.src = "images/off.png";
					else if(on_off==1)
						img1.src = "images/on.png";
					
			
		}
		function showImage2(img2)
		{
			
			
					if(hold==0)
						img2.src = "images/off.png";
					else if(hold==1)
						img2.src = "images/on.png";
					
			
		}

		function showImage3(img3)
		{
			
			
					if(voltage==0)
						img3.src = "images/off.png";
					else if(voltage==1)
						img3.src = "images/on.png";
					
			
		}

		function showImage4(img4)
		{
			
			
					if(time_out==0)
						img4.src = "images/off.png";
					else if(time_out==1)
						img4.src = "images/on.png";
					
			
		}
			
		var lvl = 100;

		//var voltage_val;
		//var timeout_val;

		var x; //variable changes value to indicate which regulator is used first

		var image_empty;
		var image_full;
		var image_warning;

		function redirect()
		{
			var x =2;
			//www.gdsfs.com/
			window.location = "http://192.168.177.1:8000/machine/get/"+x;
		}

		//change the image from on to off and vice versa; also change their respective variable state -- 1 for 'on'/green, 0 for 'off'/red
		function diffImage(img) 
		{
		   if(img.src.match(/on/)) 
		   {
		   	
		   	img.src = "images/off.png";

		   	if(img.alt=="on_off_status") 
		   	{
		   		 
		   		on_off=0; 
		   		$.jStorage.set("local_on_off", on_off);
		   	}
		   	else if(img.alt=="hold_status") 
		   	{
		   		
		   		hold=0;
		   		$.jStorage.set("local_hold", hold);
		   		
		   	}
		   	else if(img.alt=="voltage") 
		   	{
		   		
		   		voltage=0;
		   		$.jStorage.set("local_voltage", voltage);
		   	}
		   	else if(img.alt=="timeout") 
		   	{
		   		
		   		time_out=0;
		   		$.jStorage.set("local_time_out", time_out);
		   	}
		   	
		   }

		   else 
		   	{
		   		
		   		img.src = "images/on.png";

		   		if(img.alt=="on_off_status") {
		   			
		   			on_off=1;
		   			$.jStorage.set("local_on_off", on_off);
		   		}
			    else if(img.alt=="hold_status") {
			    	
			    	hold=1;
			    	$.jStorage.set("local_hold", hold);
		   		}
			   	else if(img.alt=="voltage") {
			   		
			   		voltage=1;
			   		$.jStorage.set("local_voltage", voltage);
			   	}
			   	else if(img.alt=="timeout") {
			   		
			   		time_out=1;
			   		$.jStorage.set("local_time_out", time_out);
			   	}
			   	
		   	}

		   	
	
		}


		

 $(document).ready(function(){

 	
 	$('.cs_knob').trigger('configure', {
    	'change': function (v1) {
        voltage_val = v1;
        voltage_val=$.jStorage.get("local_voltage_val");
    }
});
        $('.cs_knob2').trigger('configure', {
    	'change': function (v2) {
         timeout_val = v2;
         timeout_val=$.jStorage.get("local_timeout_val");

         //console.log('new value' + v2);
    }

    });


function changeknobval(val){
                        $('.level')
                        .val(val)
                        .trigger('change');
                    }
function changeknobval1(val){
                        $('.cs_knob')
                        .val(val)
                        .trigger('change');
                    }
function changeknobval2(val){
                        $('.cs_knob2')
                        .val(val)
                        .trigger('change');
                    }


        $(document).ready(

                                function() { changeknobval(lvl);
                                	
                                if(lvl==100)
								{
									image_warning = document.getElementById('warning'); 
									image_warning.src = "images/warning.png";
									image_full = document.getElementById('full'); 
									image_full.src = "images/on.png";
									

									
								} 

								else if(lvl==0)
								{
									image_empty = document.getElementById('empty'); 
									image_empty.src = "images/on.png";
								}
                    });




    });




/*if(on_off == 1)
{
	
	if(hold == 0)
	{
		if(voltage == 1)
		{
			$(".cs_knob").trigger('configure', {readOnly : false }); 
   			

		}
		if(time_out==1)
		{
			
   			$(".cs_knob2").trigger('configure', {readOnly : false });
		}
	}
}
*/