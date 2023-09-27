function send() {
    let message = document.getElementById('message').value;
    let username = document.getElementById('username').value;
    let phone = document.getElementById('phone').value;

    if(message == '' || username == '' || phone == ''){
        alert("Formani to'liq to'ldiring");
      } else{
        sendtelegram(message, username, phone);
      }
}

function sendtelegram(message, username, phone) {
    let telegram_bot_id = "6615585376:AAFRvBvPmTb3C2Gg2U7XT1nzDfdjAbohGm4";
    let chat_id = 5106792443;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": "Ism: " + username + "\nTelefon: " + phone + "\nXabar: " + message
        })
    };
    $.ajax(settings).done(function (response) {
        alert("Xabar yuborildi!");
    });
}