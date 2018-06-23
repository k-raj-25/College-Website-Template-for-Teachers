function validate() {
	if(isNaN(document.getElementById("roll").value)) {
		document.getElementById("roll").focus();
		return false;
	}
	return true;
}