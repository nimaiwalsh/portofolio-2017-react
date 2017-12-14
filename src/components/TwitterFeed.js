import React, { Component } from 'react';
const TWITTER_BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAG9p3gAAAAAAK86PnIdiZcbh4ITEFG1FiKI1fxA%3DO4IScQEnyl4KXa1JfbIXwKevpJFBkoEe6Zq7XKAOH2E7sis9Ui';

class TwitterFeed extends Component {
  componentDidMount() {
    const request = require("request");
    const twitter_api = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
    const bearer_token = TWITTER_BEARER_TOKEN;
    var options = {
        method: 'GET',
        url: twitter_api,
        qs: {
            "screen_name": "nimaiwalsh"
        },
        json: true,
        headers: {
            "Authorization": "Bearer " + bearer_token
        }
    };

    request(options, function(error, response, body) {
      console.dir(body);
    });
  }

  render() {
    return(
      <div>PLACEHOLDER</div>
    )
  }
}

export default TwitterFeed