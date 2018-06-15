var ref = firebase.database().ref("/Society/services/");
var noticeNumber = 0;
var isFileUploaded = false;
var URL = false;
window.onload = function(){
	window.SmartSociety = new SmartSociety();
};

function SmartSociety(){
	var addnotice = document.getElementById("addnoticebtn");
	var viewnotice = document.getElementById("viewnoticebtn");

	addnotice.addEventListener('click',this.addNotice.bind(this));

	var uploader = document.getElementById('uploader');
	var fileButton = document.getElementById('fileBtn');
	console.log(uploader,fileButton)

	fileButton.addEventListener('change',function(e){
		isFileUploaded = true;
		var file = e.target.files[0];
		console.log(file)

		var storRef = firebase.storage().ref('notices/'+file.name);

		URL = 'notices/'+file.name;
		console.log(URL)



		console.log(file.name)

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


}

SmartSociety.prototype.addNotice = function(){
	var txtarea = document.getElementById("inputlg").value;
	var subject = document.getElementById("inputsubject").value;
	var owner = document.getElementById("owner")
	var admin = document.getElementById("admin")
	var tenant = document.getElementById("tenant")
	console.log(owner.checked,tenant.checked,admin.checked,subject)
	var tmplist = [];
	ref.child("notices/"+subject+"/Description").set(subject+"!@#"+txtarea);
	if(isFileUploaded==false){
		ref.child("notices/"+subject+"/Image").set(URL);

	}
	else{

		ref.child("notices/"+subject+"/Image").set(URL);
	}
	ref.child("notices/"+subject+"/ReadReceipt").set("No");


	if(owner.checked){
		tmplist.push("Owner");
	}
	if(tenant.checked){
		tmplist.push("Tenant");
	}
	if(admin.checked){
		tmplist.push("Admin");
	}
	var noticenumberInstring = noticeNumber.toString();
	console.log(noticenumberInstring);
	ref.child("notices/"+subject+"/Type").set(tmplist);

	window.alert("Notice Successfully Sent")


	//ref.child("notices/"+subject+"/Description").set(txtarea);


	
};



SmartSociety.prototype.uploadFile = function(){
	
	

	
};




