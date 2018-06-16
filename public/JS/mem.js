
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}



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
	var addmemberbtn = document.getElementById("addmemberbtn");
	addmemberbtn.addEventListener('click',this.addMember.bind(this));

	console.log("hello")

	var csvBtn = document.getElementById("csvBtn");

	csvBtn.addEventListener('change',function(e){
		var file = e.target.files[0];
		console.log(file.responseText)
		//console.log(csvJSON(file))

		var storRef = firebase.storage().ref('members/'+file.name);
		console.log(storRef);

		var task = storRef.put(file);

		task.on('state_changed',

			function progress(snapshot){

				//console.log("hello")

				var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
				uploader.value = percentage;
				console.log(percentage);

			},

			function error(err){

			},

			function complete(){

			}


		)


	});





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
			  window.alert("Added Member Successfully")
			  console.log("Success")
			}).catch(function(error) {
			  // An error happened.
			  window.alert(error.message)
			  console.log(error)
		});
		}
		else{
			console.log("User exists")
			window.alert("User with specified Email ID already exists")
		}
    
	}, 1500);
	
	
};



window.onload = function(){
	window.SmartSociety = new SmartSociety();
};
