import Sets from "config.js"

/***************************************************** gestione form *********************/

var currentTab = 0; // Current tab is set to be the first tab (0)
function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "SPEDISCI IL MIO LIBRO ADESSO!<br><span class='txt-btn'>100% pagamento sicuro</span>";
    } else {
        document.getElementById("nextBtn").innerHTML = "<i class='fas fa-shipping-fast'></i> Inviamelo GRATIS!<br><span class='txt-btn'>Partecipa all'offerta speciale.</span>";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;

    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        ///////////////////////////////////////////////////////////////////////////////////////////// CHIAMATA API CAM.TV
        // *** IMPORTANTE: rimosso submit del form per evitare ricaricamento della pagina ***
        // document.getElementById("regForm").submit();

        var nomefr = document.getElementById("name").value;
        var emailfr = document.getElementById("email").value;
        var addressfr = document.getElementById("address").value;
        var cittafr = document.getElementById("citta").value;
        var capfr = document.getElementById("cap").value;
        var telfr = document.getElementById("tel").value;
        var nazfr = document.getElementById("naz").value;

        // assegna id prodotto in base a checkbox
        var prodotto;
        var selezionato = document.getElementById("offerta").checked;
        if(selezionato) {
            switch(nazfr) {
                case "ITA":
                    prodotto = "FUNNEL_BUMP"
                    break;
                default:
                    prodotto = "FUNNEL_BUMP_NO_ITA"
            }
        } else {
            switch(nazfr) {
                case "ITA":
                    prodotto = "FUNNEL_BOOK"
                    break;
                default:
                    prodotto = "FUNNEL_BOOK_NO_ITA"
            }
        }

        CTVPay.Pay(prodotto, Sets.CamTVServer, null, null, {
                "FirstName": nomefr, // obbligatorio
                "LastName": " ", // obbligatorio
                "EMail": emailfr, // obbligatorio
                "CountryISOCode": nazfr, // obbligatorio es: "ITA"
                "Address": addressfr,
                "City": cittafr,
                "Zip": capfr,
                "MobileNumber": telfr
            }
        );

        ///////////////////////////////////////////////////////////////////////////////////////////// FINE CHIAMATA
        return false;
    }

///////////////////////////////////////////////////////////////////////////////////////////// CHIAMATA ADLEAD

    // prima conferma dati

    var nomefr = document.getElementById("name").value;
    var emailfr = document.getElementById("email").value;
    var res = nomefr.split(" ");
    var nome = res[0];
    var cognome = res[1];

    callAdLead(emailfr, nome, cognome);
    //alert("passo");

    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }

    // controllo email
    var ml = document.getElementById("email").value;
    var mlck = document.getElementById("emailck").value;
    var result = ml.localeCompare(mlck);
    if (result !=0) {
        document.getElementById("emailck").value = "la mail non corrisponde";
        document.getElementById("emailck").classList.add("invalid");
        valid = false;
    }
    // fine controllo email

    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" attiva", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " attiva";
}

// classe controllo visibilità prezzo totale
function tot() {
    var element = document.getElementById("totale");
    element.classList.toggle("hidden");
    var element2 = document.getElementById("totalone");
    element2.classList.toggle("hidden");
}



function restart() {

    player.setCurrentTime(0).then(function(seconds) {
        // `seconds` indicates the actual time that the player seeks to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // The time is less than 0 or greater than the video's duration
                break;

            default:
                // Some other error occurred
                break;
        }
    });
    player.setVolume(0.5).then(function(volume) {
        // The volume is set
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // The volume is less than 0 or greater than 1
                break;

            default:
                // Some other error occurred
                break;
        }
    });

    var element = document.getElementById("btn-overlay");
    element.classList.add("cela");

}

/*********************************************** gestione mese attuale offerta ****************************/

function dataMese() {
    var month = new Array();
    month[0] = "Gennaio";
    month[1] = "Febbraio";
    month[2] = "Marzo";
    month[3] = "Aprile";
    month[4] = "Maggio";
    month[5] = "Giugno";
    month[6] = "Luglio";
    month[7] = "Agosto";
    month[8] = "Settembre";
    month[9] = "Ottobre";
    month[10] = "Novembre";
    month[11] = "Dicembre";

    var d = new Date();
    var n = month[d.getMonth()];
    document.getElementById("mese").innerHTML = n;
}



window.dataMese=dataMese;

window.showTab = showTab;
window.nextPrev = nextPrev;
window.validateForm = validateForm;
window.fixStepIndicator = fixStepIndicator;
window.fixStepIndicator = fixStepIndicator;
window.tot = tot;

