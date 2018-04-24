const clock = document.getElementById('clock')

var loader = ' <div class="lds-heart"><div></div></div>';



window.onload = () => {
  setInterval(() => {
    clock.innerHTML = Date() 
    + `     <a href="#" class="button">Come in</a>`
  }, 1000)
};


