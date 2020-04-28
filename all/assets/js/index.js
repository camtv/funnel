import $ from "jquery"
import Sets from "./config.js"


function DoIO(Endpoint,Params)
{
	return $.ajax({
		"url": Endpoint,
		"method": "POST",
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

var count = 0;
function AddLead(email,name, lastname) {

	return DoIO(Sets.CamTVServer + "/api/purchases/setlead", { "EMail" : email, "FirstName": name, "LastName": lastname, "LeadUUID": getUrlParam('cid','Empty') })
		.done(function(){
			console.log("done");
		})
		.fail(function(){
			if(count<3){
				setTimeout(function(){ AddLead(email,name, lastname); }, 1500);
				count++;
			}
		})
}

window.callAdLead = AddLead;
