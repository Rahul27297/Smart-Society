var ref = firebase.database().ref("/")
var ref1 = firebase.database().ref("/Society/services/facilities/")
//console.log("hello")

// Event listener for Add Member button
function SmartSociety(){
	var addsocietybtn = document.getElementById("addsociety");
	if(addsocietybtn){
		addsocietybtn.addEventListener('click',this.addSociety.bind(this));

	}
};

SmartSociety.prototype.addSociety = function(){

	var Name = document.getElementById("Name").value;
	var Email = document.getElementById("Email").value;
	var Address = document.getElementById("Address").value;
	var Contact = document.getElementById("Contact").value;
	var services = document.getElementById("services");
	var notices = document.getElementById("notices");
	var facilities = document.getElementById("facilities");
	//var key = ref.push().key;
	//Window.alert(key);
	//console.log("hello")
	var forservices = false;
	var fornotices = false;
	var forfacilites = false;

	if(services.checked == true){
		forservices = true;
	}
	if(notices.checked == true){
		fornotices = true;
	}
	if(facilities.checked == true){
		forfacilites = true;
	}
//	var forservices =
	
	var soc = {
		name: Name,
		email: Email,
		address: Address,
		contact: Contact,
		services: forservices,
		notices: fornotices,
		facilities: forfacilites
	};

	ref.child("Society").update(soc);
	
	
	
};

window.onload = function(){
	window.SmartSociety = new SmartSociety();
};
