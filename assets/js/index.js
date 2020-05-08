import $ from "jquery"
import Sets from "./conf.js"


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

function getUrlParameter(name) {
	if (window.URLSearchParams != null) {
		var url = new URL(window.location.href);
		var searchParams = new URLSearchParams(url.search);
		return searchParams.get('cid');
	}
	else {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}
};

var count = 0;
function AddLead(email,name, lastname) {

	try {
		window.LeadUUID = getUrlParameter('cid');
	}
	catch (Ex) {
	}

	if (window.LeadUUID == null)
		window.LeadUUID = email;

	return DoIO(Sets.CamTVServer + "/api/purchases/setlead", { "EMail" : email, "FirstName": name, "LastName": lastname, "LeadUUID": window.LeadUUID })
		.done(function(){
			console.log("done");
		})
		.fail(function(){
			if(count<3){
				setTimeout(function(){ AddLead(email,name, lastname); }, 1500);
				count++;
			}
		});
}

window.callAdLead = AddLead;
