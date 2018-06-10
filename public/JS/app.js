var ref = firebase.database().ref("/")

// Event listener for Add Member button
function SmartSociety(){
	var addmemberbtn = document.getElementById("addsociety");
	addmemberbtn.addEventListener('click',this.addMember.bind(this));
};

SmartSociety.prototype.addMember = function(){

	var Name = document.getElementById("Name").value;
	var Email = document.getElementById("Email").value;
	var Address = ""//document.getElementById("Address").value;
	var Contact = document.getElementById("Contact").value;
	//var key = ref.push().key;
	//Window.alert(key);
	console.log("hello")
	
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
