// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

let btn = document.querySelector('#save_lincoln')
let img = document.querySelector('#foreground')
let interval = document.querySelector('#interval')
btn.addEventListener('click', function(event){
  img.src=''
  // debugger
})
