console.log("JS File Loaded")

AOS.init();

const formDiv = document.querySelector('.form-input');
const formSubmitMessage = document.getElementById('submit-message');
const show = "block";
const hide = "none";

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

document.getElementById('form-submit-button').addEventListener("click", function(button){
  formDiv.style.display = hide;
  formSubmitMessage.style.display = show;

  setTimeout(function() {
    formDiv.style.display = show;
    formSubmitMessage.style.display = hide;
  }, 5000);
  }
);
