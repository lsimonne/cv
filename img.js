function add_image_circle(imageArray, size, className){
	var element;
	var span;

	for (var i = 0; i < size; i++) {
		element = document.createElement("img");
		element.setAttribute("src", "img/" + imageArray[i].name + ".png");
		element.setAttribute("alt", imageArray[i].name);
		element.setAttribute("id", imageArray[i].name);
		span = document.createElement("span");
		span.className = "deg" + Math.round(i * 360/size);
		span.append(element);
		$("#" + className).append(span);
	}
}
	
var countries = [{name: "uk"}, {name: "usa"}, {name: "spain"}, {name: "canada"}, {name: "botswana"}, {name: "germany"}, {name: "netherlands"}];
var books = [{name: "etranger"}, {name: "hitch"}, {name: "moon"}, {name: "vernon"}];
add_image_circle(countries, countries.length, "flags");
add_image_circle(books, books.length, "books");
