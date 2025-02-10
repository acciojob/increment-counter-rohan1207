//your JS code here. If required.
let button = document.querySelector("#incrementBtn");
let counter=document.querySelector("#counter")
button.addEventListener("click",()=>{
	alert(parseInt(counter.textContent));
counter.textContent=parseInt(counter.textContent)+1;
	
})