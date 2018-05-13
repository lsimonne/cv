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
	}
}

var sports = [{name: "judo", title: "judo"}, {name: "rando", title: "randonnée"}, {name: "ping_pong", title: "ping pong"},
			{name: "bad", title: "badminton"}, {name: "velo", title: "vélo"}];

addImageCircle(sports, sports.length, "sports");
