
const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;
  
  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight  + "px";
  
}
// event
btns.forEach((el) => el.addEventListener("click", accordion));






var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newtask input').value.length == 0){
      alert("Please Enter a Task")
  } else {
    document.querySelector('#tasks').innerHTML += `
        <div class="task">◦
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
              <img class="bck" src="/images/bin.png" alt="">
            </button>
        </div>
    ` ;

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}
}