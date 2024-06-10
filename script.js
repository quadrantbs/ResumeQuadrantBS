var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++){
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight= null;
    } else {
      content.style.maxHeight= content.scrollHeight + "px";
    }
  });
}

let loading = document.getElementById("loading");

setTimeout(function(){
  loading.style.opacity = 0;
  setTimeout(function(){
    loading.style.display= "none";
  }, 750);
}, 250);