 let qrinput = document.querySelector("#qr-input")
 let qrbutton = document.querySelector("#qr-button")
 let qrimg = document.querySelector("#qr-image")

 qrbutton.addEventListener("click",()=>{
    const inputvalue = qrinput.value;

    if(!inputvalue){
        alert("Please enter the valid URL")
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        qrimg.alt = `QR code for ${inputvalue}`;
    }
 })