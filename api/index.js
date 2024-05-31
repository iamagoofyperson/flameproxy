const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('public'));

app.get('/api/proxy', (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL is required');
    }

    request(url, (error, response, body) => {
        if (error) {
            return res.status(500).send('Error accessing the URL');
        }
        res.send(body);
    });
});

module.exports = (req, res) => {
    app(req, res);
};
