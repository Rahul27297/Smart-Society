var Password = {
 
  _pattern : /[a-zA-Z0-9_\-\+\.]/,
  
  
  _getRandomByte : function()
  {
    // http://caniuse.com/#feat=getrandomvalues
    if(window.crypto && window.crypto.getRandomValues) 
    {
      var result = new Uint8Array(1);
      window.crypto.getRandomValues(result);
      return result[0];
    }
    else if(window.msCrypto && window.msCrypto.getRandomValues) 
    {
      var result = new Uint8Array(1);
      window.msCrypto.getRandomValues(result);
      return result[0];
    }
    else
    {
      return Math.floor(Math.random() * 256);
    }
  },
  
  generate : function(length)
  {
    return Array.apply(null, {'length': length})
      .map(function()
      {
        var result;
        while(true) 
        {
          result = String.fromCharCode(this._getRandomByte());
          if(this._pattern.test(result))
          {
            return result;
          }
        }        
      }, this)
      .join('');  
  }    
    
};


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
	else if(document.getElementById("Admin").checked){
		var type = "Admin";
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
	password = Password.generate(10);
	console.log(password)
	firebase.auth().createUserWithEmailAndPassword(emailAddress, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});
	console.log("created")

	setTimeout(function(){
		auth.sendPasswordResetEmail(emailAddress).then(function() {
		  // Email sent.
		  console.log("Success")
		}).catch(function(error) {
		  // An error happened.
		  console.log(error)
		});
    
	}, 5000);

	
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
