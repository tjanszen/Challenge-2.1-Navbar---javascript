window.onload = init;

function init(){
	var navItems = document.querySelectorAll(".nav-item");
	for(var i = 0; i < navItems.length; i++){
		navItems[i].addEventListener("click", toggleMenu);
	}
}

function toggleMenu(e){
	var navItem = e.target;
	var navId = navItem.getAttribute("id");
	
}


























































