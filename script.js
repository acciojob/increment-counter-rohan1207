//your JS code here. If required.
let button = document.querySelector("#incrementBtn");
let counter=document.querySelector("#counter")
button.addEventListener("click",()=>{
	alert(counter.textContent);
counter.textContent=parseInt(counter.textContent)+1;
	
})