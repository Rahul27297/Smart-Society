//console.log("hello")
var ref = firebase.database().ref("/Society/facilities");
// Event listener for Add Member button
function SmartSociety1(){
	//facility addition code
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

	ref.on('value',function(snapshot){
			var found=0;
			//window.alert(snapshot.val().name);
			snapshot.forEach(function(childSnapshot){
					var option = document.createElement('option');
					option.value = childSnapshot.val().name;
					option.innerHTML = childSnapshot.val().name;
					facilityname.appendChild(option);
			});
		})

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

	//facility update code
	var updatefacilitybtn = document.getElementById("updatefacility");
	var faciliyname = document.getElementById("facilityname");
	var facilitynamedisplay = document.getElementById("facilitynamedisplay");
	var updatefacilityform = document.getElementById("updatefacilityform");
	updatefacilityform.style.display = "none";

	var bookingrequired = document.getElementById("bookingrequired");
	var bookingrequirement = document.getElementById("bookingrequirement");

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

	;

	updatefacilitybtn.addEventListener('click',function(){
		//facilitynamedisplay
		ref.on('value',function(snapshot){
			var found=0;
			//window.alert(snapshot.val().name);
			snapshot.forEach(function(childSnapshot){
				if((facilityname.value).localeCompare(childSnapshot.val().name) == 0){
					//window.alert(childSnapshot.val().name);
					updatefacilityform.style.display = "block";
					facilitynamedisplay.innerHTML = childSnapshot.val().name;
					bookingrequirement.value = childSnapshot.val().booking_requirement;

					if((bookingrequirement.value).localeCompare("yes") == 0){
						var bookingstarttime = document.getElementById("bookingstarttime").value;
						var bookingendtime = document.getElementById("bookingendtime").value;
						var slotduration = document.getElementById("slotduration").value;
						var e = document.getElementById("status");
						var status = e.options[e.selectedIndex].value;

						bookingstarttime.value = childSnapshot.val().booking_start;
						bookingendtime.value = childSnapshot.val().booking_end;

						slotduration.value = childSnapshot.val().slot_duration;
						e.value = childSnapshot.val().facility_status;
					}
					else{
						bookingrequired.style.display = "none";
					}

					found = 1;
				}
			});
			if(found == 0){
					bootbox.alert("Facility doesnt exist");
				}
		});
	});

	var updateFacilitybtn = document.getElementById("updatefacilitybtn");
		updateFacilitybtn.addEventListener('click',function(){
			var e = document.getElementById("status");
			var status = e.options[e.selectedIndex].value;
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


