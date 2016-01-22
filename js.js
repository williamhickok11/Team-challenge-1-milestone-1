
var movies = [];
	
var movie0 = {
	title: "<h1>A New Hope</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91GAgvnO3AL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>Young farm boy Luke Skywalker is thrust into a galaxy of adventure when he intercepts a distress call from the captive Princess Leia. The event launches him on a daring mission to rescue her from the clutches of Darth Vader and the Evil Empire.</p>",
	price: "<p>$19.99</p>"
}

var movie1 = {
	title: "<h1>The Empire Strikes Back</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91MYvGBxoCL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Background Color</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Text Color</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>YThe Rebels scatter after the Empire attacks their base on the ice planet Hoth. Han Solo and Princess Leia are pursued by Imperials, while Luke trains with Jedi Master Yoda. Luke must battle Darth Vader and learns the shocking truth of his past.</p>",
	price: "<p>$29.99</p>"
}

var movie2 = {
	title: "<h1>Missing Michael</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91GAgvnO3AL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option>        <option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>A horrible movie with spectacular music. The plot is not cohesive the acting is atrocious, but man is the music out of this world.</p>",
	price: "<p>$.49</p>"
};


var movie3 = {
	title: "<h1>Babe</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91GAgvnO3AL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select class="destination-type" name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option>        <option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>This is about a pig. This is about a pig This is about a pigThis is about a pig This is about a pig This is about a pig This is about a pig</p>",
	price: "<p>$.49</p>"
};

movies.push(movie0);
movies.push(movie1);	
movies.push(movie2);	
movies.push(movie3);	

var count = 0;

function addProduct() {
	
	console.log(count);
	var currentArticle = document.getElementById("movie");
	currentArticle.innerHTML += "<article id='movie" + count + "'>";			
	currentArticle.innerHTML += movies[count].title;
	currentArticle.innerHTML += movies[count].imageURL;
	currentArticle.innerHTML += movies[count].bgSelector;
	currentArticle.innerHTML += movies[count].txtSelector;
	currentArticle.innerHTML += movies[count].description;
	currentArticle.innerHTML += movies[count].price;
	currentArticle.innerHTML += "</article>";
	count++;
}














