let startTime, endTime, changingTime, timespan;

window.addEventListener("load", (event) => {
  document.body.style.backgroundColor = "red";
  
  var divElement = document.createElement("DIV");
  document.body.appendChild(divElement);
  divElement.style.position = "absolute";
  divElement.style.left = "50%";
  divElement.style.top = "50%";
  divElement.style.transform = "translate(-50%, -50%)";
  
  var spanElement = document.createElement("SPAN");
  spanElement.style.fontWeight = "bold";
  var spanText = document.createTextNode("Click anywhere when you see green!");
  spanElement.appendChild(spanText);
  divElement.appendChild(spanElement);
  
  changingTime = Math.ceil(Math.random() * 30) * 1000;
  
  setTimeout(() => {
    document.body.style.backgroundColor = "green";
    startTime = Date.now(); 
  }, changingTime);
});

document.onclick = function(){
  endTime = Date.now();
  timespan = (endTime - startTime) / 1000;
    
  if (timespan > 0) {          
    alert("Your reaction time: " + timespan + " seconds.");
  
    setTimeout(() => {
      document.location.reload(true);
    }, 250);  
  }    
};