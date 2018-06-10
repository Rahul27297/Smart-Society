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



var auth = firebase.auth();

function SmartSociety(){
	var signinbtn = document.getElementById("signin");
	//resetpswdbtn.style.color = '#6699CC';
	signinbtn.addEventListener('click',this.signIn.bind(this));
}

SmartSociety.prototype.signIn = function(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		bootbox.alert(errorMessage);
	});
};

auth.onAuthStateChanged(firebaseUser => {

	if(firebaseUser){
		console.log(firebaseUser);
		return("index.html")
		//auth.signOut();

		
	}
	else{
		console.log('not logged in');
	}


})

window.onload = function(){
	window.SmartSociety = new SmartSociety();
}