var MemberRef = firebase.database().ref("/Members")
//console.log("hello")

// Event listener for Add Member button
function SmartSociety(){

	MemberRef.on("child_added", function(data, prevChildKey) {
	   var newMember = data.val();
	   console.log("name: " + newMember.Name);
	   console.log("Email: " + newMember.Email);
	   g = document.createElement('addHere');
		g.setAttribute("class", "list-group-item");
		var textnode = document.createTextNode(newMember.Name+", Flat no. "+newMember.Address);         // Create a text node
		g.appendChild(textnode);   
		document.getElementById("myList").appendChild(g);
	
	});

	
};



window.onload = function(){
	window.SmartSociety = new SmartSociety();
};
