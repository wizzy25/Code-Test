'use strict';

const express = require('express');
const path = require('path');
const request = require('request');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

//ROUTE FOR HOMEPAGE
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

//ROUTE HANDLER FOR VIEW
app.get('/view', (req, res) => {
	request.get('http://pastebin.com/raw/943PQQ0n', function (error, response, body) {
		if (!error && response.statusCode == "200") {
			console.log(JSON.stringify(res.req.headers, null, 2));
			res.status(200).send(body);
		}
		else throw error;
	});
});

//ROUTE HANDLER FOR DOWNLOAD
app.get('/download', (req, res) => {
	request.get('http://pastebin.com/raw/943PQQ0n', function (error, response, body) {
		if (!error && response.statusCode == "200") {
			res.header("Content-Disposition", "attachment;filename=Countries_List.csv"); 
			res.type("text/csv");
			res.status(200).send(body);
		}
		else throw error;
	});
});

app.listen(3000, () => {
	console.log('Listening on 3000')
});