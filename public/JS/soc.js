var ref = firebase.database().ref("/")
var ref1 = firebase.database().ref("/Society/services/facilities/")
//console.log("hello")

// Event listener for Add Member button
function SmartSociety(){
	var addsocietybtn = document.getElementById("addsociety");
	var bookingrequired = document.getElementById("bookingrequired");


};

SmartSociety.prototype.addSociety = function(){

	var Name = document.getElementById("Name").value;
	var Email = document.getElementById("Email").value;
	var Address = document.getElementById("Address").value;
	var Contact = document.getElementById("Contact").value;
	var facilities = document.getElementById("facility").value;
	var notices = document.getElementById("notices").value;

	var applications = document.getElementById("applications").value;
	console.log(facilities,notices,applications);
	//var key = ref.push().key;
	//Window.alert(key);
	//console.log("hello")
	
	var soc = {
		name: Name,
		email: Email,
		address: Address,
		contact: Contact,
	};

	ref.child("Society").update(soc);
	
	
	
};

window.onload = function(){
	window.SmartSociety = new SmartSociety();
};
