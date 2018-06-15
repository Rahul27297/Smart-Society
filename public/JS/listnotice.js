var NoticesRef = firebase.database().ref("/Society/services/notices")
//console.log("hello")

//To separate subject from notice

function separate(txt) {
	// body...
	var sub = "";
	var body = "";



}


// Event listener for Add Member button
function SmartSociety(){
	console.log("kjvasdfkbha")
	var cnt = 0;
	NoticesRef.on("child_added", function(data, prevChildKey) {
	   var newNotice = data.val();
	   /*console.log("name: " + newNotice.Description);
	   //console.log("Email: " + newNotice.Email);
	   g = document.createElement('addHere');
		g.setAttribute("class", "list-group-item");
		var textnode = document.createTextNode(cnt.toString()+". "+newNotice.Description);         // Create a text node
		g.appendChild(textnode);   
		document.getElementById("myList").appendChild(g);
		cnt+=1;
		console.log(cnt);*/
		console.log(newNotice.Description)
		di = document.createElement('div')
		di.setAttribute("class","p-3 mb-2 bg-light text-dark");
		var val = (newNotice.Description.split("!@#"))
		var sub = val[0];
		var body = val[1];

		subject = document.createElement('h3')
		txtnode1 = document.createTextNode(sub);

		content = document.createElement('p')
		txtnode2 = document.createTextNode(body);

		//console.log(txtnode)
		subject.appendChild(txtnode1);
		content.appendChild(txtnode2);


		di.appendChild(subject);
		di.appendChild(content);
		
		document.getElementById("myList").appendChild(di);

	});

	
};



window.onload = function(){
	window.SmartSociety = new SmartSociety();
};
