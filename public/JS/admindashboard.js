window.onload = function(){
	window.SmartSociety = new SmartSociety();

};

function SmartSociety(){
	var addmemberbtn = document.getElementById("addmember");
	var displayarea = document.getElementById("displayarea");
	var facility = document.getElementById("facility");
	var notices = document.getElementById("notices");

	addmemberbtn.addEventListener('click',this.addMember.bind(this));

	displayarea.innerHTML = '<object type="text/html" data="addmem.html" height="100%" width="100%"></object>';
	displayarea.style.height = "100%";

	facility.addEventListener('click',this.addFacility.bind(this));
	notices.addEventListener('click',this.addNotice.bind(this));
	//updatefacility.addEventListener('click',this.updateFacility.bind(this));
}

SmartSociety.prototype.addMember = function(){
	displayarea.innerHTML = '<object type="text/html" data="addmem.html" height="100%" width="100%"></object>';
	displayarea.style.height = "100%";

}

SmartSociety.prototype.updateFacility = function(){
	displayarea.innerHTML = '<object type="text/html" data="updatefacility.html" height="100%" width="100%"></object>';
	displayarea.style.height = "100%";
}

SmartSociety.prototype.addFacility = function(){
	displayarea.innerHTML = '<object type="text/html" data="addfacility.html" height="100%" width="100%"></object>';
	/*var bookingrequired = displayarea.document.getElementById("bookingrequired");
	var tabletennis = displayarea.document.getElementById("tabletennis");
	var yesornott = displayarea.document.getElementById("yesornott");
	yesornott.addEventListener('change',this.onSelectChanged.bind(this));
	bookingrequired.style.display = "none";*/
	//SmartSociety1();
};

SmartSociety.prototype.addNotice = function(){
	displayarea.innerHTML = '<object type="text/html" data="notices.html" height="100%" width="100%"></object>';
	displayarea.style.height = "100%";
}
