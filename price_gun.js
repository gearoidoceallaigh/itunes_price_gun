function price_gun(id) {
	console.log("id is: " + id);
	var url = "http://itunes.apple.com/lookup?id=" + id;
	console.log("url is: " + url);
	$.ajax({
		url: "http://itunes.apple.com/lookup?id=" + id,
		dataType: 'JSONP'
	 })
	.done(function(data) { 
		var result = data.results[0].formattedPrice;
		console.log("res: " + result);
		return result; 
	})
	.fail(function(data) { 
		console.log("Something went wrong, spitting the output at ya!");
		console.log(data);
		return false; 
	})
}
	