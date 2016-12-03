var J2lib = J2lib || (function function_name(argument) {
	// body...
	// //Accessible only here
	var privateArray=[];

	//Cannot be called from outside this function
	var privateFunction=function(){
	}

	return {
		show: function (string) {
			// body...
			console.log(string);
		},
		print: function (argument) {
			// body...
			alert('bac');
		},
		ajaxPost: function (idClick, idForm, url) {
			// body...
			$('#'+ idClick ).click(function () {
		    	// body...
		    	var data = $('#'+ idForm).serialize();
			    console.log(data);
				$.ajax({
			        url: url,
			        type: "POST",
			        contentType : 'application/x-www-form-urlencoded',
			        beforeSend: function (xhr) {
			            var token = $('meta[name="csrf_token"]').attr('content');
			            if (token) {
			                return xhr.setRequestHeader('X-CSRF-TOKEN', token);
			            }
			        },
			        data: data,

			        success: function(data){
			        	console.log(data);
			        }, 

			        error: function(data){
			        	var errors = $.parseJSON(data.responseText); 
			        	console.log(data);
			            console.log(data.responseText);
			        }
		    	});
    		})
		}
	}
})();











/*
function xacNhanDeTai() {
    // body...
    $('#xacNhanDeTai').click(function () {
    	// body...
    	var data = $('form').serialize();
	    console.log(data);
		$.ajax({
	        url: "guiDeTai",
	        type: "POST",
	        contentType : 'application/x-www-form-urlencoded',
	        beforeSend: function (xhr) {
	            var token = $('meta[name="csrf_token"]').attr('content');
	            if (token) {
	                return xhr.setRequestHeader('X-CSRF-TOKEN', token);
	            }
	        },
	        data: data,

	        success: function(data){
	        	console.log(data);
	        }, 

	        error: function(data){
	        	var errors = $.parseJSON(data.responseText); 
	        	console.log(data);
	            console.log(data.responseText);
	        }
    	});
    })
}*/