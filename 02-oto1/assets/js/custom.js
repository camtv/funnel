function appari() {
  var element = document.getElementById("op3-element-Ia9Ju7VC");
  element.classList.remove("nascondi");
}

function step() {
	CTVPay.OneClickPay("FUNNEL_INFOMARKETING_LIVE", proceed, null);
}
		
CTVPay.OneClickPayment = true;	

