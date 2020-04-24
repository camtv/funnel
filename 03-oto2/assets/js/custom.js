function appari() {
  var element = document.getElementById("op3-element-Ia9Ju7VC");
  element.classList.remove("nascondi");
  //alert("onload evento!!");
}

function step() {
	CTVPay.OneClickPay("ONE_CLICK_4", proceed, null);
}

function finisci() {
	window.location.href = "https://internetcreaindipendenza.it/thank-you";
	}
	
CTVPay.OneClickPayment = true;	