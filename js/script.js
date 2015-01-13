window.onload = init;

function init(){
	var navItems = document.querySelectorAll(".nav-item");
	for(var i = 0; i < navItems.length; i++){
		navItems[i].addEventListener("click", toggleMenu, false);
	}
}

function toggleMenu(e){
	var navItem = e.target;
	var navItemId = navItem.getAttribute("id");
	var dropdown = document.getElementById(navItemId + "-dropdown");
	var dropdownClass = dropdown.getAttribute("class")

	if(dropdownClass == "hide"){
		dropdown.setAttribute("class", "show");
	}
	else{
		dropdown.setAttribute("class", "hide");
	}
	
}


























































