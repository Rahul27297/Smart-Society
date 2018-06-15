//console.log("hello")
var ref = firebase.database().ref("/Society/services/facilities");
// Event listener for Add Member button
function SmartSociety1(){
	//facility addition code
	//window.alert(document.title);
	var updatefacilityname = document.getElementById("updatefacilityname");
	var bookingrequired = document.getElementById("bookingrequired");
	bookingrequired.style.display = "none";
	var facilityname = document.getElementById("facilityname");
	var bookingrequirement = document.getElementById("bookingrequirement");
	var donebutton = document.getElementById("done");
	var addfacilitybtn = document.getElementById("addfacility");
	var facilityadditionform = document.getElementById("facilityadditionform");
	var memberform = document.getElementById("memberform");
	//window.alert(facilityname.value);

	facilityadditionform.style.display = "none";

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


	addfacilitybtn.addEventListener('click',function(){
		facilityadditionform.style.display = "block";
	});

	ref.on('value',function(snapshot){
			var found=0;
			//window.alert(snapshot.val().name);
			snapshot.forEach(function(childSnapshot){
					var option = document.createElement('option');
					option.value = childSnapshot.val().name;
					option.innerHTML = childSnapshot.val().name;
					updatefacilityname.appendChild(option);
			});
		})

	done.addEventListener('click',function(){
		//bootbox.alert("Facility added successfully");
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

	//facility update code
	var updatefacilitybtn = document.getElementById("updatefacility");
	//var updatefacilityname = document.getElementById("updatefacilityname"); Line shifted to the top
	var facilitynamedisplay = document.getElementById("facilitynamedisplay");
	var updatefacilityform = document.getElementById("updatefacilityform");
	updatefacilityform.style.display = "none";

	var updatebookingrequired = document.getElementById("updatebookingrequired");
	var updatebookingrequirement = document.getElementById("updatebookingrequirement");

	updatebookingrequirement.addEventListener('change',function(){
		if(updatefacilityname.value != "" && updatebookingrequirement.value == "yes"){
			bookingrequired.style.display = "block";
			var updatebookingstarttime = document.getElementById("updatebookingstarttime").value;
			var updatebookingendtime = document.getElementById("updatebookingendtime").value;
			var updateslotduration = document.getElementById("updateslotduration").value;
		}
		else if(updatebookingrequirement.value == "no"){
			updatebookingrequired.style.display = "none";
		}
	});

	;

	updatefacilitybtn.addEventListener('click',function(){
		//facilitynamedisplay
		ref.on('value',function(snapshot){
			var found=0;
			snapshot.forEach(function(childSnapshot){
				if((updatefacilityname.value).localeCompare(childSnapshot.val().name) == 0){

					//window.alert(childSnapshot.val().name);
					updatefacilityform.style.display = "block";
					facilitynamedisplay.innerHTML = childSnapshot.val().name;
					updatebookingrequirement.value = childSnapshot.val().booking_requirement;

					if((updatebookingrequirement.value).localeCompare("yes") == 0){
						var updatebookingstarttime = document.getElementById("updatebookingstarttime").value;
						var updatebookingendtime = document.getElementById("updatebookingendtime").value;
						var updateslotduration = document.getElementById("updateslotduration").value;
						var e = document.getElementById("updatestatus");
						var updatestatus = e.options[e.selectedIndex].value;

						updatebookingstarttime.value = childSnapshot.val().booking_start;
						updatebookingendtime.value = childSnapshot.val().booking_end;

						updateslotduration.value = childSnapshot.val().slot_duration;
						e.value = childSnapshot.val().facility_status;
					}
					else{
						//window.alert(updatefacilityname.value);
						updatebookingrequired.style.display = "none";
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
			var e = document.getElementById("updatestatus");
			var updatestatus = e.options[e.selectedIndex].value;
			var updatefacility = {
				name: updatefacilityname.value,
				facility_status: updatestatus,
				booking_requirement: updatebookingrequirement.value,
				booking_start: updatebookingstarttime.value,
				booking_end: updatebookingendtime.value,
				slot_duration: updateslotduration.value
			};
			ref.child(updatefacilityname.value).set(updatefacility);
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


