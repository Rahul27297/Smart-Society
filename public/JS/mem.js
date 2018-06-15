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
		Applications: true,
		Notices: true,
		Name: Name,
		Email: Email,
		Address: Address,
		Contact: Contact,
		Type: type,
		Bookings: {
			TableTennis:{
				date:"",
				time:""
			},
			Swimming:{
				date:"",
				time:""
			},
			Basketball:{
				date:"",
				time:""
			},
			LawnTennis:{
				date:"",
				time:""
			},
			ClubHouse:{
				date:"",
				time:""
			},
			Gym:{
				date:"",
				time:""
			},
			Snooker:{
				date:"",
				time:""
			},
			Badminton:{
				date:"",
				time:""
			},
			Library:{
				date:"",
				time:""
			},
			AmphiTheatre:{
				date:"",
				time:""
			}
		}
	};
	var emailAddress = Email;
	console.log(emailAddress)
	password = Password.generate(10);
	console.log(password);
	var ifEmailAlreadyExists = "";
	var x = firebase.auth().createUserWithEmailAndPassword(emailAddress, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  //console.log(errorCode)
	  var errorMessage = error.message;
	  ifEmailAlreadyExists = errorCode;
	  //console.log(errorCode)
	  //console.log(errorMessage)
	  // ...
	});
	console.log(ifEmailAlreadyExists)
	//ref.push(member)

	setTimeout(function(){
		if(ifEmailAlreadyExists!="auth/email-already-in-use"){
			auth.sendPasswordResetEmail(emailAddress).then(function() {
			  // Email sent.
			  ref.push(member);

			  console.log("Success")
			}).catch(function(error) {
			  // An error happened.
			  console.log(error)
		});
		}
		else{
			console.log("User exists")
		}
    
	}, 5000);
	
	
};



window.onload = function(){
	window.SmartSociety = new SmartSociety();
};
