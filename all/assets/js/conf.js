
var host = window.location.hostname;

var currrentLocation = "https://www.internetcreaindipendenza.it";
if (host.indexOf("github") != -1)
    currrentLocation = "https://camtv.github.io/funnel/all/build";
else if (host.indexOf("127.0.0.1") != -1 || host.indexOf("localhost") != -1)
    currrentLocation = location.protocol + '//' + location.hostname +":"+ location.port;


var Sets = {
    CamTVServer: 'https://www.testcam.tv',
    OTO1: currrentLocation+'/oto1.html',
    OTO1_PurchaseUI_Timeout: 10000, //743000,
    OTO2: currrentLocation+'/oto2.html',
    OTO2_PurchaseUI_Timeout: 508000,
    ThankYou: currrentLocation+'/thankyou.html'
}




export default Sets;
window.Sets = Sets;