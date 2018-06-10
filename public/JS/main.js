// Sets up shortcuts to Firebase features and initiate firebase auth.
var ref = firebase.database().ref("/Members/")
var auth = firebase.auth();

// Event listener for Add Member button
function SmartSociety(){
	var addmemberbtn = document.getElementById("addmember");
	addmemberbtn.addEventListener('click',this.addMember.bind(this));
};

SmartSociety.prototype.addMember = function(){

	var Name = document.getElementById("Name").value;
	var Email = document.getElementById("Email").value;
	var Address = document.getElementById("Address").value;
	var Contact = document.getElementById("Contact").value;
	var key = ref.push().key;
	//Window.alert(key);

	if(document.getElementById("Owner").checked){
		var type = "Owner";
	}
	else if(document.getElementById("Tenant").checked){
		var type = "Tenant";
	}
	var member = {
		Name: Name,
		Email: Email,
		Address: Address,
		Contact: Contact,
		Type: type
	};
	var emailAddress = Email;
	console.log(emailAddress)

	auth.sendPasswordResetEmail(emailAddress).then(function() {
	  // Email sent.
	  console.log("Success")
	}).catch(function(error) {
	  // An error happened.
	  console.log(error)
	});
	//ref.child("Members" + "/" + Email).update(member)
	//console.log(Email);
	ref.push(member);
	
	
};


/*SmartSociety.prototype.getMembers = function(){
	var table = document.getElementById("table");
	ref.on('value',function(snapshot){
		snapshot.forEach(function(childsnapshot){
			var Name = childsnapshot.val().Name;
			var Address = childsnapshot.val().Address;
			var Contact = childsnapshot.val().Contact;
			var Email = childsnapshot.val().Email;
			var Type = childsnapshot.val().type;
			var newRow = table.insertRow(table.length);
			var cell = newRow.insertCell(0);
			cell.innerHTML = Name;
		});
	});
};*/

window.onload = function(){
	window.SmartSociety = new SmartSociety();
};
