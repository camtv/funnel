import $ from "jquery"


function SendEvent(Params)
{
    Params.Host = location.host;
    return $.ajax({
        "url": "https://www.internetcreaindipendenza.it/api/error_events",
        "method": "POST",
        "timeout": 5000,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(Params)
    });
}

export default SendEvent;
window.SendEvent = SendEvent;