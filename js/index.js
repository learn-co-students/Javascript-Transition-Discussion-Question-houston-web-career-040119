//$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

let saveLincolnButton = document.querySelector('#save_lincoln');
let textField = document.querySelector('#interval');
saveLincolnButton.addEventListener("click",function(e) {
  saveLincoln( parseInt(textField.value) );
});

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  //$('#foreground').fadeOut(interval);
  let fgimg = document.querySelector('#foreground');
  setInterval( function() {
    if (fgimg.style.opacity === "") {
      fgimg.style.opacity = "1";
    } else if (parseFloat(fgimg.style.opacity) > 0) {
      fgimg.style.opacity = (parseFloat(fgimg.style.opacity)-0.05).toString();
    }
  }, interval);
}
