//console.log("hello")
var ref = firebase.database().ref("/Society/facilities");
// Event listener for Add Member button
function SmartSociety1(){
	//window.alert(document.title);
	var bookingrequired = document.getElementById("bookingrequired");
	bookingrequired.style.display = "none";
	var facilityname = document.getElementById("facilityname");
	var bookingrequirement = document.getElementById("bookingrequirement");
	var addfacilitybutton = document.getElementById("addfacility");
	var memberform = document.getElementById("memberform");
	//window.alert(facilityname.value);
	bookingrequirement.addEventListener('change',function(){
		if(facilityname.value != "" && bookingrequirement.value == "yes"){
			bookingrequired.style.display = "block";
			var bookingstarttime = document.getElementById("bookingstarttime").value;
			var bookingendtime = document.getElementById("bookingendtime").value;
			var slotduration = document.getElementById("slotduration").value;
		}
		else if(bookingrequirement.value == "no"){
			bookingrequired.style.display = "none";
		}
	});

	addfacility.addEventListener('click',function(){
		//bootbox.alert("Facility added successfully");
		var e = document.getElementById("status");
		var status = e.options[e.selectedIndex].value;
		window.alert(status);
		var facility = {
			name: facilityname.value,
			facility_status: status,
			booking_requirement: bookingrequirement.value,
			booking_start: bookingstarttime.value,
			booking_end: bookingendtime.value,
			slot_duration: slotduration.value
		};
		ref.child(facilityname.value).set(facility);
	});

}

/*function onSelectChanged(facilityname,bookingrequirement,bookingrequired){
	 window.alert(bookingrequirement.value);
	/*if(facilityname.value != "" && bookingrequirement.value == "yes"){
		bookingrequired.style.display = "block";
		var bookingstarttime = document.getElementById("bookingstarttime").value;
		var bookingendtime = document.getElementById("bookingendtime").value;
		var slotduration = document.getElementById("slotduration").value;
		var status = document.getElementById("status").value;
	}
}*/


