const request = require('request');
const api = require('../configs/config');

class AuthController {

  async login (req, res) {
    const url = `https://accounts.spotify.com/authorize?client_id=${api.client_id}&response_type=${api.response_type}&scope=${api.scope}&redirect_uri=${api.redirect_uri}`;

    request(url , function (error, response, body) {
      return res.json({
        statusCode: response && response.statusCode,
        error: error,
        body: body
      });
    });
  }
}

module.exports = new AuthController();