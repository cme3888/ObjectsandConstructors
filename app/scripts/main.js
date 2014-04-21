// $(document).ready(function() {

// object (1)

var petsTemplate = function(petsData) {
	var markup="";
	var i;

	for (i=0; i<petsData.length; i++) {
		markup += '<h1>' + petsData[i].parent + '</h1><h2>' + animalData[i].child + '</h2>';

	}

	return markup;
};

var pets = [

    {
	pet: 'cat';
	name: 'Casper';
	},
	{
	pet: 'cat';
	name: 'Riskit';
	},
	{
	pet: 'dog';
	name:  'Honda';
	},
	{
	pet:'dog';
	name:'Juliet';
	}
	{
	pet:'turtle';
	name:'TurtsMaGurts';
	}
	

];

$('.Pets').append();


// object (2)

var bookTemplate = function(bookData) {
	var markup="";
	var i;

	for (i=0; i<bookData.length; i++) {
		markup += '<h1>' + bookData[i].book + '</h1><h2>' + bookData[i].author '</h2><h3>';
	
	}

	return markup;
};

var Books  =  [
	{
		book:'House of Sand';
		author:'The Sand-Man';
	}
	{
		book:'The Boogie for Dummies ';
		author:'K C and the Sunshine Band';
	}
	{
		book:'Own your own BiZZZnes';
		author:'Flava Flav';
	}
	{
		book:'Fooling America';
		author:'The G.O.P';
	}
	

];

$(".books").append();



//Constructor (1)

function Car(year, make, model, color,) {
	this.year = year;
	this.make = make;
	this.model = model;
	this.color = color;
	
	this.drive = function() {
		this.fast = true;
	}
}

var dream = new Car (1976,'Aston Martin', 'V8 Saloon', 'White', true);
var nightmare = new Car (1995,'Astro', 'Caravan', 'Yellow', false);
var reality = new Car (2003,'Pontiac', 'Grand Am', 'Black', true);



