const a=document.getElementById("myform");
a.addEventListener('submit', function(event){
   event.preventDefault();
   alert("Successfully submitted");
   console.log("submitted succefully");
});