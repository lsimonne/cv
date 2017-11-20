function add_image_circle(image_array, size, class_name){
	var i = 0;
	var el;

	while (i < size) {
		el = document.createElement("img");
		el.setAttribute("src", "img/" + image_array[i] + ".png");
		el.setAttribute("alt", image_array[i]);
		el.setAttribute("id", image_array[i]);
		var span = document.createElement("span");
		span.className = "deg" + Math.round(i * 360/size);
		span.append(el);
		$("#" + class_name).append(span);
		i++;
	}
}
	
var countries = ["uk", "usa", "spain", "canada", "botswana", "germany", "netherlands"];
var books = ["etranger", "hitch", "moon", "vernon"];
add_image_circle(countries, countries.length, "flags");
add_image_circle(books, books.length, "books");
