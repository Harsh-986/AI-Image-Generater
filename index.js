in this i will be making a simple image generator using open ai api
// and express js
const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('assets'));
app.use(express.static('images'));
app.use(express.static('uploads'));
app.use(express.static('styles'));
app.use(express.static('scripts'));
app.use(express.static('fonts'));
app.use(express.static('images'));
app.use(express.static('videos'));
app.use(express.static('audio'));
app.use(express.static('docs'));
app.use(express.static('data'));
app.use(express.static('logs'));
app.use(express.static('temp'));
