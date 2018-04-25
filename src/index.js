const clock = document.getElementById("clock");

var loader = ' <div class="lds-heart"><div></div></div>';

window.onload = () => {
  setInterval(() => {
    clock.innerHTML = Date();
  }, 1000);
};

setInterval(()=>{
  window.location.href = "profile.html";
}, 4000);