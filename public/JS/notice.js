var ref = firebase.database().ref("/Society/services/");
var noticeNumber = 0;
window.onload = function(){
	window.SmartSociety = new SmartSociety();
};

function SmartSociety(){
	var addnotice = document.getElementById("addnoticebtn");
	var viewnotice = document.getElementById("viewnoticebtn");

	addnotice.addEventListener('click',this.addNotice.bind(this));

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
	ref.child("notices/"+subject+"/Image").set(false);
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



$(function() {
  $('input[type=file]').change(function(){
    var t = $(this).val();
    var labelText = 'File : ' + t.substr(12, t.length);
    $(this).prev('label').text(labelText);
  })
});




