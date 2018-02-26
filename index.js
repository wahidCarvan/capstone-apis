'use strict';
//variables decalred in the global scope should be ALL CAPS
// search path
const EDAMAM_SEARCH_URL = 'https://api.edamam.com/search'
// we add key
const edamam_api_key ='1eb7cd79e13138ae5d8aeba55d10137c'	

const edamam_application_id = '4b7a6459'

// getDataFromFoodApi takes 2 arguments search term and the callback 
//a callback is a function is executed after another one is called.
function getDataFromFoodApi(searchTerm, callback) {
  const query = {
  	q:`${searchTerm}`,
  	app_id: `${edamam_application_id}`,
    app_key: `${edamam_api_key}`,
    // from: 5,
    // to: 10,
  }
  //$ sign is jquery unless its a template literal. template literal is `${edamam_application_id}`
  console.log(query);
  $.getJSON(EDAMAM_SEARCH_URL, query, callback);
}
// function stub--google
// render the results
function renderResults(result){
	console.log(result);
	console.log(data);
		return `
	<div>
	<h2>
	<h3>
	<a class ='js-edamam-result' href='https://' target = '_blank'>
	<h3>
	`
}
// function display the data
function displayEdamamData(data){
	const results = data.items.map((item, index) =>
		renderResult(item));
	$('js-food-results').html(results);
}
// function trigger the submit button

function watchSubmit() {
	$('.js-search-form').submit(event =>{
		//prevents it from going to the server
		event.preventDefault();
		const queryTarget = $(event.currentTarget).find('.js-query-search');
		const query = queryTarget.val();
		//clear the input 
		queryTarget.val("");
		//do we add the google maps and you tube functions to our arguments below?
		//query is a object which we are passing in. displayEdamamData is a call function
		getDataFromFoodApi(query, displayEdamamData);
	});
}


$(watchSubmit);


// take the ingrediants for the recipe, do a search using the walmart api

// walmart api
// get the edamam 

// google api
// const GOOGLE_MAP_SEARCH_ URL: ''
// const GOOGLE_MAP_API = "AIzaSyBUoQHu_qBPC8oNhbW9dMDFB7Wr4fsByrg"



// 1. go do the mockingbird
// 2. read the google maps documentation, understand how it pertains to the app
// look at the sup example code
//have all the walmarts in the area show up as markers
//review git and git hub



