const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.getElementById("imgBox");
let qr_img = document.getElementById("qr_img");
let qr_text = document.getElementById("qr_text");
function generateqr(){
qr_img.src=url + qr_text.value;
}
let btn = document.getElementById("btn");
btn.addEventListener("click", generateqr);