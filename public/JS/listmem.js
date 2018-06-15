var MemberRef = firebase.database().ref("/Members")
var SearchRef = firebase.database().ref("/")

//console.log("hello")

// Event listener for Add Member button
function SmartSociety(){
	var membersearchinpbtn = document.getElementById("searchmembers");

	membersearchinpbtn.addEventListener('click',this.searchMember.bind(this));

	var cnt = 0;

	MemberRef.on("child_added", function(data, prevChildKey) {
		//working member display code 
	   /*var newMember = data.val();
	   console.log("name: " + newMember.Name);
	   console.log("Email: " + newMember.Email);
	   g = document.createElement('addHere');
		g.setAttribute("class", "list-group-item");
		var textnode = document.createTextNode(newMember.Name+", Flat no. "+newMember.Address);         // Create a text node
		g.appendChild(textnode);   
		document.getElementById("myList").appendChild(g);*/


		//Method 2 
		cnt +=1

		var newMember = data.val();
		tr = document.createElement('tr');
		th = document.createElement('th');
		td1 = document.createElement('td');
		td2 = document.createElement('td');
		td3 = document.createElement('td');
		var name1 = document.createTextNode(newMember.Name);
		var flatno = document.createTextNode(newMember.Address);
		var email = document.createTextNode(newMember.Email);
		var num  = document.createTextNode(cnt.toString());
		th.appendChild(num);
		td1.appendChild(name1);
		td2.appendChild(flatno)
		td3.appendChild(email);
		tr.appendChild(th)
		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)
		document.getElementById("entries").appendChild(tr);
		console.log(cnt)
		//document.write("lkjh")

	
	});

	
};

SmartSociety.prototype.searchMember = function(){


	var query = document.getElementById("membersearchinp").value;

	console.log(query)

	SearchRef.child('Members').orderByChild('Address').equalTo(query).on("value", function(snapshot) {
	    console.log(snapshot.val());
	    snapshot.forEach(function(data) {
	        console.log(data);
	    });
	});


};




window.onload = function(){
	window.SmartSociety = new SmartSociety();
};
