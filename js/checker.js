
function checker(){
var patt=new RegExp("^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)+$");
if(!patt.test(document.getElementById("email").value)){
	document.getElementById("emailerror").removeAttribute("hidden")
}else{
	document.getElementById("emailerror").setAttribute("hidden",true)
}
	
}

function upload(){
	
	
	
}