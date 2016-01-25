var movieArray = [];

var movie0 = {
	title: "<h1>A New Hope</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91GAgvnO3AL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select id="bgSelector0"
   name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select id="txtSelector0"
   name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>Young farm boy Luke Skywalker is thrust into a galaxy of adventure when he intercepts a distress call from the captive Princess Leia. The event launches him on a daring mission to rescue her from the clutches of Darth Vader and the Evil Empire.</p>",
	price: "<p>$19.99</p>"
};

var movie1 = {
	title: "<h1>The Empire Strikes Back</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91MYvGBxoCL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select id="bgSelector1"
   name="type"><option selected="selected" disabled="disabled">Choose Background Color</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select id="txtSelector1"
   name="type"><option selected="selected" disabled="disabled">Choose Text Color</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>YThe Rebels scatter after the Empire attacks their base on the ice planet Hoth. Han Solo and Princess Leia are pursued by Imperials, while Luke trains with Jedi Master Yoda. Luke must battle Darth Vader and learns the shocking truth of his past.</p>",
	price: "<p>$29.99</p>"
};

var movie2 = {
	title: "<h1>Missing Michael</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91GAgvnO3AL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select id="bgSelector2"
   name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select id="txtSelector2"
   name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option>        <option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>A horrible movie with spectacular music. The plot is not cohesive the acting is atrocious, but man is the music out of this world.</p>",
	price: "<p>$.49</p>"
};

var movie3 = {
	title: "<h1>Babe</h1>",
	imageURL: "<img src='http://ecx.images-amazon.com/images/I/91GAgvnO3AL._UY200_RI_UY200_.jpg'>",
	bgSelector: '<select id="bgSelector3"
   name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option><option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	txtSelector: '<select id="txtSelector3"
   name="type"><option selected="selected" disabled="disabled">Choose Destination</option><option>Oranjestad, Aruba</option><option>Buenos Aires, Argentina</option><option>Marrakech, Morocco</option>        <option>Bangkok, Thailand </option><option>Singapore</option><option>Hanoi, Vietnam</option><option>Dublin, Ireland</option><option>Queenstown, New Zealand</option><option>Bora Bora</option>',
	description: "<p>This is about a pig. This is about a pig This is about a pigThis is about a pig This is about a pig This is about a pig This is about a pig</p>",
	price: "<p>$.49</p>"
};

movieArray.push(movie0);
movieArray.push(movie1);	
movieArray.push(movie2);	
movieArray.push(movie3);	


var count = -1;

function deleteButton(button) {
  button.parentNode.parentNode.removeChild(button.parentNode);
  return false;
};

//*** CHANGE THE BACKGROUND FUNCTION ***//
function changeBG(this) {
  var e = document.getElementById("ddlViewBy");
  var strUser = e.options[e.selectedIndex].value;
};



//*** ADD CARDS TO THE DOM ***//
function addProduct() {
	
  //*** KEEP TRACK OF THE NUMBER OF CLICKS ***//
  count++;
  console.log(count);
  if (count >= movieArray.length - 1) {
    //*** HIDE BUTTON WHEN THERE ARE NO MORE MOVIES ***//
    function hide() {
      var createButtonEle = document.getElementById('buttonSection');
      createButtonEle.innerHTML = '<br>';
    }
    hide();
  };

  //*** ADD ARTICLES-CARDS TO THE DIV ***//
  var divSelector = document.getElementById("movie");
	divSelector.innerHTML += "<article id='movie" + count + "'></article>";
  
  //*** ADD CONTENT TO THE CARDS ***//
  var currentArticle = document.getElementById("movie" + count);
  currentArticle.innerHTML += '<button onclick="deleteButton(this)">Delete</button>'
	currentArticle.innerHTML += movieArray[count].title;
	currentArticle.innerHTML += movieArray[count].imageURL;
	currentArticle.innerHTML += movieArray[count].bgSelector;
	currentArticle.innerHTML += movieArray[count].txtSelector;
  currentArticle.innerHTML += '<button onclick="changeBG(this)">Submit</button>';
	currentArticle.innerHTML += movieArray[count].description;
	currentArticle.innerHTML += movieArray[count].price;
};














