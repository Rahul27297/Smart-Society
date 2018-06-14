var NoticesRef = firebase.database().ref("/Society/services/notices")
//console.log("hello")

// Event listener for Add Member button
function SmartSociety(){
	console.log("kjvasdfkbha")
	var cnt = 0;
	NoticesRef.on("child_added", function(data, prevChildKey) {
	   var newNotice = data.val();
	   console.log("name: " + newNotice.Description);
	   //console.log("Email: " + newNotice.Email);
	   g = document.createElement('addHere');
		g.setAttribute("class", "list-group-item");
		var textnode = document.createTextNode(cnt.toString()+". "+newNotice.Description);         // Create a text node
		g.appendChild(textnode);   
		document.getElementById("myList").appendChild(g);
		cnt+=1;
		console.log(cnt);
	
	});

	
};



window.onload = function(){
	window.SmartSociety = new SmartSociety();
};
