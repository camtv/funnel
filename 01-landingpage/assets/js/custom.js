CTVPay.OneClickPayment = true;	

	
// chiamata adleads NUOVA CON TIMEOUT	

function callAdLead(mail, name, lastname) {
	
	function DoIO(Endpoint,Params)
	{
	  return $.ajax({
		"url": Endpoint,
		"method": "GET",
		"timeout": 30000,
		"headers": {
		  "Content-Type": "application/x-www-form-urlencoded"
		},
		"data": Params
	  });
	}
	
	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		return vars;
	}

	function getUrlParam(parameter, defaultvalue){
		var urlparameter = defaultvalue;
		if(window.location.href.indexOf(parameter) > -1){
			urlparameter = getUrlVars()[parameter];
			}
		return urlparameter;
	}
	
	function inviaFinal() {

		var cid = getUrlParam('cid','Empty');

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function() {
		  if(this.readyState === 4) {
			console.log(this.responseText);
		  }
		});

		xhr.open("POST", "https://www.testcam.tv/api/purchases/setlead?EMail="+mail+"&FirstName="+name+"&LastName="+lastname+"&LeadUUID="+cid);

		xhr.send();

	}

// check API e invio

var count = 0;

chiamaInvia();

function chiamaInvia() {	

	DoIO("https://www.devcam.tv/api/purchases/Health")
	   .done(function(){
			inviaFinal();
			count=4;
			//console.log("successo!" + count);
	   })
	   .fail(function(){
		   if(count<3){
			   setTimeout(chiamaInvia, 1500);
			   //console.log("ops!" + count);
			   count++;
		   }
	   })
	   
}
	  
   
}  