function addImageCircle(imageArray, size, className){
	var element;
	var span;

	for (var i = 0; i < size; i++) {
		element = document.createElement("img");
		element.setAttribute("src", "img/" + imageArray[i].name + ".png");
		element.setAttribute("alt", imageArray[i].title);
		element.setAttribute("id", imageArray[i].name);
		span = document.createElement("span");
		span.className = "deg" + Math.round(i * 360/size);
		span.append(element);
		$("#" + className).append(span);
		if (className === "music") {
			element = document.createElement("a");
			element.setAttribute("target", "_blank");
			element.setAttribute("href", imageArray[i].href);
			$("#" + className).append(element);
			element.append(span);
		}
	}
}
	
var countries = [{name: "UK", title: "United Kingdom"}, {name: "usa", title: "USA"}, {name: "spain", title: "Spain"},
				{name: "canada", title: "Canada"}, {name: "botswana", title: "Botswana"}, {name: "germany", title: "Germany"},
				{name: "netherlands", title: "Netherlands"}];
var books = [{name: "etranger", title: "L'étranger"}, {name: "hitch", title: "The Hitchhiker's Guide to the Galaxy"},
			{name: "moon", title: "Moon Palace"}, {name: "vernon", title: "Vernon Subutex"}];
var cinema = [{name: "alabama", title: "Alabama Monroe"}, {name: "seal", title: "The Seventh Seal"},
			{name: "jacket", title: "Full Metal Jacket"}, {name: "fargo", title: "Fargo"},
			{name: "pulp", title: "Pulp Fiction"}];
var sports = [{name: "judo", title: "judo"}, {name: "rando", title: "randonnée"}, {name: "ping_pong", title: "ping pong"},
			{name: "bad", title: "badminton"}, {name: "velo", title: "vélo"}];
var music = [{name: "clapton", title: "Eric Clapton", href: ""},
			{name: "boris", title: "Boris Brejcha", href: "https://www.youtube.com/watch?v=pEMOSjkz7xQ"},
			{name: "feist", title: "Feist", href: "https://www.youtube.com/watch?v=wfEPvebGGJM&list=PLLtsHTptOPbU8eYOKnOAd8NdppR2jAX4W"},
			{name: "nirvana", title: "Nirvana", href: "https://www.youtube.com/watch?v=mGpYumd_PHE"},
			{name: "elvis", title: "Roméo Elvis", href: "https://www.youtube.com/watch?v=ht8FlJjdBJY"}];
addImageCircle(sports, sports.length, "sports");
addImageCircle(countries, countries.length, "flags");
addImageCircle(books, books.length, "books");
/*addImageCircle(cinema, cinema.length, "cinema");
addImageCircle(music, music.length, "music");*/
