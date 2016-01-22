
var movies = [];
	
var movie01 = {
	title: "<h1>Star Wars: A New Hope</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91GAgvnO3AL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option>        <option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>Young farm boy Luke Skywalker is thrust into a galaxy of adventure when he intercepts a distress call from the captive Princess Leia. The event launches him on a daring mission to rescue her from the clutches of Darth Vader and the Evil Empire.</p>",
	price: "<p>$19.99</p>"
}

var movie02 = {
	title: "<h1>Star Wars: The Empire Strikes Back</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91MYvGBxoCL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Background Color</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Text Color</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option>        <option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>YThe Rebels scatter after the Empire attacks their base on the ice planet Hoth. Han Solo and Princess Leia are pursued by Imperials, while Luke trains with Jedi Master Yoda. Luke must battle Darth Vader and learns the shocking truth of his past.</p>",
	price: "<p>$29.99</p>"
}

var movie03 = {
title: "<h1>Missing Michael</h1>",
imageURL: "<img src='http://ecx.images-amazon.com/images/I/91GAgvnO3AL._UY200_RI_UY200_.jpg'>",
bgSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
txtSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option>        <option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
description: "<p>A horrible movie with spectacular music. The plot is not cohesive the acting is atrocious, but man is the music out of this world.</p>",
price: "<p>$.49</p>"
};


var movie04 = {
title: "<h1>Babe</h1>",
imageURL: "<img src='http://ecx.images-amazon.com/images/I/91GAgvnO3AL._UY200_RI_UY200_.jpg'>",
bgSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
txtSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option>        <option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
description: "<p>This is about a pig. This is about a pig This is about a pigThis is about a pig This is about a pig This is about a pig This is about a pig</p>",
price: "<p>$.49</p>"
};

movies.push(movie01);
movies.push(movie02);	

function addProduct() {
	for (var i = 0; i < movies.length; i++) {
		var currentArticle = document.getElementById("movie");
		currentArticle.innerHTML += "<article id='movie" + i + "'>";			
		currentArticle.innerHTML += movies[i].title;
		currentArticle.innerHTML += movies[i].imageURL;
		currentArticle.innerHTML += movies[i].bgSelector;
		currentArticle.innerHTML += movies[i].txtSelector;
		currentArticle.innerHTML += movies[i].description;
		currentArticle.innerHTML += movies[i].price;
		currentArticle.innerHTML += "</article>";
	};
}

// document.getElementById('createButton').addEventListener('click', createProduct);
// function createProduct() {
// 	movies.push(movie01);
// 	addProduct();
// }












