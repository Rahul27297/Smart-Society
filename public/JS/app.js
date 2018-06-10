var ref = firebase.database().ref("/")

/*function addMember() {
	var email = true; 
	var id = true;
	var notices = true;
	var phone = true;
	var society = true;
	var type = true;
	var memberName = "Kaivalya";

	ref.child("Members"+"/"+memberName).update({
	
		applications:true,
		email:email,
		id:id,
		notices:notices,
		phone:phone,
		society:society,
		type:type
	
})}*/

function addSociety(address,contact,email) {

	//var address = true;
	//var contact = true;
	//var email = true;
	var uniqueID = 12234;
	var name = "sankul";
	console.log("test")
	ref.child("Society").update({
		address:address,
		contact:contact,
		email:email,
		uniqueID:uniqueID,
		name:name

	})}

function onClick() {
	console.log("hi")
	var address = document.getElementById('address')
	var contact = document.getElementById('contact')
	var email = document.getElementById('email')

	console.log(address.value)
	console.log(contact.value)
	console.log(email.value)

	addSociety(address.value,contact.value,email.value)



}

//addMember()
//addSociety()



