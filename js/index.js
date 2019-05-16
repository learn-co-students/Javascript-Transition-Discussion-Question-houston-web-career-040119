// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

let button = document.querySelector("#save_lincoln")
button.addEventListener("click",(e)=>{
  e.preventDefault
  let interval = document.querySelector("#interval").value
  let foreground = document.querySelector("#foreground")
  let message = document.querySelector("#hidden-message")
  saveLincoln(interval,foreground,message)
})

function saveLincoln(interval,img,msg){
  if (img.style.opacity == ""){img.style.opacity = 1}
  setInterval(() => {
    if (parseFloat(img.style.opacity) > 0){
      img.style.opacity = parseFloat(img.style.opacity) - 1.0/interval
    }
  },1)
  msg.style.display = ""
}
