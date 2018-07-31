var rows = document.querySelectorAll(".tr")
rows.forEach(function(row){
	var day = row.querySelectorAll("td")[1].querySelector("font").textContent;

	if (day.indexOf(" ")>0)//TODO: skip Holidays
		row.click();
	
});
