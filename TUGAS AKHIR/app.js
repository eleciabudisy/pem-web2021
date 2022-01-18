const search = () => {
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const storeitems = document.getElementById("kost-list")
	const product = document.querySelectorAll(".gallery")
	const pname = storeitems.getElementsByClassName("desc")

	for ( var i = 0; i < pname.length; i++){
		let match = product[i].getElementsByClassName('desc')[0];

		if (match) {
			let textvalue = match.textContent || match.innerHTML

			if (textvalue.toUpperCase().indexOf(searchbox) > -1){
				product[i].style.display = "";
			} else{
				product[i].style.display = "none";
			}
		}
	}
}