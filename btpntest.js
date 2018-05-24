var request = require('request');
var cheerio = require('cheerio');
var mysql = require('mysql');
var htmlToText = require('html-to-text');

var url_site = 'https://www.tokopedia.com/people/20172277?nref=acchead';

request(url_site, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("URL: " + url_site);
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

var name = htmlToText.fromString($('.user-title').html());
var email = htmlToText.fromString($('.email-img-people').html());
var telp = htmlToText.fromString($('.msisdn-img-people').html());
var birthdate = htmlToText.fromString($('.birthdate-people').html());

console.log("Name  		: " + name);
console.log("Email 		: " + email);
console.log("telp  		: " + telp);
console.log("bitthdate 	: " + birthdate);

  process.exit();
});