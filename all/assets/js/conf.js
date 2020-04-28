
var host = window.location.hostname;

var currrentLocation = "https://www.internetcreaindipendenza.it";
var toUIOto1 = 743000;
var toUIOto2 = 508000;
if (host.indexOf("github") != -1) {
    currrentLocation = "https://camtv.github.io/funnel/all/build";
    toUIOto1 = 12000;
    toUIOto2 = 12000;
}
else if (host.indexOf("127.0.0.1") != -1 || host.indexOf("localhost") != -1) {
    currrentLocation = location.protocol + '//' + location.hostname + ":" + location.port;
    toUIOto1 = 5000;
    toUIOto2 = 5000;
}


var Sets = {
    CamTVServer: 'https://www.testcam.tv',
    OTO1: currrentLocation+'/oto1.html',
    OTO1_PurchaseUI_Timeout: toUIOto1,
    OTO2: currrentLocation+'/oto2.html',
    OTO2_PurchaseUI_Timeout: toUIOto2,
    ThankYou: currrentLocation+'/thankyou.html'
}




export default Sets;
window.Sets = Sets;