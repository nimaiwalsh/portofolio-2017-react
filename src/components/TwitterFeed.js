import React, { Component } from 'react';
const CONSUMER_KEY = 'u9NAGnkkxRKhaHZUYBvfh3mnq';
const CONSUMER_SECRET = '3hzFIcvt1GRgFLPkvon5pMcPTbZHnNOn11DNqBqJaGdMaHwmcr';
const TWITTER_BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAG9p3gAAAAAAK86PnIdiZcbh4ITEFG1FiKI1fxA%3DO4IScQEnyl4KXa1JfbIXwKevpJFBkoEe6Zq7XKAOH2E7sis9Ui';

class TwitterFeed extends Component {
  componentDidMount() {
    const Twitter = require('twitter');
    const client = new Twitter({
      consumer_key: CONSUMER_KEY,
      consumer_secret: CONSUMER_SECRET,
      bearer_token: TWITTER_BEARER_TOKEN,
    });
    const params = {screen_name: 'nimaiwalsh'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
          console.log(tweets);
      } else {
          throw error
      }
    });
  }

  render() {
    return(
      <div>PLACEHOLDER</div>
    )
  }
}

export default TwitterFeed